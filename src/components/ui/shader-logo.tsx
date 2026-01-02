"use client"

import { useEffect, useRef, useCallback } from "react"
import * as THREE from "three"

interface ShaderLogoProps {
  size?: number;
  className?: string;
}

export function ShaderLogo({ size = 40, className = "" }: ShaderLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    camera: THREE.Camera
    scene: THREE.Scene
    renderer: THREE.WebGLRenderer
    uniforms: any
    animationId: number
  } | null>(null)

  // Function to reset/refresh the animation
  const refreshAnimation = useCallback(() => {
    if (sceneRef.current) {
      // Jump time forward to create a "refresh" effect
      sceneRef.current.uniforms.time.value += Math.random() * 10 + 5
    }
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    // Vertex shader
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `

    // Fragment shader - updated with vibrant gradient background
    const fragmentShader = `
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time * 0.15; // 3x faster animation
        float lineWidth = 0.003;

        // Vibrant gradient background
        vec3 bgColor = vec3(0.1, 0.05, 0.2); // Deep purple base
        bgColor += 0.1 * vec3(0.3, 0.1, 0.4) * (1.0 + sin(t * 0.5));
        
        vec3 color = bgColor;
        for(int j = 0; j < 3; j++){
          for(int i=0; i < 6; i++){ // More iterations for denser effect
            color[j] += lineWidth*float(i*i) / abs(fract(t - 0.01*float(j)+float(i)*0.008)*5.0 - length(uv) + mod(uv.x+uv.y, 0.15));
          }
        }
        
        // Add cyan and magenta tints
        color.r += 0.15;
        color.b += 0.2;
        
        gl_FragColor = vec4(color[0],color[1],color[2],1.0);
      }
    `

    // Initialize Three.js scene
    const camera = new THREE.Camera()
    camera.position.z = 1

    const scene = new THREE.Scene()
    const geometry = new THREE.PlaneGeometry(2, 2)

    const uniforms = {
      time: { type: "f", value: 1.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
    }

    const material = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setClearColor(0x000000, 0)

    container.appendChild(renderer.domElement)

    // Handle resize
    const onResize = () => {
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height)
      uniforms.resolution.value.x = renderer.domElement.width
      uniforms.resolution.value.y = renderer.domElement.height
    }

    onResize()
    window.addEventListener("resize", onResize, false)

    // Click handler for refresh on any click
    const handleGlobalClick = () => {
      uniforms.time.value += Math.random() * 8 + 3
    }
    document.addEventListener("click", handleGlobalClick)

    // Animation loop - faster updates
    const animate = () => {
      const animationId = requestAnimationFrame(animate)
      uniforms.time.value += 0.12 // 2.4x faster than before
      renderer.render(scene, camera)

      if (sceneRef.current) {
        sceneRef.current.animationId = animationId
      }
    }

    sceneRef.current = {
      camera,
      scene,
      renderer,
      uniforms,
      animationId: 0,
    }

    animate()

    return () => {
      window.removeEventListener("resize", onResize)
      document.removeEventListener("click", handleGlobalClick)

      if (sceneRef.current) {
        cancelAnimationFrame(sceneRef.current.animationId)

        if (container && sceneRef.current.renderer.domElement) {
          container.removeChild(sceneRef.current.renderer.domElement)
        }

        sceneRef.current.renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`rounded-lg overflow-hidden cursor-pointer ${className}`}
      style={{
        width: size,
        height: size,
        background: "linear-gradient(135deg, #1a0a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
      onClick={refreshAnimation}
      title="Click to refresh"
    />
  )
}

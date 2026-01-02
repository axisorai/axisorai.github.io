import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Products } from '@/components/Products';
import { Method } from '@/components/Method';
import { Community } from '@/components/Community';
import { Commitment } from '@/components/Commitment';
import { TrustedBy } from '@/components/TrustedBy';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { VideoBackground } from '@/components/VideoBackground';

const Services = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <VideoBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Products />
        <Method />
        <Community />
        <Commitment />
        <TrustedBy />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

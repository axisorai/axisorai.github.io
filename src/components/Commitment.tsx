import { Shield, Lock, Eye } from 'lucide-react';

const commitments = [
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Your data is protected with industry-leading security standards and encryption.',
  },
  {
    icon: Lock,
    title: 'Full Compliance',
    description: 'We maintain compliance with major regulations including GDPR and SOC 2.',
  },
  {
    icon: Eye,
    title: 'Complete Transparency',
    description: 'Clear pricing, no hidden fees, and full visibility into how your data is used.',
  },
];

export function Commitment() {
  return (
    <section id="commitment" className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Commitment</span> to You
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trust is the foundation of our partnership. We take security, compliance, and transparency seriously.
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {commitments.map((item, index) => (
            <div
              key={item.title}
              className="text-center p-8"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
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

export default Index;

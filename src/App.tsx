import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Catalog from '@/components/Catalog';
import HowToBuy from '@/components/HowToBuy';
import InfoSection from '@/components/InfoSection';
import InstagramSection from '@/components/InstagramSection';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <HowToBuy />
        <InfoSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

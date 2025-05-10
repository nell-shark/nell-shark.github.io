import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Home } from '@/components/Home';
import { Navbar } from '@/components/Navbar';

export function App() {
  return (
    <main className='container mx-auto'>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

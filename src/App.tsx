import '@/App.css';

import { Footer } from '@/components/Footer';
import { Home } from '@/components/Home';
import { Navbar } from '@/components/Navbar';

export function App() {
  return (
    <main className='container mx-auto min-h-[100vh]'>
      <Navbar />
      <Home />
      <Footer />
    </main>
  );
}

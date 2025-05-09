import { useEffect, useState } from 'react';

import Logo from '@/assets/images/logo.svg';
import { NavbarItem } from '@/components/Navbar/NavbarItem';

const NAVBAR_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about-me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const background = scrolled ? 'bg-background/80' : 'bg-black/80';

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-4 z-50 mx-auto h-[60px] w-full max-w-screen-lg rounded-3xl border border-transparent px-5 shadow-sm backdrop-blur-[10px] transition-colors duration-300 ${background}`}
    >
      <div className='mx-auto flex h-[60px] w-full items-center justify-between'>
        <img src={Logo} alt='Logo' width='40' height='40' />
        <nav className='flex items-center space-x-3'>
          <ul className='flex space-x-2'>
            {NAVBAR_ITEMS.map(({ href, label }) => (
              <NavbarItem key={href} label={label} href={`#${label.toLowerCase()}`} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

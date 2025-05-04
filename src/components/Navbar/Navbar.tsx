import { useEffect, useState } from 'react';

import Logo from '@/assets/logo.svg';
import { NavbarItem } from '@/components/Navbar/NavbarItem';

const NAVBAR_ITEMS = [
  { label: 'About me', href: '#about-me' },
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
      className={`fixed inset-x-0 top-4 z-50 h-[60px] rounded-3xl border px-5 shadow-sm backdrop-blur-[10px] mx-auto w-full max-w-screen-lg transition-colors duration-300 border-transparent ${background}`}
    >
      <div className='w-full mx-auto flex h-[60px] items-center justify-between'>
        <img src={Logo} alt='Logo' width='40' height='40' />
        <nav className='flex items-center space-x-3'>
          <ul className='space-x-2 flex'>
            {NAVBAR_ITEMS.map(({ href, label }) => (
              <NavbarItem key={href} label={label} href={`#${label.replace(' ', '-').toLowerCase()}`} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

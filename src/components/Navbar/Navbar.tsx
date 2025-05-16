import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import Logo from '@/assets/images/logo.svg';
import { NavbarItem } from '@/components/Navbar/NavbarItem';

export function Navbar() {
  const { t } = useTranslation();

  const NAVBAR_ITEMS = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('skills'), href: '#skills' },
    { label: t('projects'), href: '#projects' },
    { label: t('contact'), href: '#contact' }
  ];

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
      className={`fixed inset-x-0 top-4 z-50 mx-auto h-[60px] w-full max-w-screen-lg rounded-3xl border border-transparent px-5 shadow-sm backdrop-blur-[10px] transition-colors duration-300 ${background} max-sm:hidden`}
    >
      <div className='mx-auto flex h-[60px] w-full items-center justify-between'>
        <img src={Logo} alt='Logo' width='40' height='40' />
        <nav className='flex items-center space-x-3'>
          <ul className='flex space-x-2'>
            {NAVBAR_ITEMS.map(({ href, label }) => (
              <NavbarItem key={href} label={label} href={href} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

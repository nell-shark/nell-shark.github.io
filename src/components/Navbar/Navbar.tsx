import Logo from '@/assets/logo.svg';
import { NavbarItem } from '@/components/Navbar/NavbarItem';

export function Navbar() {
  return (
    <header className='fixed inset-x-0 top-4 z-50 h-[60px] rounded-3xl border px-5 shadow-sm backdrop-blur-[10px] bg-background/80 mx-auto w-full max-w-screen-lg border-transparent'>
      <div className='w-full mx-auto flex h-[60px] items-center justify-between'>
        <img src={Logo} alt='Logo' width='40' height='40' />
        <div className='flex items-center space-x-3'>
          <ul className='space-x-2 flex'>
            {['About me', 'Skills', 'Projects', 'Contact'].map(item => (
              <NavbarItem key={item} label={item} href={`#${item.replace(' ', '-').toLowerCase()}`} />
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

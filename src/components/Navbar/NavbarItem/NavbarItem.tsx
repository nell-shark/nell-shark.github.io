type NavbarItemProps = {
  label: string;
  href: string;
};

export function NavbarItem({ label, href }: Readonly<NavbarItemProps>) {
  return (
    <li>
      <a
        href={href}
        className='inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-2 text-[rgb(159,159,159)]
        transition-colors duration-400 hover:text-white'
      >
        {label}
      </a>
    </li>
  );
}

type SocialLinkProps = {
  href: string;
  text: string;
  isExternal?: boolean;
};

export function SocialLink({ href, text, isExternal = false }: Readonly<SocialLinkProps>) {
  return (
    <a
      href={href}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : ''}
      className='rounded-xl border border-white px-4 py-2 text-white transition-colors duration-400 ease-in-out hover:bg-white hover:text-black'
    >
      {text}
    </a>
  );
}

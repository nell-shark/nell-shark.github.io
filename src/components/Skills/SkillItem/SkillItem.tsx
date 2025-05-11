type SkillItemProps = {
  href: string;
  imageSrc: string;
  text: string;
};

export function SkillItem({ href, imageSrc, text }: Readonly<SkillItemProps>) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='mb-2 flex h-[128px] w-[128px] flex-col items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900 p-4 transition duration-200 hover:border-zinc-500 hover:bg-zinc-800'
    >
      <img src={imageSrc} alt={text} className='mb-2 h-8' />
      <span className='text-zinc-200'>{text}</span>
    </a>
  );
}

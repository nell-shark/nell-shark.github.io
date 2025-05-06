import { DotsBackground } from '@/components/Home/DotsBackground';
import { SocialLink } from '@/components/Home/SocialLink';
import { EMAIL_URL, GITHUB_PROFILE_URL, TELEGRAM_PROFILE_URL } from '@/data/info';

const SocialLinks = [
  { href: GITHUB_PROFILE_URL, text: 'GitHub', isExternal: true },
  { href: EMAIL_URL, text: 'Email', isExternal: false },
  { href: TELEGRAM_PROFILE_URL, text: 'Telegram', isExternal: true }
];

export function Home() {
  return (
    <section
      id='home'
      className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent'
    >
      <DotsBackground />

      <div className='z-1 mx-auto max-w-4xl space-y-4 px-4 text-center md:space-y-6'>
        <div className='animate-[fadeIn_0.5s_ease-in-out] bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text font-mono text-5xl text-transparent sm:text-6xl md:text-7xl'>
          &lt;Hello World /&gt;
        </div>

        <h1 className='animate-[fadeIn_1s_ease-in-out] text-4xl font-bold text-white'>I'm Krivolapov Vladislav</h1>

        <p className='animate-[fadeIn_1.5s_ease-in-out] text-lg text-amber-400'>Back-End Developer</p>
      </div>

      <div className='z-1 mt-6 flex animate-[fadeIn_2s_ease-in-out] gap-4'>
        {SocialLinks.map(({ href, text, isExternal }) => (
          <SocialLink key={href} href={href} text={text} isExternal={isExternal} />
        ))}
      </div>
    </section>
  );
}

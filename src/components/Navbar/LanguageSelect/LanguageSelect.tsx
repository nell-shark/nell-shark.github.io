import { useTranslation } from 'react-i18next';

const LANGUAGES = ['en', 'ru'];

type LanguageSelectProps = {
  className?: string;
};

export function LanguageSelect({ className = '' }: Readonly<LanguageSelectProps>) {
  const { i18n } = useTranslation();

  function handleChangeLanguage(lang: string) {
    i18n.changeLanguage(lang);
  }

  return (
    <select
      onChange={e => handleChangeLanguage(e.target.value)}
      value={i18n.language}
      className={`rounded-md border border-none bg-transparent px-3 py-1 text-sm text-[rgb(159,159,159)] transition duration-400 hover:text-white focus:outline-none ${className}`}
    >
      {LANGUAGES.map(lang => (
        <option key={lang} value={lang} className='bg-[#111111] text-white'>
          {lang}
        </option>
      ))}
    </select>
  );
}

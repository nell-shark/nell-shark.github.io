import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  function toggleLanguage(language: string) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  return (
    <ToggleButtonGroup
      className="align-items-center"
      type="radio"
      name="options"
      defaultValue={0}
    >
      {["en", "ru"].map((language, index) => (
        <ToggleButton
          className="text-uppercase"
          id={`tbg-radio-${index}`}
          value={index}
          key={index}
          active={language === localStorage.getItem("language")}
          variant="outline-secondary"
          onChange={() => toggleLanguage(language)}
        >
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

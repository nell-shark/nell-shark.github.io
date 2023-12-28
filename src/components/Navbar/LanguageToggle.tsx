import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = localStorage.getItem("language") || "en";

  function toggleLanguage(language: string) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }

  return (
    <ToggleButtonGroup
      className="align-items-center"
      type="radio"
      name="options"
    >
      {["en", "ru"].map((language, index) => (
        <ToggleButton
          className="text-uppercase"
          id={`tbg-radio-${index}`}
          value={index}
          key={index}
          active={currentLanguage === language}
          variant="outline-secondary"
          onChange={() => toggleLanguage(language)}
        >
          {language}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

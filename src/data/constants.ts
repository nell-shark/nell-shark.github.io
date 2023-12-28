export const GITHUB_URL: string = "https://github.com/nell-shark";
export const TELEGRAM_URL: string = "https://t.me/nellshark";
export const EMAIL_URL: string = "mailto:krivolapov_vladislav@outlook.com";

export const FIPS_URL: string =
  "https://new.fips.ru/registers-doc-view/fips_servlet?DB=EVM&DocNumber=2023660295&TypeFile=html";
export const MOCK_API_HUB_URL: string =
  "https://github.com/nell-shark/mock-api-hub";
export const SPRING_BOOT_REACT_TRACK_PLAYER_URL: string =
  "https://github.com/nell-shark/springboot-react-track-player";

import { ContactInfo } from "@/typings/contact";
import { faGithub, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
export const CONTACT_INFO_LIST: ContactInfo[] = [
  { tag: "github", href: GITHUB_URL, icon: faGithub },
  { tag: "telegram", href: TELEGRAM_URL, icon: faTelegram },
  { tag: "email", href: EMAIL_URL, icon: faAt },
];

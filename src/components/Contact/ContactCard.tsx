import { ContactInfo } from "@/typings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ContactCardProps extends ContactInfo {}

export function ContactCard({ tag, icon, href }: ContactCardProps) {
  return (
    <li>
      <a className={`contact-card ${tag}`} href={href}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <FontAwesomeIcon icon={icon} aria-hidden={true} />
      </a>
    </li>
  );
}

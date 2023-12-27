import { IconPrefix, IconName, IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

export interface ContactCardProps {
  tag: "telegram" | "github" | "email";
  href: string;
  icon:  IconProp;
}

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

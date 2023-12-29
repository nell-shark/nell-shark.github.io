import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ContactInfo {
    tag: "telegram" | "github" | "email";
    href: string;
    icon: IconProp;
}
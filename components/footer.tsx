import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/lib/site";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { href: siteConfig.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: siteConfig.instagram, label: "Instagram", icon: Instagram },
  { href: `mailto:${siteConfig.email}`, label: "Email", icon: Mail },
  { href: `https://wa.me/${siteConfig.whatsapp}`, label: "WhatsApp", icon: MessageCircle }
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.35em] text-white/55">{siteConfig.name}</div>
            <p className="max-w-xl text-sm leading-6 text-white/68">
              {siteConfig.description} Powered by {siteConfig.parentCompany} and led by {siteConfig.founder}.
            </p>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.32em] text-white/55">Founder</div>
            <div className="space-y-2 text-sm text-white/72">
              <div>{siteConfig.founder}</div>
              <Link href={`mailto:${siteConfig.email}`} className="block hover:text-white">
                {siteConfig.email}
              </Link>
              <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="block hover:text-white">
                {siteConfig.whatsappDisplay}
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.32em] text-white/55">Social</div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/78 transition hover:border-[var(--gold)]/50 hover:text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-white/8 py-6 text-xs text-white/44 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SS Marketing Agency. All rights reserved.</span>
          <span>Built for premium performance marketing growth.</span>
        </div>
      </Container>
    </footer>
  );
}

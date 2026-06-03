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
    <footer className="border-t border-slate-900/10 bg-white/70">
      <Container>
        <div className="grid gap-10 py-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="mb-3 text-sm uppercase tracking-[0.35em] text-slate-700">{siteConfig.name}</div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              {siteConfig.description} Powered by {siteConfig.parentCompany} and led by {siteConfig.founder}.
            </p>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.32em] text-slate-700">Founder</div>
            <div className="space-y-2 text-sm text-slate-600">
              <div>{siteConfig.founder}</div>
              <Link href={`mailto:${siteConfig.email}`} className="block hover:text-slate-950">
                {siteConfig.email}
              </Link>
              <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="block hover:text-slate-950">
                {siteConfig.whatsappDisplay}
              </Link>
            </div>
          </div>
          <div>
            <div className="mb-4 text-sm uppercase tracking-[0.32em] text-slate-700">Social</div>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white px-4 py-2 text-sm text-slate-700 transition hover:border-[var(--gold)]/50 hover:text-slate-950"
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
        <div className="flex flex-col gap-2 border-t border-slate-900/8 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} SS Marketing Agency. All rights reserved.</span>
          <span>Built for premium performance marketing growth.</span>
        </div>
      </Container>
    </footer>
  );
}

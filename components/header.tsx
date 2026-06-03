import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Container } from "./container";
import { siteConfig } from "@/lib/site";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Results", href: "/case-studies" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/8 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" alt="" width={44} height={44} className="h-11 w-11 rounded-2xl" />
            <div>
              <div className="text-sm uppercase tracking-[0.32em] text-slate-800">SS Marketing Agency</div>
              <div className="text-xs text-slate-500">Powered by Grevoo</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm text-slate-700 transition hover:text-slate-950">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-medium text-white transition hover:opacity-90"
            >
              Book Strategy Call
            </Link>
          </div>

          <details className="relative lg:hidden">
            <summary className="list-none cursor-pointer rounded-full border border-slate-900/10 bg-white p-3">
              <Menu className="h-5 w-5" />
            </summary>
            <div className="absolute right-0 mt-3 w-72 rounded-3xl border border-slate-900/10 bg-white p-4 shadow-2xl shadow-slate-900/10">
              <div className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500">Navigate</div>
              <div className="flex flex-col gap-1">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-2xl px-4 py-3 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-950"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-3 block rounded-full bg-[var(--gold)] px-4 py-3 text-center text-sm font-medium text-white"
              >
                Book Strategy Call
              </Link>
              <div className="mt-3 text-xs text-slate-500">{siteConfig.whatsappDisplay}</div>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

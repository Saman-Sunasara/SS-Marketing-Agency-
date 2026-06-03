import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <Link
      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20SS%20Marketing%20Agency%2C%20I%27d%20like%20a%20free%20strategy%20call.`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/40 transition hover:scale-[1.03]"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" />
      WhatsApp
    </Link>
  );
}

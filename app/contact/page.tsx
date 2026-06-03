import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build your next growth engine."
              description="Tell us about your business, goals and marketing budget. We will respond with the best next step."
            />
            <div className="mt-8 space-y-3 text-sm text-white/70">
              <div>
                <span className="text-white/45">Founder:</span> {siteConfig.founder}
              </div>
              <div>
                <span className="text-white/45">Email:</span>{" "}
                <Link href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </Link>
              </div>
              <div>
                <span className="text-white/45">WhatsApp:</span>{" "}
                <Link href={`https://wa.me/${siteConfig.whatsapp}`} className="hover:text-white" target="_blank" rel="noreferrer">
                  {siteConfig.whatsappDisplay}
                </Link>
              </div>
            </div>
          </div>
          <div className="glass gold-border rounded-[2rem] p-6">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}

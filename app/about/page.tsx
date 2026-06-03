import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

export default function AboutPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A premium agency built around outcomes."
          description="SS Marketing Agency exists to help ambitious businesses scale faster through disciplined marketing systems."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Mission</div>
            <p className="mt-4 text-base leading-8 text-white/72">
              Help businesses scale faster using modern marketing systems, automation and performance-driven campaigns.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Founder</div>
            <p className="mt-4 text-base leading-8 text-white/72">
              {siteConfig.founder} leads the agency with a focus on clarity, accountability and measurable growth.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

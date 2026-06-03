import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export default function BrandGuidelinesPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Brand Guidelines"
          title="Premium identity system for SS Marketing Agency."
          description="Use these guidelines to keep the brand sharp, consistent and investor-grade."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Colors</div>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <div>Gold: #D4AF37</div>
              <div>Black: #000000</div>
              <div>White: #FFFFFF</div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Typography</div>
            <div className="mt-4 space-y-3 text-sm text-white/72">
              <div>Display: Cormorant Garamond</div>
              <div>Body: Manrope</div>
              <div>Tone: Clean, premium, confident and direct</div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Logo Usage</div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Keep clear space around the monogram, use the gold version on dark backgrounds and avoid stretching,
              recoloring or adding effects.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Voice</div>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Speak like a premium growth partner: concise, confident, credible and focused on outcomes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

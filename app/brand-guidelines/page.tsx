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
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div>Gold: #B88B2F</div>
              <div>Ink: #1F2A24</div>
              <div>Cream: #F5EFE4</div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Typography</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div>Display: Cormorant Garamond</div>
              <div>Body: Manrope</div>
              <div>Tone: Clean, premium, confident and direct</div>
            </div>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Logo Usage</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Keep clear space around the monogram, use the full-color version on light backgrounds and avoid stretching,
              recoloring or adding effects.
            </p>
          </div>
          <div className="glass rounded-[2rem] p-6">
            <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Voice</div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Speak like a premium growth partner: concise, confident, credible and focused on outcomes.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

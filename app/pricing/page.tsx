import Link from "next/link";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { pricing } from "@/lib/site";

export default function PricingPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Premium retainers, made to scale with confidence."
          description="Choose the level of support that matches your growth ambition."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {pricing.map((plan) => (
            <div key={plan.name} className="glass rounded-[2rem] p-6">
              <div className="text-lg font-semibold text-white">{plan.name}</div>
              <div className="mt-3 font-display text-4xl text-[var(--gold)]">{plan.price}</div>
              <div className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="text-sm text-white/72">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/contact" className="rounded-full bg-[var(--gold)] px-6 py-4 font-medium text-black">
            Book a Free Strategy Call
          </Link>
        </div>
      </Container>
    </section>
  );
}

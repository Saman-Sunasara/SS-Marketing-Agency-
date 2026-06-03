import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site";

export default function ServicesPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Full-funnel performance marketing built to win."
          description="We combine paid acquisition, content, brand and optimization into a single growth system."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div key={service} className="glass rounded-3xl p-6">
              <div className="text-xl font-medium text-slate-950">{service}</div>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Crafted to improve traffic quality, reduce wasted spend and increase conversion efficiency.
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

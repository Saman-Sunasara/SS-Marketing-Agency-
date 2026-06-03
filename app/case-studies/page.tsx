import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { results } from "@/lib/site";

export default function CaseStudiesPage() {
  return (
    <section className="section-padding">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title="Selected work that moved the business."
          description="These cards summarize the business impact we aim to drive for every client."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {results.map((item) => (
            <div key={item.title} className="glass gold-border rounded-[2rem] p-6">
              <div className="text-xs uppercase tracking-[0.32em] text-[var(--gold)]">Case Study</div>
              <div className="mt-3 text-2xl font-semibold text-white">{item.title}</div>
              <div className="mt-5 space-y-3">
                {item.metrics.map((metric) => (
                  <div key={metric} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/76">
                    {metric}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm leading-7 text-white/64">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

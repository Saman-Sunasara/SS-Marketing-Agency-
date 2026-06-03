import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, TrendingUp } from "lucide-react";
import { Container } from "@/components/container";
import { AnimatedCard } from "@/components/animated-card";
import { SectionHeading } from "@/components/section-heading";
import { growthProcess, results, services, stats, testimonials, faqs, siteConfig } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="overflow-hidden">
        <Container>
          <div className="grid min-h-[calc(100vh-88px)] items-center gap-14 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-20">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white/70">
                <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
                Premium growth systems for modern businesses
              </div>
              <h1 className="font-display text-5xl leading-[0.92] text-white md:text-7xl">
                Scale Faster With Data-Driven Marketing.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70 md:text-xl">
                Generate more leads, appointments and revenue through proven marketing systems built for modern
                businesses.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gold)] px-6 py-4 font-medium text-black transition hover:translate-y-[-1px]"
                >
                  Book Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20SS%20Marketing%20Agency%2C%20I%20want%20to%20chat%20on%20WhatsApp.`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-4 font-medium text-white transition hover:border-[var(--gold)]/50"
                >
                  Chat On WhatsApp
                </Link>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {stats.map((item, index) => (
                  <AnimatedCard key={item.label} delay={index * 0.08}>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <div className="text-2xl font-semibold text-white">{item.value}</div>
                      <div className="mt-1 text-sm text-white/60">{item.label}</div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>

            <AnimatedCard>
              <div className="relative">
                <div className="absolute -left-8 top-8 h-40 w-40 rounded-full bg-[var(--gold)]/20 blur-3xl" />
                <div className="absolute right-4 top-0 h-28 w-28 rounded-full bg-white/10 blur-2xl" />
                <div className="glass gold-border relative overflow-hidden rounded-[2rem] p-6 shadow-glow">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.35em] text-[var(--gold)]">Revenue Machine</div>
                      <div className="mt-2 font-display text-3xl text-white">Strategy Dashboard</div>
                    </div>
                    <div className="rounded-full border border-[var(--gold)]/30 bg-[var(--gold)]/10 px-3 py-1 text-xs text-[var(--gold)]">
                      Live
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-3xl border border-white/10 bg-black/40 p-5">
                      <div className="flex items-center gap-2 text-sm text-white/60">
                        <TrendingUp className="h-4 w-4 text-[var(--gold)]" />
                        Performance snapshot
                      </div>
                      <div className="mt-6 space-y-4">
                        {[
                          ["Lead Volume", "↑ 214%"],
                          ["ROAS", "8.4x"],
                          ["CAC", "↓ 32%"]
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                            <span className="text-sm text-white/66">{label}</span>
                            <span className="text-sm font-semibold text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[var(--gold)]/18 to-white/5 p-5">
                      <div className="text-sm uppercase tracking-[0.3em] text-white/58">Competitive edge</div>
                      <div className="mt-4 space-y-4 text-sm text-white/72">
                        <div className="flex gap-3">
                          <ShieldCheck className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                          Transparent reporting and client-first communication
                        </div>
                        <div className="flex gap-3">
                          <Star className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                          Luxury brand presence with conversion-led execution
                        </div>
                        <div className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--gold)]" />
                          Systems built for lead quality, not vanity metrics
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </Container>
      </section>

      <section className="section-padding border-y border-white/8 bg-white/[0.02]">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="glass rounded-3xl p-5 text-center">
                <div className="text-3xl font-semibold text-white">{item.value}</div>
                <div className="mt-2 text-sm uppercase tracking-[0.22em] text-white/55">{item.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Every growth lever, engineered to convert."
            description="A premium, performance-led system that connects brand, paid media, content and conversion optimization into one revenue engine."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <AnimatedCard key={service} delay={index * 0.03}>
                <div className="glass gold-border rounded-3xl p-5 transition hover:-translate-y-1">
                  <div className="text-lg font-medium text-white">{service}</div>
                  <div className="mt-3 text-sm leading-6 text-white/60">
                    Designed to improve visibility, trust, lead quality and conversion performance.
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding border-y border-white/8 bg-white/[0.02]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Why Us"
              title="Built for founders who want clarity, speed and ROI."
              description="We are obsessive about outcomes, transparent in reporting and quick in communication. The process is designed to make growth feel controlled, not chaotic."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "ROI Focused",
                "Transparent Reporting",
                "Fast Communication",
                "Dedicated Growth Team",
                "Proven Marketing Framework"
              ].map((item) => (
                <div key={item} className="glass rounded-3xl p-5">
                  <div className="text-lg font-medium text-white">{item}</div>
                  <div className="mt-2 text-sm leading-6 text-white/60">
                    Premium execution with a disciplined, performance-first mindset.
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Process"
            title="A simple system that compounds."
            description="We remove guesswork and turn growth into a repeatable operating system."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {growthProcess.map((item) => (
              <div key={item.title} className="glass rounded-3xl p-6">
                <div className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">{item.step}</div>
                <div className="mt-4 text-xl font-medium text-white">{item.title}</div>
                <p className="mt-3 text-sm leading-6 text-white/62">{item.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="results" className="section-padding border-y border-white/8 bg-white/[0.02]">
        <Container>
          <SectionHeading
            eyebrow="Results"
            title="Case studies that focus on revenue, not vanity."
            description="Clear, premium case study cards that show the levers we moved and the business outcomes they unlocked."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {results.map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.06}>
                <div className="glass gold-border h-full rounded-[2rem] p-6">
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
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading
            eyebrow="Pricing"
            title="Straightforward plans for serious growth."
            description="Clear monthly retainers that match different stages of growth."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              {
                name: "Starter Plan",
                price: "₹7,999/month",
                features: ["Social Media Management", "Content Planning", "Monthly Reporting"]
              },
              {
                name: "Growth Plan",
                price: "₹19,999/month",
                features: ["Meta Ads", "Lead Generation", "Funnel Optimization", "Weekly Reports"]
              },
              {
                name: "Scale Plan",
                price: "₹39,999/month",
                features: ["Full Marketing Management", "Google Ads", "Meta Ads", "SEO", "Automation", "Dedicated Manager"]
              },
              {
                name: "Enterprise",
                price: "Custom Pricing",
                features: ["Multi-Channel Growth", "Custom Strategy", "Dedicated Team", "Advanced Reporting"]
              }
            ].map((plan, index) => (
              <AnimatedCard key={plan.name} delay={index * 0.04}>
                <div className="glass rounded-[2rem] p-6">
                  <div className="text-lg font-semibold text-white">{plan.name}</div>
                  <div className="mt-3 font-display text-4xl text-[var(--gold)]">{plan.price}</div>
                  <div className="mt-5 space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-white/72">
                        <CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding border-y border-white/8 bg-white/[0.02]">
        <Container>
          <SectionHeading eyebrow="Testimonials" title="Trusted by founders who care about outcomes." />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="glass rounded-[2rem] p-6">
                <div className="flex gap-1 text-[var(--gold)]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-7 text-white/72">"{item.quote}"</p>
                <div className="mt-6">
                  <div className="text-base font-medium text-white">{item.name}</div>
                  <div className="text-sm text-white/50">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <SectionHeading eyebrow="FAQ" title="Common questions, answered clearly." />
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass rounded-[1.75rem] p-6">
                <summary className="cursor-pointer list-none text-lg font-medium text-white">{faq.question}</summary>
                <p className="mt-3 text-sm leading-7 text-white/64">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site";

type FormDataState = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  budget: string;
  goals: string;
};

const initialState: FormDataState = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  budget: "",
  goals: ""
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [submitMode, setSubmitMode] = useState<"whatsapp" | "email">("email");

  function updateField(field: keyof FormDataState, value: string) {
    setFormData((current) => ({ ...current, [field]: value }));
  }

  function buildMessage() {
    return [
      "New lead from SS Marketing Agency website:",
      `Name: ${formData.name}`,
      `Business Name: ${formData.businessName}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Monthly Budget: ${formData.budget}`,
      `Goals: ${formData.goals}`
    ].join("\n");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildMessage();

    if (submitMode === "whatsapp") {
      const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(`New inquiry from ${formData.name || "website"}`)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailto;
  }

  return (
    <form className="grid gap-4" aria-label="Contact form" onSubmit={handleSubmit}>
      {[
        ["name", "Name"],
        ["businessName", "Business Name"],
        ["phone", "Phone Number"],
        ["email", "Email"],
        ["budget", "Monthly Marketing Budget"],
        ["goals", "Goals"]
      ].map(([field, label]) => (
        <label key={field} className="grid gap-2 text-sm text-slate-600">
          <span>{label}</span>
          {field === "goals" ? (
            <textarea
              value={formData[field as keyof FormDataState]}
              onChange={(e) => updateField(field as keyof FormDataState, e.target.value)}
              rows={4}
              className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)]/70"
              placeholder="Tell us what success looks like"
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              value={formData[field as keyof FormDataState]}
              onChange={(e) => updateField(field as keyof FormDataState, e.target.value)}
              className="rounded-2xl border border-slate-900/10 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[var(--gold)]/70"
              placeholder={label}
            />
          )}
        </label>
      ))}
      <div className="grid gap-3 pt-2 sm:grid-cols-2">
        <button
          type="submit"
          onClick={() => setSubmitMode("whatsapp")}
          className="rounded-full bg-[var(--gold)] px-5 py-3 font-medium text-white transition hover:opacity-95"
        >
          Submit via WhatsApp
        </button>
        <button
          type="submit"
          onClick={() => setSubmitMode("email")}
          className="rounded-full border border-slate-900/12 bg-white px-5 py-3 font-medium text-slate-800 transition hover:border-[var(--gold)]/50"
        >
          Submit via Email
        </button>
      </div>
    </form>
  );
}

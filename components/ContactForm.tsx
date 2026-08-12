"use client";

import { useState } from "react";
import clsx from "clsx";
import { SITE_CONFIG, waUrl } from "@/lib/config";

type Option = string;

type Props = {
  origin: string;
  interestLabel?: string;
  options: Option[];
  namePlaceholder?: string;
  showCompany?: boolean;
  submitLabel?: string;
};

type Status = { kind: "idle" | "success" | "error"; message?: string };

export function ContactForm({
  origin,
  interestLabel = "¿Qué te interesa?",
  options,
  namePlaceholder = "Nombre completo",
  showCompany = false,
  submitLabel = "Enviar",
}: Props) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus({ kind: "idle" });

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("origen", origin);

    // Fallback WhatsApp si no hay endpoint configurado
    if (!SITE_CONFIG.formEndpoint) {
      const nombre = data.get("nombre") ?? "";
      const interes = data.get("interes") ?? "";
      const mensaje = data.get("mensaje") ?? "";
      const text = `Hola, soy ${nombre}. Interesado en: ${interes}. ${mensaje}`;
      window.open(waUrl(String(text)), "_blank", "noopener");
      form.reset();
      setStatus({
        kind: "success",
        message: "Abrimos WhatsApp para completar tu mensaje.",
      });
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(SITE_CONFIG.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      if (!res.ok) throw new Error("Bad response");
      form.reset();
      setStatus({
        kind: "success",
        message: "¡Gracias! Te contactaremos en breve.",
      });
    } catch {
      setStatus({
        kind: "error",
        message: "No pudimos enviar tu mensaje. Escríbenos por WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-4 bg-brand-card border border-brand-navy/10 p-6 md:p-8 rounded-2xl"
    >
      <label className="grid gap-1.5 text-sm text-brand-text">
        {namePlaceholder}
        <input
          type="text"
          name="nombre"
          required
          autoComplete="name"
          className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text placeholder-brand-muted focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        />
      </label>

      {showCompany && (
        <label className="grid gap-1.5 text-sm text-brand-text">
          Empresa
          <input
            type="text"
            name="empresa"
            autoComplete="organization"
            className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
          />
        </label>
      )}

      <label className="grid gap-1.5 text-sm text-brand-text">
        Correo electrónico
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        />
      </label>

      <label className="grid gap-1.5 text-sm text-brand-text">
        Teléfono
        <input
          type="tel"
          name="telefono"
          autoComplete="tel"
          className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        />
      </label>

      <label className="grid gap-1.5 text-sm text-brand-text">
        {interestLabel}
        <select
          name="interes"
          required
          defaultValue=""
          className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25"
        >
          <option value="" disabled>
            Selecciona una opción
          </option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm text-brand-text">
        Mensaje
        <textarea
          name="mensaje"
          rows={5}
          required
          placeholder="Cuéntanos brevemente qué necesitas."
          className="rounded-lg bg-brand-surface border border-brand-navy/10 px-3 py-2.5 text-brand-text focus:outline-none focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/25 resize-y min-h-[120px]"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary justify-self-start disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? "Enviando..." : submitLabel}
      </button>

      {status.kind !== "idle" && (
        <div
          role="status"
          aria-live="polite"
          className={clsx(
            "text-sm rounded-lg px-3 py-2 border",
            status.kind === "success"
              ? "bg-emerald-500/10 border-emerald-500/35 text-emerald-300"
              : "bg-rose-500/10 border-rose-500/35 text-rose-300"
          )}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}

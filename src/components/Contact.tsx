"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { site } from "@/data/site";

// ⬇️ STEP 1: Paste your Web3Forms access key between the quotes below.
//    Get a free key at https://web3forms.com (enter your email → Create Access Key)
const WEB3FORMS_KEY = "21b24866-0f34-4f16-8189-59943c30ae60";

interface Errors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  const set = (k: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!values.name.trim()) next.name = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) next.email = true;
    if (!values.message.trim()) next.message = true;
    setErrors(next);
    if (Object.keys(next).length) return;

    setLoading(true);
    setFailed(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: values.name,
          email: values.email,
          message: values.message,
          subject: `New portfolio message from ${values.name}`,
          from_name: "Portfolio Website",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setValues({ name: "", email: "", message: "" });
        setTimeout(() => setSuccess(false), 6000);
      } else {
        setFailed(true);
      }
    } catch {
      setFailed(true);
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { ic: "✉", lbl: "Email", val: site.email, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${site.email}`, blank: true },
    { ic: "📞", lbl: "Phone", val: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}`, blank: false },
    { ic: "💬", lbl: "WhatsApp", val: "Chat instantly", href: site.socials.whatsapp, blank: true },
    { ic: "in", lbl: "LinkedIn", val: "Connect with me", href: site.socials.linkedin, blank: true },
  ];

  return (
    <section id="contact" className="section">
      <div className="wrap">
        <Reveal>
          <span className="eyebrow">Contact</span>
          <h2 className="h-section">Let&apos;s automate your business</h2>
          <p className="sub">Tell me what&apos;s eating your team&apos;s time — I&apos;ll show you how to systemize it.</p>
        </Reveal>
        <div className="contact-grid">
          <Reveal className="contact-info">
            {contactItems.map((c) => (
              <a
                className="ci-item glass"
                href={c.href}
                key={c.lbl}
                {...(c.blank ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="ic">{c.ic}</span>
                <div>
                  <div className="lbl">{c.lbl}</div>
                  <div className="val">{c.val}</div>
                </div>
              </a>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <form className="form glass" onSubmit={submit} noValidate>
              <div className={`field ${errors.name ? "err" : ""}`}>
                <label>Name</label>
                <input type="text" value={values.name} onChange={set("name")} placeholder="Your name" />
                {errors.name && <div className="err-msg">Please enter your name</div>}
              </div>
              <div className={`field ${errors.email ? "err" : ""}`}>
                <label>Email</label>
                <input type="email" value={values.email} onChange={set("email")} placeholder="you@company.com" />
                {errors.email && <div className="err-msg">Enter a valid email</div>}
              </div>
              <div className={`field ${errors.message ? "err" : ""}`}>
                <label>Message</label>
                <textarea value={values.message} onChange={set("message")} placeholder="What would you like to automate?" />
                {errors.message && <div className="err-msg">Tell me a bit about your project</div>}
              </div>
              <button
                type="submit"
                className={`btn btn-primary ${loading ? "btn-loading" : ""}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {loading ? "Sending…" : "Send Message →"}
              </button>
              {success && (
                <div className="form-success">✓ Message sent! I&apos;ll get back to you within 24 hours.</div>
              )}
              {failed && (
                <div className="err-msg" style={{ marginTop: 14, textAlign: "center" }}>
                  Couldn&apos;t send right now. Please email me directly at {site.email}.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}




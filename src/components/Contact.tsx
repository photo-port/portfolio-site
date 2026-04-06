"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: wire up to an API route or service
    setSubmitted(true);
  }

  return (
    <section id="contact" className="max-w-3xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 mb-3">Get in Touch</p>
        <h2 className="text-4xl font-bold tracking-tight">Let&apos;s Work Together</h2>
      </div>

      {submitted ? (
        <div className="text-center py-12">
          <p className="text-xl text-zinc-300">Thanks for reaching out. I&apos;ll be in touch soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full bg-transparent border border-white/15 px-4 py-3 text-sm focus:outline-none focus:border-white/40 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="border border-white/30 px-10 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      )}
    </section>
  );
}

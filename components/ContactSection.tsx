'use client'

import type { FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { quoteMailto } from '@/lib/quote-mailto.mjs'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from './site-data'
import { LinkButton } from './ui'
import { quoteCategories } from './trading-content'

export default function ContactSection({ initialCategory }: { initialCategory?: string }) {
  const selected = quoteCategories.find(category => category === initialCategory) ?? ''

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const field = (name: string) => String(data.get(name) ?? '').trim()
    window.location.href = quoteMailto(EMAIL, {
      name: field('full-name'), company: field('company-name'), email: field('email'),
      phone: field('phone'), category: field('category'), message: field('message'),
    })
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <form id="quote" className="quote-form" aria-labelledby="quote-title" onSubmit={submitQuote}>
            <h3 id="quote-title">Request a Quote</h3>
            <p>Tell us what you need and we’ll confirm availability.</p>
            <div className="f-grid">
              <label>Full Name *<input name="full-name" autoComplete="name" required /></label>
              <label>Company Name<input name="company-name" autoComplete="organization" /></label>
              <label>Email *<input name="email" type="email" autoComplete="email" required /></label>
              <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
              <label className="full">
                Category *
                <select name="category" required defaultValue={selected}>
                  <option value="" disabled>Select a category</option>
                  {quoteCategories.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </label>
              <label className="full">
                What do you need?
                <textarea name="message" rows={4} placeholder="Model, quantity, new or used, destination" />
              </label>
            </div>
            <button className="btn submit" type="submit">Open email draft <Send size={15} /></button>
            <small>This opens your email app with the request filled in. You can also write to <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</small>
          </form>
          <aside className="c-info">
            <h3>Prefer to contact us directly?</h3>
            <p>Our team is based in New York and works with buyers worldwide.</p>
            <ul>
              <li><MapPin size={18} aria-hidden="true" /><div><small>Head office</small><span>{ADDRESS}</span></div></li>
              <li><Phone size={18} aria-hidden="true" /><div><small>Phone</small><a href={PHONE_HREF}>{PHONE_DISPLAY}</a></div></li>
              <li><Mail size={18} aria-hidden="true" /><div><small>Email</small><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div></li>
            </ul>
            <div className="c-actions"><LinkButton ghost href={`mailto:${EMAIL}`}>Email sales</LinkButton></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

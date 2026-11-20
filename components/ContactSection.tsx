'use client'

import { FormEvent, useEffect, useState } from 'react'
import { Phone, Send } from 'lucide-react'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF, WEB, WEB_HREF } from './site-data'
import { Kicker, LinkButton } from './ui'

const quoteCategories = [
  'Earth-moving machinery', 'Industrial machines', 'Commercial generators',
  'Test and measurement equipment', 'Spare parts and attachments',
  'Household items', 'Dry pet food', 'Brand partnership', 'Other',
]

export default function ContactSection() {
  const [category, setCategory] = useState(quoteCategories[0])

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get('category')
    if (requestedCategory && quoteCategories.includes(requestedCategory)) {
      setCategory(requestedCategory)
    }
  }, [])

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const selected = String(data.get('category') || category)
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Company: ${data.get('company') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Category: ${selected}`,
      '', String(data.get('message') || ''),
    ].join('\n')
    // The browser opens the user's email application; no server-side submission occurs.
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Quote request: ${selected}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="contact" id="quote">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="11">Let's Work Together</Kicker>
            <h2>Request availability or discuss a brand partnership</h2>
          </div>
          <p className="lead">Tell us your product, quantity, new or used preference and destination. We can also discuss marketplace sales for your brand.</p>
        </div>
        <div className="contact-grid">
          <aside className="c-info reveal">
            <h3>Contact Us</h3>
            <p>USA-based · worldwide shipping</p>
            <ul>
              {[
                ['Head Office', ADDRESS],
                ['Phone', <a key="p" href={PHONE_HREF}>{PHONE_DISPLAY}</a>],
                ['Email', <a key="e" href={`mailto:${EMAIL}`}>{EMAIL}</a>],
                ['Web', <a key="w" href={WEB_HREF}>{WEB}</a>],
              ].map(([label, value]) => (
                <li key={label as string}><Phone size={18} /><div><small>{label as string}</small><span>{value}</span></div></li>
              ))}
            </ul>
            <div className="c-actions">
              <LinkButton href="/products">Browse Products</LinkButton>
              <LinkButton ghost href={`mailto:${EMAIL}`}>Contact Sales</LinkButton>
            </div>
          </aside>
          <div className="reveal">
            <form className="quote-form" onSubmit={submitQuote} aria-label="Request a quote">
              <h3>Request a Quote</h3>
              <p>Complete the details below. The Open Email to Send button opens your email app with a ready-to-send message.</p>
              <div className="f-grid">
                <label>Full Name *
                  <input name="name" type="text" placeholder="Jane Doe" autoComplete="name" required />
                </label>
                <label>Company Name
                  <input name="company" type="text" placeholder="Company LLC" autoComplete="organization" />
                </label>
                <label>Email *
                  <input name="email" type="email" placeholder="you@company.com" autoComplete="email" required />
                </label>
                <label>Phone
                  <input name="phone" type="tel" placeholder="+1 ..." autoComplete="tel" />
                </label>
                <label className="full">Category
                  <select name="category" value={category} onChange={(event) => setCategory(event.target.value)}>
                    {quoteCategories.map((option) => <option key={option} value={option}>{option}</option>)}
                  </select>
                </label>
                <label className="full">What do you need?
                  <textarea name="message" rows={4} placeholder="Model, quantity, new or used, destination..." />
                </label>
              </div>
              <button className="btn submit" type="submit">Open Email to Send <Send size={15} /></button>
              <small>Nothing is sent automatically. Review and send the drafted message in your email app. If no app opens, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> directly.</small>
              <small>Used equipment is quoted with condition details. Availability is subject to supplier confirmation.</small>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

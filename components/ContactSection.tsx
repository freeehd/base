'use client'

import { FormEvent, useState } from 'react'
import { Check, Phone, Send } from 'lucide-react'
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF, WEB, WEB_HREF } from './site-data'
import { Kicker, LinkButton } from './ui'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [refCode, setRefCode] = useState('')

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }
    setRefCode(`BT-2026-${Math.floor(1000 + Math.random() * 9000)}`)
    setSubmitted(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="sec-head reveal">
          <div>
            <Kicker index="11">Let's Work Together</Kicker>
            <h2>Ready to Source Premium Industrial Equipment?</h2>
          </div>
          <p className="lead">Our experienced team is ready to help you find reliable products and customized trading solutions.</p>
        </div>
        <div className="contact-grid">
          <aside className="c-info reveal">
            <h3>Contact Us</h3>
            <p>USA-based · serving industries worldwide</p>
            <ul>
              {[['Head Office', ADDRESS], ['Phone', <a key="p" href={PHONE_HREF}>{PHONE_DISPLAY}</a>], ['Email', <a key="e" href={`mailto:${EMAIL}`}>{EMAIL}</a>], ['Web', <a key="w" href={WEB_HREF}>{WEB}</a>]].map(([label, value]) => (
                <li key={label as string}><Phone size={18} /><div><small>{label as string}</small><span>{value}</span></div></li>
              ))}
            </ul>
            <div className="c-actions">
              <LinkButton>Request a Quote</LinkButton>
              <LinkButton ghost href={`mailto:${EMAIL}`}>Contact Sales</LinkButton>
            </div>
          </aside>
          <div className="reveal">
            {submitted ? (
              <div className="qf-success">
                <span><Check size={22} /></span>
                <h4>Request received</h4>
                <p>Thank you — your sourcing request has been logged. Our team will review the requirements and respond with availability and a formal quotation.</p>
                <strong>REF: {refCode}</strong>
              </div>
            ) : (
              <form className="quote-form" onSubmit={submitQuote}>
                <h3>Request a Quote</h3>
                <p>Tell us what you need — our team will respond with availability and a tailored quotation.</p>
                <div className="f-grid">
                  {[['Full Name', 'text', 'Jane Doe'], ['Company Name', 'text', 'Company LLC'], ['Email', 'email', 'you@company.com'], ['Phone', 'tel', '+1 ...']].map(([label, type, placeholder]) => (
                    <label key={label}>
                      {label}{label !== 'Company Name' && label !== 'Phone' ? ' *' : ''}
                      <input name={label.toLowerCase().replace(' ', '-')} type={type} placeholder={placeholder} required={label === 'Full Name' || label === 'Email'} />
                    </label>
                  ))}
                  <label className="full">
                    Equipment Category *
                    <select required defaultValue="">
                      <option value="" disabled>Select equipment category</option>
                      {['Heavy Construction Equipment', 'Industrial Equipment', 'Spare Parts', 'Generator Sets', 'Industrial Engines', 'Radiators', 'Generator Ends', 'Power Units', 'Marine Engines', 'Other / Multiple'].map((item) => <option key={item}>{item}</option>)}
                    </select>
                  </label>
                  <label className="full">
                    Message / Requirements *
                    <textarea required placeholder="Models, quantities, destination port, target timelines..." />
                  </label>
                </div>
                <button className="btn submit" type="submit">Submit Request <Send size={15} /></button>
                <small>Availability and final specifications are confirmed at the quotation stage.</small>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

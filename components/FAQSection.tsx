import { Kicker } from './ui'

const questions = [
  { question: 'Do you sell used equipment?', answer: 'Yes. We supply both new and used machinery and generators. Used items are quoted with condition details before you commit.' },
  { question: 'Do you ship internationally?', answer: 'Yes. We coordinate documentation, shipping and delivery to destinations worldwide.' },
  { question: 'Can I order small quantities?', answer: 'Yes. We handle single units as well as bulk and container-size orders.' },
  { question: 'What pet food do you supply?', answer: 'Dry pet food only. It needs no refrigeration or temperature-controlled storage.' },
  { question: 'Can you sell my brand online?', answer: 'Yes. We list, price, fulfill and support brands on Amazon, Walmart, eBay and TikTok Shop. Send us your details through the quote form.' },
]

export default function FAQSection() {
  return (
    <section className="faq-section" id="faq">
      <div className="container faq-grid">
        <div>
          <Kicker index="07">Frequently Asked Questions</Kicker>
          <h2>Common questions</h2>
          <p className="lead">Have a different request? Share your category, quantity and destination through our quote form.</p>
        </div>
        <div className="faq-list">
          {questions.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

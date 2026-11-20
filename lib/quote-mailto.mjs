export function quoteMailto(email, fields) {
  const body = [
    `Name: ${fields.name}`,
    `Company: ${fields.company}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Category: ${fields.category}`,
    '',
    fields.message,
  ].join('\r\n')

  return `mailto:${email}?subject=${encodeURIComponent(`Quote request: ${fields.category}`)}&body=${encodeURIComponent(body)}`
}

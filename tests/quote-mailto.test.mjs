import assert from 'node:assert/strict'
import { test } from 'node:test'
import { quoteMailto } from '../lib/quote-mailto.mjs'

test('builds an email draft without injecting additional mail headers', () => {
  const fields = { name: 'A & B', company: 'A+B', email: 'buyer@example.invalid', phone: '', category: 'Dry pet food', message: '10 bags\nShip to A & B? #1' }
  const url = new URL(quoteMailto('sales@example.invalid', fields))
  assert.equal(url.protocol, 'mailto:')
  assert.equal(url.pathname, 'sales@example.invalid')
  assert.deepEqual([...url.searchParams.keys()], ['subject', 'body'])
  assert.equal(url.searchParams.get('subject'), 'Quote request: Dry pet food')
  assert.equal(url.searchParams.get('body'), 'Name: A & B\r\nCompany: A+B\r\nEmail: buyer@example.invalid\r\nPhone: \r\nCategory: Dry pet food\r\n\r\n10 bags\nShip to A & B? #1')
})

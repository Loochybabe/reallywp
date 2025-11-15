import { useState } from 'react'
import CanonicalHead from '../components/CanonicalHead'

export default function Contact(){
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // null, 'loading', 'success', 'error'
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const json = await res.json()

      if (res.ok && json.success) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Auto-clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus('error')
        setErrorMsg(json.error || 'An error occurred')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  return (
    <>
      <CanonicalHead title="Contact — ReallyWP" description="Contact ReallyWP editorial and support." />

      <main>
        <h1>Contact</h1>
        <p className="text-secondary">For editorial enquiries, corrections, or partnership requests, email us at <a href="mailto:editor@reallywp.co.za">editor@reallywp.co.za</a>.</p>

        <h2>Submit a Tip or Product</h2>
        <p className="text-secondary">If you'd like us to review a product, include the product name, website, and a brief description of why it should be reviewed.</p>

        <h2>Get in Touch</h2>
        <p className="text-secondary">Use the form below to send us a message. We'll respond as soon as possible.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your message here..."
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="form-submit"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && (
          <div className="alert success">
            ✓ Thank you! Your message has been received. We'll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="alert error">
            ✗ Error: {errorMsg}
          </div>
        )}

        <h2>Press & Affiliates</h2>
        <p className="text-secondary">For partnership or affiliate program enquiries, email our partnerships team at <a href="mailto:partners@reallywp.co.za">partners@reallywp.co.za</a>.</p>
      </main>
    </>
  )
}


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, message } = req.body || {}

    // Basic validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return res.status(400).json({ success: false, error: 'Name is required' })
    }
    if (!email || typeof email !== 'string' || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return res.status(400).json({ success: false, error: 'Valid email is required' })
    }
    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return res.status(400).json({ success: false, error: 'Message is required' })
    }

    // sanitize and trim
    const entry = {
      id: Date.now(),
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      receivedAt: new Date().toISOString(),
      ip: req.headers['x-forwarded-for'] || req.socket?.remoteAddress || null,
    }

    // Append to data/contacts.json (server-side only)
    const fs = require('fs')
    const path = require('path')
    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'contacts.json')

    if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true })
    let existing = []
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf8')
        existing = JSON.parse(raw || '[]')
      }
    } catch (e) {
      existing = []
    }

    existing.unshift(entry)

    // Keep only recent 1000 entries to avoid unbounded growth
    if (existing.length > 1000) existing = existing.slice(0, 1000)

    fs.writeFileSync(filePath, JSON.stringify(existing, null, 2), 'utf8')

    // Log to server console
    console.log('Contact form submission saved:', { id: entry.id, email: entry.email })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Contact API error:', (err && err.stack) ? err.stack : err)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

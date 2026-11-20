import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { Github, Instagram, Linkedin, Loader2, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || import.meta.env.VITE_EMAILJS_PUBLIC

if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY)

const socials = [
  { label: 'GitHub', href: 'https://github.com/rahanyas', icon: <Github size={18} /> },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rahanyas', icon: <Linkedin size={18} /> },
  { label: 'Twitter / X', href: 'https://twitter.com/rahanyas', icon: <Twitter size={18} /> },
  { label: 'Instagram', href: 'https://instagram.com/rahanyas', icon: <Instagram size={18} /> },
]

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('error')
      setError('EmailJS keys are missing. Add the three VITE_EMAILJS_* variables in Vercel and redeploy.')
      return
    }

    setStatus('sending')
    setError('')

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        reply_to: form.email,
        subject: form.subject,
        message: form.message,
        to_name: 'Rahanyas',
      })
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setStatus('error')
      setError(err?.text || 'Could not send the message. Please try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
        >
          <div className="section-kicker">04 / CONNECT</div>
          <div className="eyebrow"><Mail size={16} /> Contact</div>
          <h2 className="section-title">Let&apos;s build something great together</h2>
          <p className="section-subtitle">
            Have a project in mind, a question, or just want to say hello? Drop a message and I&apos;ll
            get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <div className="card-head">
              <div className="card-head-dots"><i /><i /><i /></div>
              <span>CONTACT / DIRECT</span>
              <span>● AVAILABLE</span>
            </div>
            <h3 style={{ marginTop: 0, fontFamily: '"Space Grotesk", sans-serif' }}>Get in touch</h3>
            <p style={{ color: 'var(--muted)', marginTop: 0 }}>
              I&apos;m open to freelance projects, collaborations, and full-time roles. Feel free to reach
              out through the form or any of my social accounts.
            </p>

            <div className="contact-list">
              <div className="contact-item">
                <div className="icon"><Mail size={18} /></div>
                <div>
                  <span>Email</span>
                  <strong><a href="mailto:rahanyas3@gmail.com">rahanyas3@gmail.com</a></strong>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><Phone size={18} /></div>
                <div>
                  <span>Phone</span>
                  <strong><a href="tel:+9179037403835">+91 7907403835</a></strong>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon"><MapPin size={18} /></div>
                <div>
                  <span>Location</span>
                  <strong>Remote / Worldwide</strong>
                </div>
              </div>
            </div>

            <h4 style={{ margin: '0 0 0.7rem' }}>Social accounts</h4>
            <div className="social-row" aria-label="Social accounts">
              {socials.map((s) => (
                <a key={s.label} className="social-pill" href={s.href} target="_blank" rel="noreferrer">
                  {s.icon} {s.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="contact-card glass"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="card-head">
              <div className="card-head-dots"><i /><i /><i /></div>
              <span>MESSAGE / COMPOSE</span>
              <span>UTF-8</span>
            </div>
            <h3 style={{ marginTop: 0, fontFamily: '"Space Grotesk", sans-serif' }}>Send a message</h3>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={onChange} required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={onChange} required />
                </div>
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" type="text" placeholder="How can I help?" value={form.subject} onChange={onChange} required />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Tell me about your project..." value={form.message} onChange={onChange} required />
              </div>

              <AnimatePresence mode="wait">
                {status === 'sent' && (
                  <motion.div
                    key="success"
                    className="form-success"
                    role="status"
                    initial={{ opacity: 0, y: -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  >
                    Thanks! Your message was sent — I&apos;ll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    key="error"
                    className="form-error"
                    role="alert"
                    initial={{ opacity: 0, y: -10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ type: 'spring', stiffness: 320, damping: 24 }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ justifySelf: 'start' }}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>Sending... <Loader2 size={17} className="spin" /></>
                ) : (
                  <>Send Message <Send size={17} /></>
                )}
              </button>
              <p className="form-note">Messages are delivered straight to my inbox via EmailJS.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

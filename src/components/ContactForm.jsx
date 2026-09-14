import { useState } from 'react'
import Button from './Button'

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  const name = values.name.trim()
  const email = values.email.trim()
  const message = values.message.trim()

  if (!name) {
    errors.name = 'Please enter your name.'
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.'
  }

  if (!email) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }

  if (!message) {
    errors.message = 'Please enter a message.'
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }

  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: undefined }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setSubmitted(Object.keys(nextErrors).length === 0)
  }

  const fieldClass =
    'w-full min-h-12 rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-paper placeholder:text-mute/60 transition-all duration-300 focus:outline-none focus-visible:border-gold/50 focus-visible:bg-white/[0.05] focus-visible:ring-1 focus-visible:ring-gold/30'

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-xs font-medium tracking-[0.14em] text-paper/80 uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`${fieldClass} ${errors.name ? 'border-red-400/70' : 'border-line hover:border-white/20'}`}
          placeholder="Your name"
        />
        {errors.name ? (
          <p id="name-error" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-xs font-medium tracking-[0.14em] text-paper/80 uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`${fieldClass} ${errors.email ? 'border-red-400/70' : 'border-line hover:border-white/20'}`}
          placeholder="you@example.com"
        />
        {errors.email ? (
          <p id="email-error" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium tracking-[0.14em] text-paper/80 uppercase">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${fieldClass} min-h-36 resize-y ${errors.message ? 'border-red-400/70' : 'border-line hover:border-white/20'}`}
          placeholder="How can I help?"
        />
        {errors.message ? (
          <p id="message-error" className="mt-1.5 text-sm text-red-400" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <Button as="button" type="submit" variant="primary" arrow className="w-full sm:w-auto">
        Send Message
      </Button>

      {submitted ? (
        <p className="rounded-xl border border-gold/20 bg-gold/8 px-4 py-3 text-sm leading-relaxed text-gold-soft" role="status">
          Thanks. This form is validated on the front end only, so the message was not sent yet.
        </p>
      ) : null}
    </form>
  )
}

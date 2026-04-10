import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CONTACT_FIELD_INPUT_CLASS, CONTACT_FIELD_TEXTAREA_CLASS } from './contactFieldClasses.js'

const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

export default function ContactForm () {
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      brief: '',
    },
  })

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

  async function onSubmit (data) {
    setSubmitStatus(null)

    if (!accessKey) {
      console.error(
        '[ContactForm] Set VITE_WEB3FORMS_ACCESS_KEY in .env — see https://web3forms.com',
      )
      setSubmitStatus({
        type: 'error',
        message:
          'Form is not connected yet. Add VITE_WEB3FORMS_ACCESS_KEY to your .env file.',
      })
      return
    }

    setSubmitStatus({ type: 'loading' })

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio — message from ${data.name}`,
          name: data.name,
          email: data.email,
          message: data.brief,
        }),
      })

      const json = await res.json()

      if (json.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thanks — your message was sent. I will get back to you soon.',
        })
        reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: json.message || 'Could not send. Please try again.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Check your connection and try again.',
      })
    }
  }

  const isLoading = submitStatus?.type === 'loading'

  return (
    <form
      className="contact-page-form flex min-w-0 flex-[1_1_0%] flex-col gap-4 rounded-[22px] bg-[#1A1020] border-2 border-[#1A1020] px-6 py-6"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="inline-flex w-fit items-center rounded-full bg-[#A855F7] px-3 py-1">
        <span className="font-sans text-xs font-800 uppercase tracking-widest text-white">Drop me a message</span>
      </div>
      {submitStatus?.type === 'success' || submitStatus?.type === 'error' ? (
        <div
          role="status"
          className={`rounded-xl border-2 px-4 py-3 font-sans text-sm leading-snug ${
            submitStatus.type === 'success'
              ? 'border-[#86EFAC]/40 bg-[#14532D]/40 text-[#BBF7D0]'
              : 'border-[#FF6B6B]/40 bg-[#450A0A]/30 text-[#FECACA]'
          }`}
        >
          {submitStatus.message}
        </div>
      ) : null}
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-name" className="font-sans text-xs font-700 leading-4 text-[#C0A8E0]">
          Name
        </label>
        <input
          id="contact-name"
          autoComplete="name"
          className={CONTACT_FIELD_INPUT_CLASS}
          placeholder="Your name"
          disabled={isLoading}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name ? (
          <div className="font-sans text-xs text-[#FF6B6B]">{errors.name.message}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-email" className="font-sans text-xs font-700 leading-4 text-[#C0A8E0]">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          className={CONTACT_FIELD_INPUT_CLASS}
          placeholder="you@brand.com"
          disabled={isLoading}
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email',
            },
          })}
        />
        {errors.email ? (
          <div className="font-sans text-xs text-[#FF6B6B]">{errors.email.message}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="contact-brief" className="font-sans text-xs font-700 leading-4 text-[#C0A8E0]">
          Brief
        </label>
        <textarea
          id="contact-brief"
          className={CONTACT_FIELD_TEXTAREA_CLASS}
          placeholder="Campaign or content sprint—platform, timeline, and what a win looks like on the feed."
          rows={5}
          disabled={isLoading}
          {...register('brief', { required: 'Add a short brief' })}
        />
        {errors.brief ? (
          <div className="font-sans text-xs text-[#FF6B6B]">{errors.brief.message}</div>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex max-w-[180px] cursor-pointer items-center justify-center self-start rounded-full border-2 border-[#1A1020] bg-[#FF3D8A] px-5 py-3 font-sans text-sm font-700 leading-[18px] text-white shadow-[3px_3px_0_0_#FFD93D] transition-all duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-x-0 disabled:hover:translate-y-0 disabled:hover:shadow-[3px_3px_0_0_#FFD93D]"
      >
        {isLoading ? 'Sending…' : 'Send it'}
      </button>
    </form>
  )
}

import { useState } from 'react'

export default function Contact(){
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [status, setStatus] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form })
      })
      const data = await res.json()
      if(res.ok){
        setStatus('Thanks — I’ll get back to you shortly!')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus(data.detail || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="bg-[#0b0b12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Let’s build something bold</h2>
            <p className="mt-3 text-white/70">Tell me a bit about your project and I’ll reply within 24 hours.</p>
            {status && <p className="mt-4 text-white/80">{status}</p>}
          </div>

          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input className="w-full rounded-md bg-black/40 border border-white/10 p-3 text-white placeholder:text-white/40" placeholder="Name" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
              <input type="email" className="w-full rounded-md bg-black/40 border border-white/10 p-3 text-white placeholder:text-white/40" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
            </div>
            <input className="mt-4 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white placeholder:text-white/40" placeholder="Subject" value={form.subject} onChange={e=>setForm({...form, subject:e.target.value})} />
            <textarea className="mt-4 w-full rounded-md bg-black/40 border border-white/10 p-3 text-white placeholder:text-white/40" rows={6} placeholder="Message" value={form.message} onChange={e=>setForm({...form, message:e.target.value})} required />
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-6 py-3 font-semibold shadow-lg shadow-indigo-500/20">Send message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

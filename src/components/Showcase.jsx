import { useEffect, useState } from 'react'

export default function Showcase() {
  const [projects, setProjects] = useState([])
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  useEffect(() => {
    fetch(`${baseUrl}/projects`).then(r => r.json()).then(setProjects).catch(() => {})
  }, [])

  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">Selected Work</h2>
            <p className="mt-3 text-white/60 max-w-2xl">A curated mix of interactive experiments, generative art and brand experiences.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-full bg-white/10 text-white px-5 py-3 font-semibold border border-white/20">Get in touch</a>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <article key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 flex-wrap">
                  {p.tags?.map((t, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 border border-white/10">{t}</span>
                  ))}
                </div>
                <h3 className="mt-3 text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-white/70 text-sm">{p.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

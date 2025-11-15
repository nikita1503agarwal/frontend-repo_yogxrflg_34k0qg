export default function Services(){
  const services = [
    {
      title: '3D & Spline Interactions',
      desc: 'Interactive product scenes, art installations and landing hero moments with physics and scroll.',
    },
    {
      title: 'Generative Visuals',
      desc: 'Audio-reactive and data-driven visuals for events, music, and immersive performances.',
    },
    {
      title: 'Brand Websites',
      desc: 'Fast, modern, animated sites with accessibility and SEO baked in.',
    },
  ]

  return (
    <section id="services" className="bg-[#0b0b12] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-5xl font-bold text-white">Services</h2>
        <p className="mt-3 text-white/60 max-w-2xl">From concept to code: I help teams ship visuals that feel alive.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

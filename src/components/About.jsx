export default function About(){
  return (
    <section id="about" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">About</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I’m a multidisciplinary artist and creative technologist. My work blends sculpture,
              code, motion and sound — translating complex systems into bold, tactile visuals for
              brands, stages and the web.
            </p>
            <p className="mt-4 text-white/70">
              I collaborate with studios and founders to craft signature visuals that move people.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <img src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1600&auto=format&fit=crop" alt="Studio" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

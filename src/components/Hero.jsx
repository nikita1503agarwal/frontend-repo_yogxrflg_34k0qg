import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden bg-[#0a0a0f]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_circle_at_10%_-20%,rgba(124,58,237,0.25),transparent),radial-gradient(800px_circle_at_90%_120%,rgba(59,130,246,0.25),transparent)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-24 flex flex-col items-start justify-center">
        <p className="text-sm tracking-widest uppercase text-white/60">Digital Artist • 3D • Creative Tech</p>
        <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight text-white">
          Bold, interactive visuals for futuristic brands
        </h1>
        <p className="mt-6 max-w-2xl text-white/80 text-lg">
          I craft immersive, interactive experiences blending art and technology — from generative visuals to 3D product stories.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 text-white px-5 py-3 font-semibold shadow-lg shadow-indigo-500/20">
            Explore Work
          </a>
          <a href="#contact" className="rounded-full bg-white/10 text-white px-5 py-3 font-semibold border border-white/20">
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}

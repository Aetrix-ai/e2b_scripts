import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">

      {/* Nav */}
      <header className="border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
              <span className="text-white font-black text-sm leading-none">A</span>
            </div>
            <span className="font-bold tracking-widest text-sm uppercase text-zinc-100">
              Aetrix<span className="text-cyan-400">.ai</span>
            </span>
          </div>
          <Badge variant="outline" className="text-xs font-mono text-cyan-400 border-cyan-400/30 bg-cyan-400/5">
            ● Ready
          </Badge>
        </div>
      </header>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-28 relative overflow-hidden">

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

        {/* Glow blob */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center gap-6 max-w-3xl">

          <Badge variant="outline" className="font-mono text-xs text-cyan-400 border-cyan-400/25 bg-cyan-400/5 px-4 py-1.5 rounded-full tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-2 animate-pulse inline-block" />
            New Aetrix Project
          </Badge>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none">
            <span className="bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
              Build the future.
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Ship without limits.
            </span>
          </h1>

          <p className="text-zinc-500 text-base sm:text-lg font-light leading-relaxed max-w-md">
            Your Aetrix project is live — a precision-built foundation ready for whatever you bring to it.
          </p>

          <div className="flex items-center gap-3 flex-wrap justify-center pt-2">
            <Button className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-semibold px-6 border-0 shadow-lg shadow-cyan-500/20">
              Get Started →
            </Button>
            <Button variant="outline" className="border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-zinc-200 bg-transparent font-semibold px-6">
              View Docs ↗
            </Button>
          </div>

          <Separator className="bg-zinc-800/60 w-48 mt-4" />

          <p className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
            © {new Date().getFullYear()} Aetrix.ai — Crafted for builders.
          </p>

        </div>
      </section>
    </div>
  )
}
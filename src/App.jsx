import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Radial gradient glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 via-cyan-500/5 to-transparent pointer-events-none"></div>
      
      {/* Navigation Bar */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-tight">Kortex</div>
        <button className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-md hover:bg-cyan-400 transition-colors">
          Waitlist
        </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          The World's First Context Runtime.
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
          Stop sending raw data. Start sending Intelligence. Distill 100k tokens into the Golden Prompt.
        </p>
      </main>
    </div>
  )
}

export default App


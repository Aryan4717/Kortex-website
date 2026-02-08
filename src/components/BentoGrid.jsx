import React, { useState, useEffect } from 'react'

const SemanticPruningCard = () => {
  const [words, setWords] = useState([
    { text: 'The', visible: true, isMeaning: false },
    { text: 'quick', visible: true, isMeaning: false },
    { text: 'brown', visible: true, isMeaning: false },
    { text: 'fox', visible: true, isMeaning: true },
    { text: 'jumps', visible: true, isMeaning: true },
    { text: 'over', visible: true, isMeaning: false },
    { text: 'the', visible: true, isMeaning: false },
    { text: 'lazy', visible: true, isMeaning: false },
    { text: 'dog', visible: true, isMeaning: true },
  ])

  useEffect(() => {
    const handleAnimate = () => {
      // Reset all words to visible first
      setWords(prev => prev.map(w => ({ ...w, visible: true })))
      
      // Then hide non-meaning words one by one
      words.forEach((word, index) => {
        if (!word.isMeaning) {
          setTimeout(() => {
            setWords(prev => prev.map((w, i) => 
              i === index ? { ...w, visible: false } : w
            ))
          }, index * 200)
        }
      })
      
      // Reset after animation
      setTimeout(() => {
        setWords(prev => prev.map(w => ({ ...w, visible: true })))
      }, 3000)
    }

    const interval = setInterval(handleAnimate, 4000)
    handleAnimate() // Run immediately
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-cyan-400">Semantic Pruning</h3>
      <div className="flex-1 flex items-center justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {words.map((word, index) => (
            <span
              key={index}
              className={`transition-all duration-300 ${
                word.visible
                  ? word.isMeaning
                    ? 'text-cyan-400 font-semibold'
                    : 'text-gray-500'
                  : 'opacity-0 scale-0'
              }`}
            >
              {word.text}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Noise disappears, meaning remains
      </p>
    </div>
  )
}

const PIIScrubbingCard = () => {
  const sampleText = [
    { type: 'text', content: 'Contact: ' },
    { type: 'pii', content: 'John Doe', category: 'name' },
    { type: 'text', content: ' at ' },
    { type: 'pii', content: 'john.doe@example.com', category: 'email' },
    { type: 'text', content: ' called from ' },
    { type: 'pii', content: '+1-555-123-4567', category: 'phone' },
  ]

  return (
    <div className="p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-cyan-400">PII Scrubbing</h3>
      <div className="flex-1 flex items-center justify-center">
        <div className="font-mono text-sm space-y-2 group">
          {sampleText.map((item, index) => (
            <span key={index}>
              {item.type === 'pii' ? (
                <span className="relative inline-block group/pii">
                  <span className="bg-black px-2 py-1 rounded transition-all duration-300 group-hover/pii:ring-2 group-hover/pii:ring-cyan-500/50 group-hover/pii:shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                    ████████
                  </span>
                  <span className="absolute -top-6 left-0 text-xs text-gray-400 opacity-0 group-hover/pii:opacity-100 transition-opacity">
                    {item.category}
                  </span>
                </span>
              ) : (
                <span className="text-gray-300">{item.content}</span>
              )}
            </span>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Hover to reveal redaction glow
      </p>
    </div>
  )
}

const ModelAgnosticCard = ({ onModelChange, currentModel }) => {
  const models = [
    { id: 'openai', name: 'OpenAI', icon: '🤖' },
    { id: 'anthropic', name: 'Anthropic', icon: '🧠' },
    { id: 'llama', name: 'Llama 3', icon: '🦙' },
  ]

  const handleToggle = () => {
    const currentIndex = models.findIndex(m => m.id === currentModel)
    const nextIndex = (currentIndex + 1) % models.length
    onModelChange(models[nextIndex].id)
  }

  return (
    <div className="p-6 h-full flex flex-col">
      <h3 className="text-lg font-semibold mb-4 text-cyan-400">Model Agnostic</h3>
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4">
          {models.map((model) => (
            <div
              key={model.id}
              className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                currentModel === model.id
                  ? 'bg-cyan-500/10 ring-1 ring-cyan-500/50'
                  : 'opacity-50'
              }`}
            >
              <span className="text-2xl">{model.icon}</span>
              <span className="text-xs text-gray-400">{model.name}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500">Switch</span>
          <button
            onClick={handleToggle}
            className="relative w-16 h-7 bg-gray-800 rounded-full transition-all duration-300 hover:bg-gray-700"
          >
            <span className={`absolute top-0.5 w-6 h-6 bg-cyan-500 rounded-full transition-transform duration-300 ${
              currentModel === 'anthropic' ? 'left-[22px]' : currentModel === 'llama' ? 'left-[42px]' : 'left-0.5'
            }`}></span>
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-4 text-center">
        Works with any provider
      </p>
    </div>
  )
}

const BentoGrid = ({ onModelChange, currentModel }) => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-16 px-4 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Semantic Pruning */}
        <div className="bg-gray-900 border border-[#1e293b] rounded-lg hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
          <SemanticPruningCard />
        </div>

        {/* Card 2: PII Scrubbing */}
        <div className="bg-gray-900 border border-[#1e293b] rounded-lg hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
          <PIIScrubbingCard />
        </div>

        {/* Card 3: Model Agnostic */}
        <div className="bg-gray-900 border border-[#1e293b] rounded-lg hover:border-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300">
          <ModelAgnosticCard onModelChange={onModelChange} currentModel={currentModel} />
        </div>
      </div>
    </div>
  )
}

export default BentoGrid


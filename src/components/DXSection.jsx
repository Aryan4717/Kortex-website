import React from 'react'

const DXSection = () => {
  return (
    <div className="w-full max-w-7xl mx-auto mt-24 px-4 mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Integrated in 3 lines.
      </h2>
      
      <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 md:p-8 overflow-x-auto">
        <div className="font-mono text-sm md:text-base">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">runtime</span>{' '}
              <span className="text-gray-400">=</span>{' '}
              <span className="text-purple-400">new</span>{' '}
              <span className="text-yellow-400">Kortex</span>
              <span className="text-gray-400">({'{'}</span>{' '}
              <span className="text-cyan-300">power</span>
              <span className="text-gray-400">: </span>
              <span className="text-green-400">'distill'</span>
              <span className="text-gray-400">{'}'}</span>
              <span className="text-gray-400">);</span>
            </div>
            
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">context</span>{' '}
              <span className="text-gray-400">=</span>{' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-cyan-400">runtime</span>
              <span className="text-gray-400">.</span>
              <span className="text-yellow-400">process</span>
              <span className="text-gray-400">(</span>
              <span className="text-cyan-300">raw_data</span>
              <span className="text-gray-400">);</span>
            </div>
            
            <div>
              <span className="text-purple-400">const</span>{' '}
              <span className="text-cyan-400">response</span>{' '}
              <span className="text-gray-400">=</span>{' '}
              <span className="text-purple-400">await</span>{' '}
              <span className="text-cyan-300">ai</span>
              <span className="text-gray-400">.</span>
              <span className="text-yellow-400">generate</span>
              <span className="text-gray-400">({'{'}</span>{' '}
              <span className="text-cyan-300">context</span>
              <span className="text-gray-400">{'}'}</span>
              <span className="text-gray-400">);</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DXSection


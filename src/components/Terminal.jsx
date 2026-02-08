import React, { useState, useEffect } from 'react'

const Terminal = ({ model = 'openai' }) => {
  const [isDistilling, setIsDistilling] = useState(false)
  const [tokenSavings, setTokenSavings] = useState(0)
  const [showDistilled, setShowDistilled] = useState(false)

  const rawMemoryData = [
    '[2024-01-15 10:23:45] INFO: User login attempt',
    'email: john.doe@example.com',
    'password: ********',
    'session_id: a1b2c3d4e5f6g7h8',
    '[2024-01-15 10:23:46] DEBUG: Database query executed',
    'SELECT * FROM users WHERE email = "john.doe@example.com"',
    'Query time: 0.234s',
    '[2024-01-15 10:23:47] WARN: Cache miss for key: user_profile_12345',
    'SSN: 123-45-6789',
    'Credit Card: 4532-1234-5678-9010',
    '[2024-01-15 10:23:48] INFO: API request to /api/v1/users/12345',
    'Headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." }',
    '[2024-01-15 10:23:49] DEBUG: Response status: 200 OK',
    'Response body: { "id": 12345, "name": "John Doe", "email": "john.doe@example.com" }',
    '[2024-01-15 10:23:50] INFO: Logging user activity',
    'IP Address: 192.168.1.100',
    'User Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    '[2024-01-15 10:23:51] DEBUG: Memory allocation: 256MB',
    '[2024-01-15 10:23:52] INFO: Cache update completed',
    'Phone: +1-555-123-4567',
    'Address: 123 Main St, Anytown, ST 12345',
  ]

  const getDistilledContext = () => {
    const baseContext = {
      user: {
        id: 12345,
        name: "John Doe",
        action: "login"
      },
      timestamp: "2024-01-15T10:23:45Z",
      status: "success"
    }

    // Model-specific syntax examples
    const modelSyntax = {
      openai: {
        model: "gpt-4",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: "Process this context" }
        ],
        ...baseContext
      },
      anthropic: {
        model: "claude-3-opus",
        messages: [
          { role: "user", content: "Process this context" }
        ],
        system: "You are a helpful assistant.",
        ...baseContext
      },
      llama: {
        model: "llama-3-70b",
        prompt: "Process this context",
        system_prompt: "You are a helpful assistant.",
        ...baseContext
      }
    }

    return modelSyntax[model] || modelSyntax.openai
  }

  const distilledContext = getDistilledContext()

  const handleDistill = () => {
    setIsDistilling(true)
    setShowDistilled(false)
    setTokenSavings(0)

    // Animate token savings counter
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 15
      if (current >= 92) {
        current = 92
        clearInterval(interval)
        setTimeout(() => {
          setShowDistilled(true)
          setIsDistilling(false)
        }, 300)
      }
      setTokenSavings(Math.floor(current))
    }, 50)
  }

  return (
    <div className="w-full max-w-7xl mx-auto mt-16 px-4">
      {/* Token Savings Counter */}
      <div className="text-center mb-8">
        <div className="text-sm text-gray-400 mb-2">Token Savings</div>
        <div className="text-5xl font-bold text-cyan-500 transition-all duration-300">
          {tokenSavings}%
        </div>
      </div>

      {/* Terminal Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Left Side - Raw Memory */}
        <div className="relative">
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 h-96 overflow-hidden">
            <div className="text-xs text-gray-500 mb-2 font-mono">Raw Memory</div>
            <div className="h-full overflow-y-auto font-mono text-xs text-gray-500 space-y-1">
              {rawMemoryData.map((line, index) => (
                <div key={index} className={isDistilling ? 'opacity-50 transition-opacity duration-300' : ''}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Distilled Context */}
        <div className="relative">
          <div className="bg-gray-900 border border-cyan-500/50 rounded-lg p-4 h-96 overflow-hidden relative">
            <div className="text-xs text-cyan-500 mb-2 font-mono">Distilled Context</div>
            <div className="h-full flex items-center justify-center">
              {showDistilled ? (
                <div className="font-mono text-xs text-cyan-400 animate-pulse">
                  <pre className="whitespace-pre-wrap">
                    {JSON.stringify(distilledContext, null, 2)}
                  </pre>
                </div>
              ) : (
                <div className="text-gray-600 text-sm">Waiting for distillation...</div>
              )}
            </div>
            {/* Glow effect */}
            {showDistilled && (
              <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent pointer-events-none rounded-lg"></div>
            )}
          </div>
        </div>
      </div>

      {/* Distill Button */}
      <div className="text-center">
        <button
          onClick={handleDistill}
          disabled={isDistilling}
          className={`px-8 py-3 bg-cyan-500 text-black font-semibold rounded-md transition-all duration-300 ${
            isDistilling
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-cyan-400 hover:scale-105'
          }`}
        >
          {isDistilling ? 'Distilling...' : 'Distill'}
        </button>
      </div>

      {/* Animation: Data Flow Effect - particles flowing from left to right */}
      {isDistilling && (
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: '25%',
                top: `${30 + (i * 2)}%`,
                width: `${8 - (i % 3)}px`,
                height: `${8 - (i % 3)}px`,
                backgroundColor: '#06b6d4',
                borderRadius: '50%',
                animation: `flowRight 1.5s ease-in-out ${i * 0.05}s forwards`,
                opacity: 0.8,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Terminal


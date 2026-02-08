import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Kortex. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Docs
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


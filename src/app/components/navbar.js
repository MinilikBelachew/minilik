// components/Navbar.js

"use client"
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-[#0f172a]/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              MB
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#about" className="hover:text-blue-500 px-3 py-2 rounded-md">
                About
              </Link>
              <Link href="#skills" className="hover:text-blue-500 px-3 py-2 rounded-md">
                Skills
              </Link>
              <Link href="#projects" className="hover:text-blue-500 px-3 py-2 rounded-md">
                Projects
              </Link>
              <Link href="#contact" className="hover:text-blue-500 px-3 py-2 rounded-md">
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:text-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#about" className="hover:text-blue-500 block px-3 py-2 rounded-md">
              About
            </Link>
            <Link href="#skills" className="hover:text-blue-500 block px-3 py-2 rounded-md">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-blue-500 block px-3 py-2 rounded-md">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-blue-500 block px-3 py-2 rounded-md">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
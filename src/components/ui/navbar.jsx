import React from 'react'
import { cn } from '@/lib/utils'

function Logo({ className }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span className="text-lg font-semibold tracking-tight text-white">ScrapFlow</span>
    </div>
  )
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 md:px-6">
        <div className="h-20 flex items-center justify-between">
          <Logo />
          <div className="hidden md:flex items-center gap-8">
            <a href="#solutions" className="text-sm text-white hover:text-white transition-colors">Solutions</a>
            <a href="#materials" className="text-sm text-white hover:text-white transition-colors">Materials</a>
            <a href="#pricing" className="text-sm text-white hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="text-sm text-white hover:text-white transition-colors">Contact</a>
          </div>
          <button className="text-sm font-medium text-white hover:text-white transition-colors">
            Schedule Pickup
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar



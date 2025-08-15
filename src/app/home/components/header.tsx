"use client"

import { Bell, Briefcase, User } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onToggleSidebar: () => void
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white border-b border-gray-200 h-16">
      <div className="flex items-center justify-between h-full px-4">
        {/* Logo and Brand */}
    <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-slate-900">MercadOficio</span>
          </div>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full text-xs flex items-center justify-center text-white">
              3
            </span>
          </Button>

          {/* Profile */}
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Perfil</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

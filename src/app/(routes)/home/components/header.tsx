"use client"

import { Bell, Briefcase, User, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"

interface HeaderProps {
  onToggleSidebar: () => void
}

export function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 z-20 bg-white border-b border-gray-200 h-14 sm:h-16">
      <div className="flex items-center justify-between h-full px-3 sm:px-4">
        {/* Mobile Sidebar Trigger + Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SidebarTrigger className="md:hidden" />
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            </div>
            <span className="text-base sm:text-lg font-heading font-bold text-slate-900 truncate">MercadOficio</span>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-1 sm:gap-3">
          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-600 rounded-full text-xs flex items-center justify-center text-white" />
          </Button>

          {/* Profile */}
          <Button variant="ghost" size="sm" className="flex items-center gap-1 sm:gap-2 h-8 sm:h-9">
            <User className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden sm:inline text-sm">Perfil</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

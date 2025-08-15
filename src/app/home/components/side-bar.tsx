"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Briefcase, Plus, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Inicio", href: "/home", icon: Home },
  { name: "Buscar", href: "/home/search", icon: Search },
  { name: "Trabajos", href: "/home/jobs", icon: Briefcase },
  { name: "Publicar", href: "/home/post-jobs", icon: Plus },
  { name: "Perfil", href: "/home/profile", icon: User },
]

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile menu button */}
      <Button variant="ghost" size="sm" className="fixed top-4 left-4 z-50 lg:hidden" onClick={onToggle}>
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Overlay for mobile */}
      {isOpen && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40  max-h-screen bg-white border-r border-gray-200 transition-all duration-300 ease-in-out",
          // Mobile: slide in from left
          "lg:translate-x-0",
          isOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0 lg:w-16",
          // Desktop: always visible, width changes
          "lg:relative lg:z-10",
        )}
      >
        <div className="flex flex-col h-screen justify-between pt-16 lg:pt-0">
          {/* Logo area for desktop collapsed state */}
          {isOpen && <div className={cn("flex items-center px-4 py-3 border-b border-gray-100", !isOpen && "lg:justify-center")}>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <h2 className="text-lg font-semibold text-gray-900">MercadOficio</h2>
              </div>
          </div>}

          {/* Navigation */}
          <nav className="flex-1 px-3  ">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              const Icon = item.icon

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    !isOpen && "lg:justify-center lg:px-2",
                  )}
                  onClick={() => {
                    // Close sidebar on mobile after navigation
                    if (window.innerWidth < 1024) {
                      onToggle()
                    }
                  }}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  <span className={cn("transition-opacity", !isOpen && "lg:hidden")}>{item.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Toggle button for desktop */}
          <div className="p-3 border-t border-gray-100 hidden mt-auto h-full lg:contents">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className={cn("w-full justify-start gap-3", !isOpen && "justify-center px-2")}
            >
              <Menu className="w-5 h-5" />
              <span className={cn(!isOpen && "hidden")}>{isOpen ? "Contraer" : "Expandir"}</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  )
}

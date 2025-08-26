import { Home, Search, Briefcase, Plus, User, Settings,Blocks,TableOfContents, Bell, Star, MapPin, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const items = [
  {
    title: "Inicio",
    url: "/home",
    icon: Home,
  },
  {
    title: "Buscar",
    url: "/home/search",
    icon: Search,
  },
  {
    title: "Trabajos",
    url: "/home/jobs",
    icon: Briefcase,
    badge: "3",
  },
  {
    title: "Publicar",
    url: "/home/post-jobs",
    icon: Plus,
  },
  {
    title: "Perfil",
    url: "/home/profile",
    icon: User,
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-gray-200/60 bg-white/95 backdrop-blur-sm">
      <SidebarContent className="px-3 py-6">

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
            <TableOfContents className="w-4 h-4 mr-2" />
            Navegación
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="group relative h-11 px-3 rounded-xl hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200 data-[state=open]:bg-emerald-50 data-[state=open]:text-emerald-700"
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 transition-colors" />
                      <span className="font-medium">{item.title}</span>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="ml-auto bg-emerald-100 text-emerald-700 hover:bg-emerald-100 text-xs px-2 py-0.5"
                        >
                          {item.badge}
                        </Badge>
                      )}
                      <ChevronRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup className="mt-8">
          <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
            <Blocks className="w-4 h-4 mr-2" />
            Acciones Rápidas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start h-10 px-3 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                <Bell className="w-4 h-4 mr-3" />
                <span className="font-medium">Notificaciones</span>
                <Badge variant="destructive" className="ml-auto text-xs px-1.5 py-0.5">
                  2
                </Badge>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start h-10 px-3 rounded-xl hover:bg-purple-50 hover:text-purple-700 transition-colors"
              >
                <Settings className="w-4 h-4 mr-3" />
                <span className="font-medium">Configuración</span>
              </Button>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* User Profile Footer */}
      <SidebarFooter className="p-4 border-t border-gray-200/60">
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-4 space-y-3">
          {/* User Info */}
          <div className="flex items-center gap-3">
            <Avatar className="w-12 h-12 ring-2 ring-white shadow-sm">
              <AvatarImage src="/professional-headshot-of-ignacio-gonzalez.png" alt="Ignacio Gonzalez" />
              <AvatarFallback className="bg-emerald-500 text-white font-semibold">IG</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-gray-900 truncate">Ignacio Gonzalez</p>
              <p className="text-sm text-gray-600 truncate">Desarrollador Frontend</p>
            </div>
          </div>

          {/* User Stats */}
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1 text-amber-600">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">4.8</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Santiago, Chile</span>
            </div>
          </div>

          {/* Profile Actions */}
          <div className="flex gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="flex-1 h-8 text-xs bg-white/80 hover:bg-white border-gray-200 hover:border-emerald-300 hover:text-emerald-700 transition-colors"
              asChild
            >
              <Link href="/home/profile">Ver Perfil</Link>
            </Button>
            <Button variant="ghost" size="sm" className="h-8 px-2 hover:bg-white/80 transition-colors">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

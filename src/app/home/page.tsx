import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { User, Search, Star, Bell, ArrowRight, Briefcase, TrendingUp } from "lucide-react"

const HomePage = ({children} : {children : React.ReactNode}) => {
  return (
 <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      {/* <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-slate-900">MercadOficio</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-emerald-500 text-xs">
                  3
                </Badge>
              </Button>
              <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">
              ¡Bienvenido a MercadOficio, <span className="text-emerald-100">Ignacio</span>!
            </h1>
            <p className="text-emerald-50 text-lg font-medium">
              Gestiona tu perfil profesional y encuentra nuevas oportunidades
            </p>
          </div>
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/5 rounded-full"></div>
        </div>

        {/* Recommendations Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Recomendaciones para ti</h2>
            <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
              <TrendingUp className="w-3 h-3 mr-1" />
              Personalizado
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Update Profile Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Actualizar Perfil</CardTitle>
                <Badge className="w-fit bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-50">Recomendado</Badge>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                  Mantén tu perfil actualizado para que los empleadores puedan encontrarte fácilmente y conocer tus
                  habilidades más recientes.
                </CardDescription>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white group-hover:bg-blue-700 transition-colors">
                  Actualizar ahora
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Explore Jobs Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Search className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Explorar Trabajos</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                  Descubre nuevos trabajos que se ajusten a tus habilidades y experiencia. Encuentra tu próxima
                  oportunidad profesional.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 group-hover:bg-emerald-50 transition-colors bg-transparent"
                >
                  Explorar trabajos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Leave Review Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-lg font-semibold text-slate-900">Dejar una Reseña</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                  No olvides dejar una reseña sobre tu experiencia con el profesional que contrataste o el trabajo que
                  realizaste.
                </CardDescription>
                <Button
                  variant="outline"
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300 group-hover:bg-purple-50 transition-colors bg-transparent"
                >
                  Escribir reseña
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Notifications Section */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
                <Bell className="w-5 h-5 text-slate-600" />
              </div>
              <CardTitle className="text-lg font-semibold text-slate-900">Notificaciones</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">No hay notificaciones por el momento</p>
              <p className="text-slate-400 text-sm mt-1">Te notificaremos cuando tengas nuevas actualizaciones</p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

export default HomePage
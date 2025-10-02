"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Briefcase, Clock, History, Users, TrendingUp, ArrowRight } from "lucide-react"

const JobsPortal = () => {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <div className="min-h-screen ">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold text-slate-900 font-sans">Portal de Empleos</h1>
              <p className="text-xl text-slate-600 max-w-2xl">
                Aquí podrás publicar tus ofertas de trabajos y gestionar todas tus oportunidades profesionales
              </p>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
              Añadir Nuevo Trabajo
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 text-sm font-medium">Trabajos Activos</p>
                  <p className="text-2xl font-bold text-blue-900">0</p>
                </div>
                <div className="w-12 h-12 bg-blue-200 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 to-emerald-100/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-emerald-600 text-sm font-medium">Candidatos</p>
                  <p className="text-2xl font-bold text-emerald-900">0</p>
                </div>
                <div className="w-12 h-12 bg-emerald-200 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-600 text-sm font-medium">Completados</p>
                  <p className="text-2xl font-bold text-purple-900">0</p>
                </div>
                <div className="w-12 h-12 bg-purple-200 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Jobs Tabs */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                <TabsTrigger
                  value="active"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <Clock className="w-4 h-4" />
                  Trabajos Activos
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <History className="w-4 h-4" />
                  Historial de Trabajos
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6">
                {/* Empty State for Active Jobs */}
                <div className="text-center py-16">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto shadow-lg">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center">
                        <Plus className="w-8 h-8 text-blue-600" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full animate-pulse delay-300"></div>
                  </div>

                  <div className="space-y-4 max-w-md mx-auto">
                    <h3 className="text-2xl font-bold text-slate-900">Añadir Nuevo Trabajo</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Crea una nueva oferta de trabajo para encontrar el candidato perfecto para tu proyecto
                    </p>

                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group mt-6"
                    >
                      Crear trabajo
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-6">
                {/* Empty State for Job History */}
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <History className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Sin historial de trabajos</h3>
                  <p className="text-slate-600 max-w-md mx-auto">
                    Una vez que completes tus primeros trabajos, aparecerán aquí para que puedas revisarlos
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>

        {/* Bottom Message */}
        <div className="mt-8 text-center">
          <Card className="border-0 shadow-sm bg-gradient-to-r from-slate-50 to-slate-100/50 inline-block">
            <CardContent className="px-8 py-4">
              <p className="text-slate-600 font-medium">Aún no has publicado ninguna oferta de trabajo</p>
              <p className="text-slate-500 text-sm mt-1">
                ¡Comienza creando tu primera oferta y encuentra talento increíble!
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">Explorar Profesionales</h3>
                  <p className="text-slate-600 text-sm">
                    Busca y conecta con profesionales calificados para tus proyectos
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">Ver Estadísticas</h3>
                  <p className="text-slate-600 text-sm">
                    Analiza el rendimiento de tus ofertas de trabajo y candidatos
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
};


export default JobsPortal;
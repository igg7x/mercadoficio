"use client"
import { useState } from 'react'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Plus, Briefcase, Clock, History, Users, TrendingUp, ArrowRight} from "lucide-react"
import { Job , Category ,JobStats } from '@/lib/api/types'
import StatsCards from './stats-cards'
import JobsTabs from './jobs-tabs'
import CreateJobDialog from './create-job-dialog'
import { useModal } from '@/hooks/use-modal'

interface JobsPortalShellProps {
  // stats: JobStats;
  categories: Category[];
}

const JobsPortalShell = ({ stats, categories }: JobsPortalShellProps) => {
  const { show : dialogOpen, toogle: setDialogOpen } = useModal()
  
  return    (
   <>
       <div className="min-h-screen">
      {/* Main Content */}
      <main className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:gap-6 lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-sans">Portal de Empleos</h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl">
                Aquí podrás publicar tus ofertas de trabajos y gestionar todas tus oportunidades profesionales
              </p>
            </div>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group text-base sm:text-lg"
              onClick={setDialogOpen}
            >
              <Plus className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-200" />
              Añadir Nuevo Trabajo
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        {/* <StatsCards stats={stats} /> */}

        {/* Jobs Tabs */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-0 p-4 sm:p-6">
            <JobsTabs onCreateClick={setDialogOpen} />
          </CardHeader>
        </Card>
        <CreateJobDialog open={dialogOpen} onOpenChange={setDialogOpen} categories={categories}/>
        {/* Bottom Message */}
        {/* <div className="mt-6 sm:mt-8 text-center">
          <Card className="border-0 shadow-sm bg-gradient-to-r from-slate-50 to-slate-100/50 inline-block">
            <CardContent className="px-4 py-3 sm:px-8 sm:py-4">
              <p className="text-slate-600 font-medium text-sm sm:text-base">Aún no has publicado ninguna oferta de trabajo</p>
              <p className="text-slate-500 text-xs sm:text-sm mt-1">
                ¡Comienza creando tu primera oferta y encuentra talento increíble!
              </p>
            </CardContent>
          </Card>
        </div> */}
        {/* Quick Actions */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-200 transition-colors">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Explorar Profesionales</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Busca y conecta con profesionales calificados para tus proyectos
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 hidden sm:block" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-200 group cursor-pointer">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-200 transition-colors">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-slate-900 mb-1 text-sm sm:text-base">Ver Estadísticas</h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Analiza el rendimiento de tus ofertas de trabajo y candidatos
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 hidden sm:block" />
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  </>
  )
}

export default JobsPortalShell
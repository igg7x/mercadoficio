"use client"

import React, { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, History, Plus, ArrowRight } from "lucide-react"
import { Button } from '@/components/ui/button'
import { Job } from '@/lib/api/types'
import { Page } from '@/lib/api/types'
import JobsList from './jobs-list'
import { useJobsByUserCustomer, useJobsHistorialCustomer } from '@/hooks/use-jobs'

interface JobsTabsProps {
  onCreateClick: () => void;
}

const JobsTabs = ({ onCreateClick }: JobsTabsProps) => {
  const [activeTab, setActiveTab] = useState("active");
  
  const {
    data: activeJobsPage,
    isLoading: isLoadingActive,
    isError: isErrorActive,
    nextPage: nextPageActive,
    prevPage: prevPageActive,
    page: pageActive,
  } = useJobsByUserCustomer();

  const {
    data: historialJobsPage,
    isLoading: isLoadingHistorial,
    isError: isErrorHistorial,
    nextPage: nextPageHistorial,
    prevPage: prevPageHistorial,
    page: pageHistorial,
  } = useJobsHistorialCustomer();

  return (
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
        {isLoadingActive || !activeJobsPage ? (
          <JobsList 
            isLoading={true}
            pageType="active"
            onNextPage={nextPageActive}
            onPrevPage={prevPageActive}
            currentPage={pageActive}
          />
        ) : isErrorActive ? (
          <JobsList 
            isError={true}
            pageType="active"
            onNextPage={nextPageActive}
            onPrevPage={prevPageActive}
            currentPage={pageActive}
          />
        ) : activeJobsPage.content.length > 0 ? (
          <JobsList 
            jobsPage={activeJobsPage}
            pageType="active"
            onNextPage={nextPageActive}
            onPrevPage={prevPageActive}
            currentPage={pageActive}
          />
        ) : (
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
                onClick={onCreateClick}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-200 group mt-6"
              >
                Crear trabajo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        )}
      </TabsContent>

      <TabsContent value="history" className="mt-6">
        {isLoadingHistorial || !historialJobsPage ? (
          <JobsList 
            isLoading={true}
            pageType="history"
            onNextPage={nextPageHistorial}
            onPrevPage={prevPageHistorial}
            currentPage={pageHistorial}
          />
        ) : isErrorHistorial ? (
          <JobsList 
            isError={true}
            pageType="history"
            onNextPage={nextPageHistorial}
            onPrevPage={prevPageHistorial}
            currentPage={pageHistorial}
          />
        ) : historialJobsPage.content.length > 0 ? (
          <JobsList 
            jobsPage={historialJobsPage}
            pageType="history"
            onNextPage={nextPageHistorial}
            onPrevPage={prevPageHistorial}
            currentPage={pageHistorial}
          />
        ) : (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <History className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Sin historial de trabajos</h3>
            <p className="text-slate-600 max-w-md mx-auto">
              Una vez que completes tus primeros trabajos, aparecerán aquí para que puedas revisarlos
            </p>
          </div>
        )}
      </TabsContent>
    </Tabs>
  )
}

export default JobsTabs
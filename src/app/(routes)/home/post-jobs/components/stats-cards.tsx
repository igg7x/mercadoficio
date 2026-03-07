import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Briefcase, Users, TrendingUp } from "lucide-react"
import { JobStats } from '@/lib/api/types'
const StatsCards = ({stats} : {stats : JobStats}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
          <Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-blue-100/50">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-blue-600 text-xs sm:text-sm font-medium">Trabajos Activos</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900">0</p>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-5 md:w-6 md:h-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-emerald-50 to-emerald-100/50">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-emerald-600 text-xs sm:text-sm font-medium">Candidatos</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-900">0</p>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-emerald-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 sm:w-5 md:w-6 md:h-6 text-emerald-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md bg-gradient-to-br from-purple-50 to-purple-100/50">
            <CardContent className="p-4 sm:p-5 md:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-purple-600 text-xs sm:text-sm font-medium">Completados</p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-900">0</p>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-purple-200 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 sm:w-5 md:w-6 md:h-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
  )
}

export default StatsCards
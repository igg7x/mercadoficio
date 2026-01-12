import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Briefcase, Users, TrendingUp } from "lucide-react"
import { JobStats } from '@/lib/api/types'
const StatsCards = ({stats} : {stats : JobStats}) => {
  return (
    <><div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
        </div></>
  )
}

export default StatsCards
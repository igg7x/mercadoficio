"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Briefcase,
  Search,
  MapPin,
  Clock,
  History,
  Star,
  Filter,
  Building2,
  DollarSign,
  Users,
  ArrowRight,
  Heart,
  BookmarkPlus,
} from "lucide-react"
import { auth0 } from "@/lib/auth0"
import { Page, Job } from "@/lib/api/types"
import Pagination from "../../components/pagination"

interface EmpleosPortalProps {
  jobsPage: Page<Job>
}

export default function EmpleosPortal({ jobsPage }: EmpleosPortalProps) {
  const [activeTab, setActiveTab] = useState("active")
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    salary: "",
    type: "",
  })

  // Use real job data
  const availableJobs = jobsPage.content.map(job => ({
    id: job.jobId,
    title: job.title,
    company: "Empresa", // This might need to be added to Job type
    location: job.location,
    salary: "A convenir", // This might need to be added to Job type
    type: "Tiempo Completo", // This might need to be added to Job type
    category: job.category,
    description: job.description,
    requirements: [], // This might need to be added to Job type
    posted: new Date(job.publish_date).toLocaleDateString(),
    applicants: job.applicants,
    rating: 4.5, // This might need to be added to Job type
    featured: false, // This might need to be added to Job type
  }))

  const categories = [
    "Tecnología",
    "Diseño y Creatividad",
    "Construcción y Hogar",
    "Servicios Profesionales",
    "Mantenimiento",
    "Educación",
    "Salud y Bienestar",
  ]

  const jobTypes = ["Tiempo Completo", "Medio Tiempo", "Por Proyecto", "Freelance", "Remoto"]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">

      {/* Main Content */}
      <main className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-8">
        {/* Page Header */}
        <div className="mb-6 sm:mb-8">
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 font-sans">Portal de Trabajos</h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl">
              Aquí podrás aplicar a distintas ofertas de trabajo y gestionar tus oportunidades profesionales
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-6 sm:mb-8">
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
              <div className="sm:col-span-2 md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar trabajos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-9 sm:h-10 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                <SelectTrigger className="h-9 sm:h-10 border-slate-200 focus:border-emerald-500 text-sm">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <Input
                  placeholder="Ubicación"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="pl-10 h-9 sm:h-10 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500 text-sm"
                />
              </div>

              <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                <SelectTrigger className="h-9 sm:h-10 border-slate-200 focus:border-emerald-500 text-sm">
                  <SelectValue placeholder="Tipo" />
                </SelectTrigger>
                <SelectContent>
                  {jobTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Jobs Tabs */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader className="pb-0 p-4 sm:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                <TabsTrigger
                  value="active"
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4" />
                  <span className="hidden xs:inline">Disponibles</span>
                  <span className="inline xs:hidden">Trabajos</span>
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <History className="w-4 h-4" />
                  <span className="hidden xs:inline">Mis Aplicaciones</span>
                  <span className="inline xs:hidden">Aplicaciones</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-4 sm:mt-6">
                {/* Available Jobs */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-900">Ofertas Disponibles</h3>
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs sm:text-sm">
                        {availableJobs.length} trabajos
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="text-xs sm:text-sm">
                        <Filter className="w-4 h-4 mr-1 sm:mr-2" />
                        Filtros
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:gap-6">
                    {availableJobs.map((job) => (
                      <Card
                        key={job.id}
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-200 group"
                      >
                        <CardContent className="p-4 sm:p-6">
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">
                            {/* Main Job Info */}
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2 sm:mb-3">
                                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors truncate">
                                  {job.title}
                                </h3>
                                {job.featured && (
                                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-xs sm:text-sm w-fit">
                                    Destacado
                                  </Badge>
                                )}
                              </div>

                              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-slate-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                                <div className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-medium truncate">{job.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 flex-shrink-0" />
                                  <span className="truncate">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4 flex-shrink-0" />
                                  <span className="font-medium">{job.salary}</span>
                                </div>
                              </div>

                              <p className="text-slate-600 mb-3 sm:mb-4 leading-relaxed text-sm line-clamp-2 sm:line-clamp-3">{job.description}</p>

                              <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                                {job.requirements.slice(0, 3).map((req, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {req}
                                  </Badge>
                                ))}
                                {job.requirements.length > 3 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{job.requirements.length - 3}
                                  </Badge>
                                )}
                              </div>

                              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500">
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 flex-shrink-0" />
                                  {job.posted}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="w-4 h-4 flex-shrink-0" />
                                  {job.applicants} aplicantes
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 flex-shrink-0" />
                                  {job.rating}
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-row md:flex-col gap-2 mt-4 md:mt-0 md:ml-4">
                              <Button
                                size="sm"
                                className="flex-1 md:flex-none bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white group text-xs sm:text-sm"
                              >
                                Aplicar
                                <ArrowRight className="w-4 h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm" className="p-2 bg-transparent h-9 w-9 sm:w-10 sm:h-10">
                                  <Heart className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="p-2 bg-transparent h-9 w-9 sm:w-10 sm:h-10">
                                  <BookmarkPlus className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="history" className="mt-4 sm:mt-6">
                {/* Application History */}
                <div className="text-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <History className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">Sin aplicaciones aún</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-4 sm:mb-6 text-sm sm:text-base">
                    Una vez que apliques a trabajos, podrás ver el estado de tus aplicaciones aquí
                  </p>
                  <Button
                    onClick={() => setActiveTab("active")}
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm sm:text-base"
                  >
                    Explorar Trabajos
                    <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </main>
    </div>
  )
} ;

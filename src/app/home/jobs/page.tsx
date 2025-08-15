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

export default function EmpleosPortal() {
  const [activeTab, setActiveTab] = useState("active")
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    salary: "",
    type: "",
  })

  // Mock job data
  const availableJobs = [
    {
      id: 1,
      title: "Desarrollador Frontend React",
      company: "TechStart Solutions",
      location: "Santiago, Chile",
      salary: "$800.000 - $1.200.000",
      type: "Tiempo Completo",
      category: "Tecnología",
      description:
        "Buscamos desarrollador Frontend con experiencia en React y TypeScript para unirse a nuestro equipo.",
      requirements: ["React", "TypeScript", "Tailwind CSS"],
      posted: "Hace 2 días",
      applicants: 12,
      rating: 4.8,
      featured: true,
    },
    {
      id: 2,
      title: "Diseñador UX/UI",
      company: "Creative Agency",
      location: "Valparaíso, Chile",
      salary: "$600.000 - $900.000",
      type: "Medio Tiempo",
      category: "Diseño",
      description: "Diseñador creativo para proyectos web y móviles con enfoque en experiencia de usuario.",
      requirements: ["Figma", "Adobe Creative Suite", "Prototipado"],
      posted: "Hace 1 día",
      applicants: 8,
      rating: 4.6,
      featured: false,
    },
    {
      id: 3,
      title: "Electricista Residencial",
      company: "Servicios del Hogar SpA",
      location: "Concepción, Chile",
      salary: "$500.000 - $700.000",
      type: "Por Proyecto",
      category: "Construcción",
      description: "Electricista certificado para instalaciones residenciales y mantenimiento eléctrico.",
      requirements: ["Certificación SEC", "Experiencia 3+ años", "Herramientas propias"],
      posted: "Hace 3 días",
      applicants: 15,
      rating: 4.9,
      featured: true,
    },
  ]

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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-slate-900 font-sans">Portal de Trabajos</h1>
            <p className="text-xl text-slate-600 max-w-2xl">
              Aquí podrás aplicar a distintas ofertas de trabajo y gestionar tus oportunidades profesionales
            </p>
          </div>
        </div>

        {/* Search and Filters */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar trabajos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-11 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                <SelectTrigger className="h-11 border-slate-200 focus:border-emerald-500">
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
                  className="pl-10 h-11 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              <Select value={filters.type} onValueChange={(value) => setFilters({ ...filters, type: value })}>
                <SelectTrigger className="h-11 border-slate-200 focus:border-emerald-500">
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
          <CardHeader className="pb-0">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-slate-100 p-1 rounded-lg">
                <TabsTrigger
                  value="active"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <Briefcase className="w-4 h-4" />
                  Trabajos Disponibles
                </TabsTrigger>
                <TabsTrigger
                  value="history"
                  className="flex items-center gap-2 data-[state=active]:bg-white data-[state=active]:shadow-sm transition-all duration-200"
                >
                  <History className="w-4 h-4" />
                  Mis Aplicaciones
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-6">
                {/* Available Jobs */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">Ofertas Disponibles</h3>
                      <Badge variant="secondary" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                        {availableJobs.length} trabajos
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Filter className="w-4 h-4 mr-2" />
                        Filtros
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-6">
                    {availableJobs.map((job) => (
                      <Card
                        key={job.id}
                        className="border-0 shadow-md hover:shadow-lg transition-all duration-200 group"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                                  {job.title}
                                </h3>
                                {job.featured && (
                                  <Badge className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                                    Destacado
                                  </Badge>
                                )}
                              </div>

                              <div className="flex items-center gap-4 text-slate-600 mb-3">
                                <div className="flex items-center gap-1">
                                  <Building2 className="w-4 h-4" />
                                  <span className="text-sm font-medium">{job.company}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  <span className="text-sm">{job.location}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <DollarSign className="w-4 h-4" />
                                  <span className="text-sm font-medium">{job.salary}</span>
                                </div>
                              </div>

                              <p className="text-slate-600 mb-4 leading-relaxed">{job.description}</p>

                              <div className="flex flex-wrap gap-2 mb-4">
                                {job.requirements.map((req, index) => (
                                  <Badge key={index} variant="outline" className="text-xs">
                                    {req}
                                  </Badge>
                                ))}
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4 text-sm text-slate-500">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {job.posted}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4" />
                                    {job.applicants} aplicantes
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    {job.rating}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex flex-col gap-2 ml-6">
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white group"
                              >
                                Aplicar
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                              </Button>
                              <div className="flex gap-1">
                                <Button variant="outline" size="sm" className="p-2 bg-transparent">
                                  <Heart className="w-4 h-4" />
                                </Button>
                                <Button variant="outline" size="sm" className="p-2 bg-transparent">
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

              <TabsContent value="history" className="mt-6">
                {/* Application History */}
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <History className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Sin aplicaciones aún</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6">
                    Una vez que apliques a trabajos, podrás ver el estado de tus aplicaciones aquí
                  </p>
                  <Button
                    onClick={() => setActiveTab("active")}
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white"
                  >
                    Explorar Trabajos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
        </Card>
      </main>
    </div>
  )
}

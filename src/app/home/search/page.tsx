"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Star, Filter, Users, Loader2 } from "lucide-react"

export default function SearchPage() {
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [filters, setFilters] = useState({
    category: "",
    location: "",
    rating: "",
  })

  const handleSearch = async () => {
    setIsSearching(true)
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false)
      setSearchResults([]) // Empty results for now
    }, 2000)
  }

  const categories = [
    "Construcción y Hogar",
    "Servicios Profesionales",
    "Mantenimiento",
    "Diseño y Creatividad",
    "Tecnología",
    "Educación",
    "Salud y Bienestar",
  ]

  const ratings = [
    { value: "5", label: "5 estrellas" },
    { value: "4", label: "4+ estrellas" },
    { value: "3", label: "3+ estrellas" },
    { value: "any", label: "Cualquiera" },
  ]

  return (

    
    <div className="min-h-screen ">
      <main className="max-w-7xl mx-auto px-4  md:px-8 sm:px-16 lg:px-4 py-2">
      {/* Header */}
      <div >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          <div className="text-center space-y-3 lg:space-y-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 font-sans leading-tight">
              Encuentra a los mejores profesionales
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-4">
              Aplica los distintos filtros para encontrar el profesional que necesitas
            </p>
          </div>
        </div>
      </div>

      {/* Search Filters */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm max-w-none">
          <CardContent className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {/* Category Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Filter className="w-4 h-4" />
                  Categoría
                </label>
                <Select value={filters.category} onValueChange={(value) => setFilters({ ...filters, category: value })}>
                  <SelectTrigger className="h-11 sm:h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="Seleccionar categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Location Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <MapPin className="w-4 h-4" />
                  Ubicación
                </label>
                <Input
                  placeholder="Ciudad, Región"
                  value={filters.location}
                  onChange={(e) => setFilters({ ...filters, location: e.target.value })}
                  className="h-11 sm:h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>

              {/* Rating Filter */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <Star className="w-4 h-4" />
                  Calificación mínima
                </label>
                <Select value={filters.rating} onValueChange={(value) => setFilters({ ...filters, rating: value })}>
                  <SelectTrigger className="h-11 sm:h-12 border-slate-200 focus:border-emerald-500 focus:ring-emerald-500">
                    <SelectValue placeholder="Cualquiera" />
                  </SelectTrigger>
                  <SelectContent>
                    {ratings.map((rating) => (
                      <SelectItem key={rating.value} value={rating.value}>
                        {rating.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Search Button */}
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <label className="text-sm font-medium text-transparent hidden lg:block">Search</label>
                <Button
                  onClick={handleSearch}
                  disabled={isSearching}
                  className="w-full h-11 sm:h-12 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  {isSearching ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Buscando...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Buscar
                    </>
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="mt-6 lg:mt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Resultados de búsqueda</h2>
              <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                {searchResults.length} profesionales
              </Badge>
            </div>
          </div>

          {/* Loading State */}
          {isSearching && (
            <Card className="border-0 shadow-sm">
              <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16">
                <div className="relative">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-slate-200 rounded-full"></div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
                </div>
                <p className="text-slate-600 mt-4 font-medium text-center">Buscando profesionales...</p>
                <p className="text-slate-500 text-sm mt-1 text-center">Esto puede tomar unos segundos</p>
              </CardContent>
            </Card>
          )}

          {/* Empty State */}
          {!isSearching && searchResults.length === 0 && (
            <Card className="border-0 shadow-sm bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-slate-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2 text-center">
                  No se encontraron profesionales
                </h3>
                <p className="text-slate-600 text-center max-w-md mb-6 text-sm sm:text-base">
                  Intenta ajustar tus filtros de búsqueda o explorar diferentes categorías para encontrar el profesional
                  perfecto para tu proyecto.
                </p>
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 justify-center w-full sm:w-auto">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 justify-center"
                  >
                    Construcción
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 justify-center"
                  >
                    Diseño
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 justify-center"
                  >
                    Tecnología
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-emerald-50 hover:border-emerald-200 justify-center"
                  >
                    Mantenimiento
                  </Badge>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </main>
    </div>
  )
}

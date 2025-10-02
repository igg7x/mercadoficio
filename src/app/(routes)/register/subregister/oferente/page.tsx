"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Briefcase, MapPin, FileText, Tag, CheckCircle } from "lucide-react"

export  default  function ProviderRegistration() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")

  const categories = [
    "Construcción y Carpintería",
    "Educación",
    "Transporte y Logística",
    "Siderurgia",
    "Salud y Cuidado Personal",
    "Servicios Alimentarios",
    "Servicios Técnicos",
    "Cadetería",
  ]

  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category])
    } else {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    }
  }

  const isFormValid = location.trim() !== "" && description.trim() !== "" && selectedCategories.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">MercadOficio</span>
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-emerald-600" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-900 text-balance">
              Registro proveedor de servicios
            </CardTitle>
            <CardDescription className="text-gray-600 text-base flex items-center justify-center gap-2">
              <FileText className="w-4 h-4" />
              Ingresa los datos de tu servicio para comenzar a ofrecerlo
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8">
            {/* Location and Description Section */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Location */}
              <div className="space-y-3">
                <Label htmlFor="location" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  Ubicación
                </Label>
                <Input
                  id="location"
                  placeholder="Ingrese su ubicación"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="h-12 text-base border-2 focus:border-emerald-500 focus:ring-emerald-500/20"
                />
              </div>

              {/* Service Description */}
              <div className="space-y-3">
                <Label htmlFor="description" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  Descripción de tu servicio
                </Label>
                <Textarea
                  id="description"
                  placeholder="Descripción de tu servicio"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="min-h-[48px] text-base border-2 focus:border-emerald-500 focus:ring-emerald-500/20 resize-none"
                  rows={3}
                />
              </div>
            </div>

            {/* Categories Section */}
            <div className="space-y-4">
              <Label className="text-base font-semibold text-gray-900 flex items-center gap-2">
                <Tag className="w-4 h-4 text-emerald-600" />
                Categorías
              </Label>

              <div className="grid md:grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div
                    key={category}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50/50 transition-colors"
                  >
                    <Checkbox
                      id={category}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={(checked) => handleCategoryChange(category, checked as boolean)}
                      className="data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600"
                    />
                    <Label htmlFor={category} className="text-sm font-medium text-gray-700 cursor-pointer flex-1">
                      {category}
                    </Label>
                  </div>
                ))}
              </div>

              {selectedCategories.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 p-3 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  {selectedCategories.length} categoría{selectedCategories.length > 1 ? "s" : ""} seleccionada
                  {selectedCategories.length > 1 ? "s" : ""}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                className={`w-full h-12 text-base font-semibold rounded-xl transition-all duration-200 ${
                  isFormValid
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg hover:shadow-xl"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isFormValid}
              >
                {isFormValid ? (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Registrarme
                  </div>
                ) : (
                  "Completa todos los campos"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">Inicia sesión aquí</button>
          </p>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Mail,
  Phone,
  Star,
  Edit3,
  Camera,
  Award,
  Briefcase,
  Calendar,
  MessageCircle,
  Heart,
  TrendingUp,
  CheckCircle2,
  Users,
} from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("profile")

  const userStats = [
    { label: "Trabajos Completados", value: "24", icon: CheckCircle2, color: "text-emerald-600" },
    { label: "Calificación Promedio", value: "4.8", icon: Star, color: "text-yellow-500" },
    { label: "Clientes Satisfechos", value: "22", icon: Heart, color: "text-rose-500" },
    { label: "Años de Experiencia", value: "5+", icon: Award, color: "text-blue-500" },
  ]

  const categories = [
    { name: "Construcción y Carpintería", active: true },
    { name: "Salud y Cuidado Personal", active: true },
    { name: "Educación", active: true },
    { name: "Servicios Alimentarios", active: true },
    { name: "Tecnología", active: false },
    { name: "Diseño Gráfico", active: false },
  ]

  const recentReviews = [
    {
      id: 1,
      client: "María Rodriguez",
      rating: 5,
      comment: "Excelente trabajo, muy profesional y puntual. Recomendado 100%.",
      date: "2024-01-15",
      project: "Remodelación de cocina",
    },
    {
      id: 2,
      client: "Carlos Mendez",
      rating: 5,
      comment: "Superó mis expectativas. Trabajo de calidad y gran atención al detalle.",
      date: "2024-01-10",
      project: "Instalación de pisos",
    },
    {
      id: 3,
      client: "Ana García",
      rating: 4,
      comment: "Muy buen servicio, entrega a tiempo y excelente comunicación.",
      date: "2024-01-05",
      project: "Pintura de casa",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
      {/* Hero Section with Cover */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/30 rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-1/3 w-16 h-16 border border-white/25 rounded-full"></div>
          </div>
        </div>

        {/* Profile Header */}
        <div className="relative -mt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Avatar */}
                <div className="relative group">
                  <Avatar className="w-32 h-32 border-4 border-white shadow-lg ring-4 ring-emerald-100">
                    <AvatarImage
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-p2rnPR0KX7CiAKIIZvEUQPr54IZk3f.png"
                      alt="Ignacio Gonzalez"
                    />
                    <AvatarFallback className="text-2xl font-semibold bg-emerald-100 text-emerald-700">
                      IG
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 rounded-full w-10 h-10 p-0 bg-emerald-600 hover:bg-emerald-700 shadow-lg"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>

                {/* User Info */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900">Ignacio Gonzalez</h1>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 hover:bg-emerald-200">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Verificado
                    </Badge>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    ignagonzalez2003@gmail.com
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Miembro desde Enero 2023
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      24 trabajos completados
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="outline" className="gap-2 bg-transparent">
                    <MessageCircle className="w-4 h-4" />
                    Contactar
                  </Button>
                  <Button className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                    <Edit3 className="w-4 h-4" />
                    Editar Perfil
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {userStats.map((stat, index) => (
              <Card
                key={index}
                className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 mb-3`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 sm:px-6 lg:px-8 mt-8 pb-12">
        <div className="max-w-6xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="grid w-full grid-cols-3 bg-white shadow-sm border border-gray-200 rounded-xl p-1">
              <TabsTrigger
                value="profile"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg font-medium"
              >
                Perfil
              </TabsTrigger>
              <TabsTrigger
                value="reviews-received"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg font-medium"
              >
                Reseñas Recibidas
              </TabsTrigger>
              <TabsTrigger
                value="reviews-sent"
                className="data-[state=active]:bg-emerald-600 data-[state=active]:text-white rounded-lg font-medium"
              >
                Reseñas Enviadas
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Personal Information */}
                  <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Users className="w-5 h-5 text-emerald-600" />
                        Información Personal
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-gray-500" />
                            Ubicación
                          </label>
                          <div className="p-3 bg-gray-50 rounded-lg border">
                            <span className="text-gray-500 italic">No especificado</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-6 text-emerald-600 hover:text-emerald-700"
                            >
                              Agregar
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Mail className="w-4 h-4 text-gray-500" />
                            Email de Contacto
                          </label>
                          <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                            <span className="text-gray-900">ignagonzalez2003@gmail.com</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-gray-500" />
                            Teléfono de Contacto
                          </label>
                          <div className="p-3 bg-gray-50 rounded-lg border">
                            <span className="text-gray-500 italic">No especificado</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="ml-2 h-6 text-emerald-600 hover:text-emerald-700"
                            >
                              Agregar
                            </Button>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            Calificación Promedio
                          </label>
                          <div className="flex items-center gap-2 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                            <div className="flex items-center gap-1">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                  key={star}
                                  className={`w-4 h-4 ${star <= 4 ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="font-semibold text-gray-900">4.8</span>
                            <span className="text-sm text-gray-600">(24 reseñas)</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Categories */}
                  <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="w-5 h-5 text-emerald-600" />
                        Categorías Seleccionadas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {categories.map((category, index) => (
                          <div
                            key={index}
                            className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                              category.active
                                ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                                : "bg-gray-50 border-gray-200 text-gray-500"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
                                category.active ? "bg-emerald-600 border-emerald-600" : "border-gray-300"
                              }`}
                            >
                              {category.active && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </div>
                            <span className="font-medium">{category.name}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  {/* Biography */}
                  <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <Edit3 className="w-5 h-5 text-emerald-600" />
                        Biografía
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="p-4 bg-gray-50 rounded-lg border border-dashed border-gray-300 text-center">
                        <p className="text-gray-500 italic mb-3">
                          El usuario no ha escrito una biografía por el momento
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-emerald-600 border-emerald-600 hover:bg-emerald-50 bg-transparent"
                        >
                          Escribir Biografía
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="shadow-md border-0 bg-gradient-to-br from-emerald-50 to-teal-50">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-xl">
                        <TrendingUp className="w-5 h-5 text-emerald-600" />
                        Acciones Rápidas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full justify-start gap-2 hover:bg-white bg-transparent">
                        <Edit3 className="w-4 h-4" />
                        Editar Información
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2 hover:bg-white bg-transparent">
                        <Camera className="w-4 h-4" />
                        Cambiar Foto
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2 hover:bg-white bg-transparent">
                        <Award className="w-4 h-4" />
                        Ver Certificaciones
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews-received" className="space-y-6">
              <div className="grid gap-6">
                {recentReviews.map((review) => (
                  <Card
                    key={review.id}
                    className="shadow-md border-0 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback className="bg-emerald-100 text-emerald-700">
                              {review.client
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h4 className="font-semibold text-gray-900">{review.client}</h4>
                            <p className="text-sm text-gray-600">{review.project}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 mb-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-4 h-4 ${star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">{new Date(review.date).toLocaleDateString("es-ES")}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews-sent" className="space-y-6">
              <Card className="shadow-md border-0 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <MessageCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No has enviado reseñas aún</h3>
                  <p className="text-gray-600 mb-6">
                    Cuando completes trabajos, podrás dejar reseñas sobre tu experiencia.
                  </p>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">Explorar Trabajos</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

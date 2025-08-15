"use client"

import { useState } from "react"
import {
  Edit,
  Star,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Award,
  Briefcase,
  Camera,
  CheckCircle,
  Heart,
  Users,
  Trophy,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"

const mockUser = {
  name: "Ignacio Gonzalez",
  email: "ignagonzalez2003@gmail.com",
  phone: "+56 9 1234 5678",
  location: "No especificado",
  joinDate: "Enero 2023",
  rating: 4.8,
  reviewCount: 24,
  completedJobs: 24,
  satisfiedClients: 22,
  yearsExperience: "5+",
  verified: true,
  bio: "El usuario no ha escrito una biografía por el momento",
  categories: ["Construcción y Carpintería", "Salud y Cuidado Personal", "Educación", "Servicios Alimentarios"],
  reviews: [
    {
      client: "María Rodríguez",
      service: "Remodelación de cocina",
      rating: 5,
      comment: "Excelente trabajo, muy profesional y puntual. Recomendado 100%.",
      date: "14/1/2024",
      initials: "MR",
    },
    {
      client: "Carlos Mendez",
      service: "Instalación de pisos",
      rating: 5,
      comment: "Superó mis expectativas. Trabajo de calidad y gran atención al detalle.",
      date: "9/1/2024",
      initials: "CM",
    },
    {
      client: "Ana García",
      service: "Pintura interior",
      rating: 4,
      comment: "Buen trabajo en general, cumplió con los tiempos acordados.",
      date: "28/12/2023",
      initials: "AG",
    },
  ],
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [activeTab, setActiveTab] = useState("perfil")
  const [editData, setEditData] = useState({
    name: mockUser.name,
    email: mockUser.email,
    phone: mockUser.phone,
    location: mockUser.location,
    bio: mockUser.bio,
  })

  const handleSave = () => {
    console.log("Saving profile data:", editData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditData({
      name: mockUser.name,
      email: mockUser.email,
      phone: mockUser.phone,
      location: mockUser.location,
      bio: mockUser.bio,
    })
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="bg-emerald-600 pt-8 pb-20 sm:px-6 lg:px-16">
        <div className="w-full mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Profile Image */}
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-100 rounded-full flex items-center justify-center border-4 border-emerald-100">
                  <span className="text-xl sm:text-2xl font-bold text-emerald-600">
                    {mockUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* User Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{mockUser.name}</h1>
                      {mockUser.verified && (
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verificado
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
                      <div className="flex items-center gap-1">
                        <Mail className="h-4 w-4" />
                        {mockUser.email}
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        Miembro desde {mockUser.joinDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {mockUser.completedJobs} trabajos completados
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="outline" className="bg-white">
                      <Mail className="h-4 w-4 mr-2" />
                      Contactar
                    </Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">
                      <Edit className="h-4 w-4 mr-2" />
                      Editar Perfil
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-16 -mt-12 mb-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="text-center p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <CheckCircle className="h-8 w-8 text-emerald-600 mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{mockUser.completedJobs}</div>
              <div className="text-sm text-gray-600">Trabajos Completados</div>
            </div>
          </Card>
          <Card className="text-center p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <Star className="h-8 w-8 text-yellow-500 mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{mockUser.rating}</div>
              <div className="text-sm text-gray-600">Calificación Promedio</div>
            </div>
          </Card>
          <Card className="text-center p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <Heart className="h-8 w-8 text-red-500 mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{mockUser.satisfiedClients}</div>
              <div className="text-sm text-gray-600">Clientes Satisfechos</div>
            </div>
          </Card>
          <Card className="text-center p-4 sm:p-6 shadow-sm">
            <div className="flex flex-col items-center">
              <Trophy className="h-8 w-8 text-blue-500 mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{mockUser.yearsExperience}</div>
              <div className="text-sm text-gray-600">Años de Experiencia</div>
            </div>
          </Card>
        </div>
      </div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row gap-2 mb-8">
          <Button
            onClick={() => setActiveTab("perfil")}
            variant={activeTab === "perfil" ? "default" : "outline"}
            className={activeTab === "perfil" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-white"}
          >
            Perfil
          </Button>
          <Button
            onClick={() => setActiveTab("resenas-recibidas")}
            variant={activeTab === "resenas-recibidas" ? "default" : "outline"}
            className={activeTab === "resenas-recibidas" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-white"}
          >
            Reseñas Recibidas
          </Button>
          <Button
            onClick={() => setActiveTab("resenas-enviadas")}
            variant={activeTab === "resenas-enviadas" ? "default" : "outline"}
            className={activeTab === "resenas-enviadas" ? "bg-emerald-600 hover:bg-emerald-700" : "bg-white"}
          >
            Reseñas Enviadas
          </Button>
        </div>

        {activeTab === "perfil" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Personal Information */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Users className="h-5 w-5 text-emerald-600" />
                    Información Personal
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Ubicación
                      </Label>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-gray-500 italic">{mockUser.location}</span>
                        <Button variant="link" className="text-emerald-600 p-0 h-auto">
                          Agregar
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Email de Contacto
                      </Label>
                      <div className="mt-1 p-3 bg-emerald-50 rounded-lg">
                        <span className="text-gray-900">{mockUser.email}</span>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Teléfono de Contacto
                      </Label>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-gray-500 italic">No especificado</span>
                        <Button variant="link" className="text-emerald-600 p-0 h-auto">
                          Agregar
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Calificación Promedio
                      </Label>
                      <div className="mt-1 p-3 bg-yellow-50 rounded-lg flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <Star className="h-4 w-4 text-gray-300" />
                        </div>
                        <span className="font-medium">{mockUser.rating}</span>
                        <span className="text-gray-500">({mockUser.reviewCount} reseñas)</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Briefcase className="h-5 w-5 text-emerald-600" />
                    Categorías Seleccionadas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {mockUser.categories.map((category, index) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-emerald-50 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm text-gray-900">{category}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-200 rounded-lg">
                      <div className="h-4 w-4 border border-gray-300 rounded flex-shrink-0"></div>
                      <span className="text-sm text-gray-500">Tecnología</span>
                    </div>
                    <div className="flex items-center gap-2 p-3 border-2 border-dashed border-gray-200 rounded-lg">
                      <div className="h-4 w-4 border border-gray-300 rounded flex-shrink-0"></div>
                      <span className="text-sm text-gray-500">Diseño Gráfico</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Biography */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Edit className="h-5 w-5 text-emerald-600" />
                    Biografía
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-gray-500 italic mb-4">{mockUser.bio}</p>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Escribir Biografía</Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Award className="h-5 w-5 text-emerald-600" />
                    Acciones Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start bg-white">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Información
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-white">
                    <Camera className="h-4 w-4 mr-2" />
                    Cambiar Foto
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-white">
                    <Award className="h-4 w-4 mr-2" />
                    Ver Certificaciones
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === "resenas-recibidas" && (
          <div className="space-y-6 w-full pb-8">
            {mockUser.reviews.map((review, index) => (
              <Card key={index} className="shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-medium text-emerald-600">{review.initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900">{review.client}</h4>
                          <p className="text-sm text-gray-600">{review.service}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 text-gray-300" />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "resenas-enviadas" && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No has enviado reseñas aún</h3>
              <p className="text-gray-600 mb-6">
                Cuando completes trabajos, podrás dejar reseñas sobre tu experiencia.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Explorar Trabajos</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, CheckCircle, Star, Users } from "lucide-react"
import Link from "next/link"
export  default function Register () {
const professionals = [
    {
      name: "Ana Martínez",
      avatar: "https://randomuser.me/api/portraits/women/79.jpg",
      profession: "Diseñadora Gráfica",
      verified: true,
    },
    {
      name: "Carlos Pérez",
      avatar: "https://randomuser.me/api/portraits/men/86.jpg",
      profession: "Desarrollador Web",
      verified: true,
    },
    {
      name: "Lucía Gómez",
      avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      profession: "Fotógrafa",
      verified: false,
    },
    {
      name: "Miguel Torres",
      avatar: "https://randomuser.me/api/portraits/men/90.jpg",
      profession: "Electricista",
      verified: true,
    },
    {
      name: "Sofía Ramírez",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      profession: "Arquitecta",
      verified: false,
    },
    {
      name: "Javier López",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      profession: "Carpintero",
      verified: true,
    },
    {
      name: "María Fernández",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f",
      profession: "Chef",
      verified: true,
    },
    {
      name: "Pedro Sánchez",
      avatar:
        "https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e",
      profession: "Plomero",
      verified: false,
    },
  ];



  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex  flex-col items-center gap-2  mb-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-slate-900">MercadOficio</span>
          </div>

          {/* Trust Badge */}
          <Badge variant="secondary" className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200">
            <Star className="w-3 h-3 mr-1 fill-current" />
            Más de 10,000 profesionales satisfechos
          </Badge>
        </div>

        {/* Main Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-1">
            <CardTitle className="text-2xl font-bold text-gray-900 text-balance">
              Encuentra a los mejores profesionales
            </CardTitle>
            <CardDescription className="text-gray-600 text-pretty">
              Conecta con expertos verificados en un solo lugar
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Google Sign In Button */}
            <Link href="/auth/login?returnTo=/home">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-12 text-base font-medium border-2 hover:bg-gray-200 transition-colors bg-transparent"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continuar con Google
            </Button>
            </Link>

            {/* User Avatars Section */}
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-1">
                <Users className="w-4 h-4 text-emerald-600 mr-2" />
                <span className="text-sm font-medium text-gray-700">Únete a miles de profesionales</span>
              </div>
                    <div className="flex justify-center">
                    <div className="flex -space-x-2">
                      {professionals.slice(0, 6).map((src, index) => (
                        <div key={index} className="relative">
                          <img
                            src={src.avatar || "/placeholder.svg"}
                            alt={`Professional ${index + 1}`}
                            width={32}
                            height={32}
                            className="rounded-full border-2 border-white shadow-sm"
                          />
                        </div>
                      ))}
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 border-2 border-white text-xs font-medium text-white shadow-sm">
                        +2k
                      </div>
                    </div>
                  </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-8 pt-2">
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-600">Verificados</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-medium text-gray-600">Confiables</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-6 text-sm text-gray-500">
          Al continuar, aceptas nuestros{" "}
          <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Términos de Servicio
          </a>{" "}
          y{" "}
          <a href="#" className="text-emerald-600 hover:text-emerald-700 font-medium">
            Política de Privacidad
          </a>
        </div>

        {/* App Download Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-3">Descarga la app</p>
          <div className="flex justify-center gap-3">
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              App Store
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

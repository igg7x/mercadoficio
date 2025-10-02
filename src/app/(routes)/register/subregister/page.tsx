import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Briefcase, CheckCircle, Star } from "lucide-react"

export  default function AccountTypeSelection() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">MercadOficio</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Quiero crear una cuenta como...</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto text-pretty">
            Elige el tipo de cuenta que deseas crear y comienza a disfrutar de los beneficios de nuestra plataforma.
          </p>
        </div>

        {/* Account Type Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Cliente Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Cliente</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Regístrate como usuario cliente para disfrutar de nuestros servicios.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Acceso a miles de profesionales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Servicios verificados y confiables</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Soporte 24/7</span>
                </div>
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition-colors">
                Registro como Cliente
              </Button>
            </CardContent>
          </Card>

          {/* Proveedor Card */}
          <Card className="relative overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">Proveedor de Servicios</CardTitle>
              <CardDescription className="text-gray-600 text-base">
                Regístrate para ofrecer tus servicios a nuestros clientes.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Amplía tu base de clientes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Herramientas de gestión</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Pagos seguros garantizados</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors">
                Registro como Proveedor
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            ¿Ya tienes una cuenta?{" "}
            <button className="text-emerald-600 hover:text-emerald-700 font-medium">Inicia sesión aquí</button>
          </p>
        </div>
      </div>
    </div>
  )
}

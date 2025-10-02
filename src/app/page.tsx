
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Briefcase, Home, Wrench } from "lucide-react"
import Link from "next/link";
export default function LandingPage() {

  return ( 
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-heading font-bold text-slate-900">MercadOficio</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#servicios" className="text-slate-600 hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#como-funciona" className="text-slate-600 hover:text-primary transition-colors">
              Cómo Funciona
            </a>
            <a href="#testimonios" className="text-slate-600 hover:text-primary transition-colors">
              Testimonios
            </a>
            <Button variant="outline" size="sm">
              Clientes
            </Button>
            <Link href="/register">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Ingresar
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-14">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                  ✨ Más de 10,000 profesionales satisfechos
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 leading-tight">
                  Conecta con los <span className="text-primary">Mejores Profesionales</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Encuentra servicios de calidad para cada necesidad. Descubre el poder de la colaboración en nuestra
                  plataforma de confianza.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg group">
                  Explorar Servicios
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg bg-transparent">
                  Ver Cómo Funciona
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-slate-300">
                      <img
                        src="http://randomuser.me/api/portraits/women/1.jpg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-400">
                      <img
                        src="http://randomuser.me/api/portraits/women/2.jpg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-slate-500">
                      <img
                        src="http://randomuser.me/api/portraits/women/3.jpg"
                        alt="User Avatar"
                        className="w-8 h-8 rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <span className="text-sm text-slate-600">+10k usuarios activos</span>
                </div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-600 ml-2">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <img
                  src="/undraw_engineering_team_a7n2.svg"
                  alt="Profesionales colaborando"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">
              Servicios para Cada Necesidad
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Conectamos con profesionales especializados en diferentes áreas para resolver cualquier proyecto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8" />,
                title: "Hogar y Construcción",
                description: "Electricistas, plomeros, pintores y más para tu hogar",
                services: ["Electricidad", "Plomería", "Pintura", "Carpintería"],
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Servicios Profesionales",
                description: "Consultores, diseñadores y especialistas para tu negocio",
                services: ["Diseño", "Marketing", "Consultoría", "Desarrollo"],
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Mantenimiento",
                description: "Servicios de mantenimiento y reparación especializados",
                services: ["Limpieza", "Jardinería", "Reparaciones", "Instalaciones"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-3 text-slate-900">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.services.map((item, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="como-funciona" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">Cómo Funciona</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proceso simple y seguro para conectar con los mejores profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Describe tu Proyecto",
                description: "Cuéntanos qué necesitas y recibe propuestas personalizadas",
              },
              {
                step: "2",
                title: "Elige tu Profesional",
                description: "Compara perfiles, reseñas y precios para tomar la mejor decisión",
              },
              {
                step: "3",
                title: "Completa tu Proyecto",
                description: "Trabaja directamente con el profesional y paga de forma segura",
              },
            ].map((step, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
                  {step.step}
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">
              Opiniones de Nuestros Usuarios
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Descubre lo que dicen nuestros usuarios sobre sus experiencias al encontrar y ofrecer servicios a través
              de MercadOficio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Martín Escobar",
                role: "Arquitecto",
                avatar: "http://randomuser.me/api/portraits/men/1.jpg",
                content:
                  "MercadOficio me ha permitido conectar con clientes de calidad y hacer crecer mi negocio de manera significativa.",
                rating: 5,
              },
              {
                name: "Angela Stian",
                role: "Diseñadora de Interiores",
                avatar: "http://randomuser.me/api/portraits/women/1.jpg",
                content:
                  "La plataforma es intuitiva y me ha ayudado a encontrar proyectos increíbles. Altamente recomendada.",
                rating: 5,
              },
              {
                name: "Adrian Parejo",
                role: "Cliente de MercadOficio",
                avatar: "http://randomuser.me/api/portraits/men/2.jpg",
                content:
                  "Encontré al profesional perfecto para mi proyecto. El proceso fue transparente y los resultados excelentes.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white">
              ¿Listo para Comenzar tu Próximo Proyecto?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Únete a miles de usuarios que ya confían en MercadOficio para sus necesidades profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                Explorar Servicios
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                Ofrecer Servicios
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-heading font-bold">MercadOficio</span>
              </div>
              <p className="text-slate-400">La plataforma de confianza para conectar con los mejores profesionales.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Servicios</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Hogar
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Profesionales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mantenimiento
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Ayuda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacidad
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <p>&copy; 2024 MercadOficio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

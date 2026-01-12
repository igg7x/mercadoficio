import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle , } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Info, FilePenIcon, MapPin, Calendar, TagIcon, FileTextIcon } from "lucide-react"
import { CardFooter } from '@/components/ui/card'
import { Category } from '@/lib/api/types'

const CreateJobDialog = ({ open, onOpenChange, categories }: {open : boolean, onOpenChange : (open: boolean) => void, categories : Category[]}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              <Info className="inline-block h-6 w-6 mr-2" />
              Crear nueva publicación de trabajo
            </DialogTitle>
            <DialogDescription className="text-gray-500 text-sm ml-8">
              Llene el formulario a continuación para publicar una nueva
              oportunidad laboral.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="mt-3">
            <form className="grid gap-6" onSubmit={(e) => handleSubmit(e)}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title" className="text-sm">
                    <FilePenIcon className="inline-block h-5 w-5 mr-2" />
                    Titulo del Trabajo{" "}
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Desarrollador"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-sm">
                    <MapPin className="inline-block h-5 w-5 mr-2" />
                    Ubicacion
                  </Label>
                  <Input
                    id="location"
                    placeholder="Buenos Aires ,Cordoba..."
                    name="location"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deadline" className="text-sm">
                    <Calendar className="inline-block h-5 w-5 mr-2" />
                    Fecha límite de solicitud
                  </Label>
                  <Input id="deadline" name="deadline-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-sm">
                    <TagIcon className="inline-block h-5 w-5 mr-2" />
                    Categorias
                  </Label>
                  <Select
                    name="category"
                    defaultValue="default"
                    onValueChange={(value) => {
                      console.log("Selected category:", value);
                    }}>
                    <SelectGroup>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Seleccionar categoria" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectLabel>
                          <TagIcon className="inline-block h-5 w-5 mr-2" />
                          Categorias
                        </SelectLabel>
                        <SelectSeparator />
                      </SelectContent>
                    </SelectGroup>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-sm">
                  <FileTextIcon className="inline-block h-5 w-5 mr-2" />{" "}
                  Descripcion
                </Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Estoy buscando un desarrollador de software para un proyecto de 3 meses. Debe tener experiencia en React y Node.js."
                  className="min-h-[75px]  max-h-[200px] min-w-full p-1 border-2 border-gray-400 rounded-md text-sm"
                />
              </div>
              <CardFooter>
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
                >
                  Publicar Trabajo
                </button>
              </CardFooter>
            </form>
          </DialogFooter>
        </DialogContent>
      </Dialog>
  )
}

export default CreateJobDialog
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Label } from '@/components/ui/label'
import { FilePenIcon, CalendarCheck, FileTextIcon } from 'lucide-react'
import React from 'react'

const UpdateJobDialog = ({ showEditJob, toggleEditJob, handleSubmitEditJob, job } : { showEditJob: boolean, toggleEditJob: () => void, handleSubmitEditJob: (e: React.FormEvent) => void, job: any }) => {
  return (
    <Dialog open={showEditJob} onOpenChange={toggleEditJob}>
              <DialogContent className=" p-2 mx-2 rounded-md">
                <DialogHeader>
                  <DialogTitle>Editar Trabajo</DialogTitle>
                  <DialogDescription>
                    Ediita los campos que desees cambiar
                  </DialogDescription>
                </DialogHeader>
                <form
                  onSubmit={(e) => handleSubmitEditJob(e)}
                  className="flex flex-col gap-4">
                  <div>
                    <Label htmlFor="title">
                      <FilePenIcon className="inline-block h-5 w-5 mr-2" />
                      Titulo del Trabajo
                    </Label>
                    <Input name="title" defaultValue={job?.title} />
                  </div>
                  <div>
                    <Label htmlFor="deadline_date">
                      <CalendarCheck className="inline-block h-5 w-5 mr-2" />
                      Fecha de Expiracion
                    </Label>
                    <Input
                      type="date"
                      name="deadline_date"
                      defaultValue={job?.deadline_date}
                    />
                  </div>
                  <div>
                    <Label htmlFor="description">
                      <FileTextIcon className="inline-block h-5 w-5 mr-2" />
                      Descripcion
                    </Label>
                    <Input
                      type="text"
                      name="description"
                      defaultValue={job?.description}
                    />
                  </div>
                  <DialogFooter className="flex gap-4">
                    <Button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 text-white p-2  rounded-md">
                      Guardar
                    </Button>
                    <Button
                      type="button"
                      onClick={toggleEditJob}
                      className="bg-gray-500 hover:bg-black hover:text-white text-white p-2  rounded-md">
                      Cancelar
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
  )
}

export default UpdateJobDialog
import { Button } from '@/components/ui/button'
import { DialogHeader, DialogFooter } from '@/components/ui/dialog'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { InfoIcon, Trash2 } from 'lucide-react'
import React from 'react'

const DeleteJobDialog = ({ showDeleteJob, toogleDelete, handleDeleteJobById } : { showDeleteJob: boolean, toogleDelete: () => void, handleDeleteJobById: () => void }) => {
  return (
   <Dialog open={showDeleteJob} onOpenChange={toogleDelete}>
              <DialogContent>
                <DialogHeader className="mt-3">
                  <DialogTitle>
                    <InfoIcon className="inline-block h-6 w-6 mr-2" />
                    ¿Estas seguro de eliminar este trabajo? :
                  </DialogTitle>
                  <DialogDescription className="text-gray-500 text-sm ml-8 px-2">
                    Esta acción no se puede deshacer, tambien eliminaras las
                    reseñas hechas sobre este trabajo.
                    <p>
                      ¿Estás seguro de que quieres eliminar este puesto de
                      trabajo?
                    </p>
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="destructive"
                    onClick={handleDeleteJobById}
                    className={`mx-auto p-2 text-white hover:text-black bg-red-500 rounded-md `}>
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar
                  </Button>
                  <Button
                    onClick={toogleDelete}
                    className="mx-auto duration-150 p-2  hover:bg-gray-400 rounded-md bg-gray-600 text-white ">
                    Cancelar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
  )
}

export default DeleteJobDialog
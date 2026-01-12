"use-client"
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Job, JobApplication, Page } from '@/lib/api/types'
import { Badge, Edit2, MapPin, Tag, Activity, Calendar, Trash2, InfoIcon, FilePenIcon, CalendarCheck, FileTextIcon } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import ApplicantsTable from './applicants-table'
import { useModal } from '@/hooks/use-modal'
import UpdateJobDialog from './update-job-dialog'
import DeleteJobDialog from './delete-job-dialog'

const JobDetails = ({job , applications }:{job:Job, applications : Page<JobApplication>}) => {

  const { show: dialogEditOpen, toogle: toggleEdit  } = useModal();
  const { show: dialogDeleteOpen, toogle: toggleDelete } = useModal();
    return (
     <section className="[grid-area:main] overflow-y-auto">
          {/* <HeaderMobile /> */}
          <div className="container max-[640px]:mt-24 mx-auto p-6">
            <Card className="max-w-5xl mx-auto">
              <CardHeader className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-1.5">
                    <Badge
                      className={
                        job?.status
                          ? "bg-blue-500 hover:bg-blue-600"
                          : "bg-emerald-500 hover:bg-emerald-600"
                      }>
                      {job?.status ? "Cerrado" : "Abierto"}
                    </Badge>
                    <CardTitle className="text-2xl font-bold">
                      {job?.title}
                    </CardTitle>
                  </div>
                  <Button onClick={toggleEdit} variant="outline" size="sm">
                    <Edit2 className="w-4 h-4 mr-2" />
                    Editar Trabajo
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{job?.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    <span>{job?.category}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Activity className="w-4 h-4" />
                    <span>Estado: Activo</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>
                      Fecha de publicación:{" "}
                      {new Date(job.publish_date).toLocaleDateString("es-ES")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span>
                      Fecha de expiración:{" "}
                      {new Date(job.deadline_date).toLocaleDateString("es-ES")}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Descripción:</h3>
                  <p className="text-sm text-muted-foreground">
                    {job?.description}
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold">Aplicaciones:</h3>
                  {applications?.content?.length !== 0 ? (
                    <ApplicantsTable applications={applications} jobId={job.id} />
                  ) : (
                    <div className="w-full flex p-3  items-center  justify-center flex-col gap-1">
                      <p className=" text-xl max-[640px]:text-2xl ">
                        No hay aplicaciones
                      </p>
                      <img
                        draggable="false"
                        className="h-40  max-[640px]:h-72 max-[640px]:w-72"
                        src="/src/assets/images/undraw_People_search_re_5rre.png"
                        alt="No hay aplicaciones"
                      />
                    </div>
                  )}
                </div>
              </CardContent>
              {!job.status && (
                <CardFooter>
                  <Button onClick={toggleDelete} variant="destructive">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Eliminar Trabajo
                  </Button>
                </CardFooter>
              )}
            </Card>

            <UpdateJobDialog showEditJob={dialogEditOpen} toggleEditJob={toggleEdit} handleSubmitEditJob={() => {}} job={job} />
            <DeleteJobDialog showDeleteJob={dialogDeleteOpen} toogleDelete={toggleDelete} handleDeleteJobById={() => {}} />
          
            {/* <ToastContainer /> */}
          </div>
        </section>
)
}

export default JobDetails
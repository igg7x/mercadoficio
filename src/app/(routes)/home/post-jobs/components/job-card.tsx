import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Job } from '@/lib/api/types'
import { Badge, Calendar, Edit, Eye, Link, MapPin, MoreVertical, TagIcon, Trash2 } from 'lucide-react'
import React from 'react'

const JobCard = ({job}:{job:Job}) => {
  return (
       <Card className="border-red-100 shadow-sm hover:shadow-md transition-all duration-200 bg-white/90 backdrop-blur-sm group">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div
              className={`h-10 w-10 rounded-lg flex items-center justify-center `}>
              <TagIcon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-lg leading-tight">
                {job.title}
              </CardTitle>
              <div className="flex items-center gap-2">
                {job.status ? (
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200">
                    Completado
                  </Badge>
                ) : (
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Abierto
                  </Badge>
                )}
                {job.applicants > 0 && (
                  <Badge variant="outline" className="text-xs">
                    {job.applicants} candidatos
                  </Badge>
                )}
              </div>
            </div>
          </div>
          {showActions && (
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="h-4 w-4" />
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(job.publish_date).toLocaleDateString("es-ES")}
            </span>
          </div>
          <div className="flex gap-2 pt-2">
            {typeOfDetails === typesOfDetails.application ? (
              <Link
                to={`details/${job.jobId}`}
                className="text-blue-500 underline text-center">
                {" "}
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-4 w-4 mr-2" />
                  Ver detalles
                </Button>
              </Link>
            ) : (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={toogleJobDetails}>
                <Eye className="h-4 w-4 mr-2" />
                Ver detalles
              </Button>
            )}
            {showActions && (
              <div className="flex-wrap">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
      <ModalJobInfo
        job={job}
        refreshJobs={refreshJobs}
        show={showJobDetails}
        toogle={toogleJobDetails}
        canApply={canApply}
      />
    </Card>
  )
}

export default JobCard
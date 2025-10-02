import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Ban, Calendar, Check, CheckCheck, Info, MoreHorizontal, SquareArrowOutUpRight, Trash, TriangleAlert } from 'lucide-react';
import React from 'react'
import { Notification } from '@/lib/api/types';
import { TYPES } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NotificationCard = ({notification } :{notification :Notification} ) => {
  return (
    <Card
      className={`${
        notification.read_status ? "bg-gray-100" : "bg-white"
      } border-0 shadow-sm bg-white/90 backdrop-blur-sm relative border-l-4 ${
        notification.type == TYPES.INFO
          ? "border-l-blue-400"
          : notification.type === TYPES.SUCCESS
          ? "border-l-green-400"
          : notification.type === TYPES.WARNING
          ? "border-l-yellow-400"
          : "border-l-red-400"
      } `}>
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
          <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
            {notification.type === TYPES.INFO ? (
              <Info className="w-5 h-5 text-blue-500" />
            ) : notification.type === TYPES.SUCCESS ? (
              <Check className="w-5 h-5  text-green-500" />
            ) : notification.type === TYPES.WARNING ? (
              <Ban className="w-5  h-5 text-yellow-500" />
            ) : (
              <TriangleAlert className="w-7 h-7 mr-4 mt-1 flex-shrink-0 text-red-500" />
            )}
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {notification.title}
                </h3>
                <p className="text-gray-600 mt-1">{notification.message}</p>
              </div>{" "}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {!isMark && !isLoading && !notification.read_status && (
                    <DropdownMenuCheckboxItem
                      className="cursor-pointer flex items-center gap-2"
                      onClick={() => handleMarkNotification(notification.id)}>
                      <CheckCheck className="w-5 h-5 " />
                      Marcar como leido
                    </DropdownMenuCheckboxItem>
                  )}
                  <DropdownMenuCheckboxItem
                    className="cursor-pointer flex items-center gap-2"
                    onClick={handleMarkAsDelete}>
                    <Trash className="w-5 h-5  " />
                    Eliminar
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent> */}
              </DropdownMenu>
            </div>
            <div className="flex  flex-wrap items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="h-4 w-4" />
                <span> {notification.createdAt.toLocaleDateString()}</span>
              </div>
              {/* <div className="flex  gap-2">
                {notification.type === TYPES.SUCCESS && (
                  <button
                    disabled={isLoading}
                    onClick={() => selectNotification(notification)}
                    className="px-2 py-1 text-xs flex items-center  outline-none gap-1 bg-white text-gray-500 rounded-md border-gray-400 border-2 hover:text-green-400 hover:border-green-400">
                    <SquareArrowOutUpRight />
                    Crear Reseña
                  </button>
                )}
              </div> */}
            </div>
            {notification.read_status && (
              <label className="text-xs">
                <CheckCheck className="w-5 h-5 text-blue-500" />
              </label>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
)
}

export default NotificationCard ; 
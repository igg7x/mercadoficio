import React from 'react'
import { Notification } from '@/lib/api/types';
import { getNotificationsByUserEmail } from '@/lib/api/notification/notification';
import NotificationCard from './notification-card';
import { Bell } from 'lucide-react';

const Notifications = async  () => {
 const notifications  = await getNotificationsByUserEmail() as Array<Notification>;
 console.log("Notifications: ", notifications);
  return (
    <div>
      <ul>
        {notifications.length > 0 ? notifications.map((notification :Notification) => (
          <li key={notification.id}>
            <NotificationCard notification={notification} />
          </li>
        )) : (
           <div className="text-center py-8">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 font-medium">No hay notificaciones por el momento</p>
              <p className="text-slate-400 text-sm mt-1">Te notificaremos cuando tengas nuevas actualizaciones</p>
            </div>
            )}
      </ul>
    </div>
  )
}
export default Notifications
import { HTTP } from "@/lib/utils";
import { apiRequest } from "../request";
import { Notification } from "../types";
export const getNotificationsByUserEmail = (pageParam  : number = 0 ): Promise<Notification[]> => {
  return apiRequest({
    method: HTTP.GET,
    path: `/notifications/get?page=${pageParam}&size=10`,
  });
};

export const markNotificationAsRead = (notificationIds :Array<number>) => {
  const normalizedIds = Array.isArray(notificationIds)
    ? notificationIds
    : [notificationIds];
  apiRequest( {
    method: HTTP.PATCH,
    path: `/notifications/mark-as-read`,
    body: normalizedIds,
  });

};

export const markAsDeleteNotification = (notificationIds :Array<number>) => {
  const normalizedIds = Array.isArray(notificationIds)
    ? notificationIds
    : [notificationIds];
  return  apiRequest({
    method: HTTP.PATCH,
    path: `/notifications/mark-as-deleted`,
    body: normalizedIds,
  });
};

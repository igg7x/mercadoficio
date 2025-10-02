import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export enum HTTP {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH"
}

export enum ROLES {
  USER_CUSTOMER = "USER_CUSTOMER" , 
  USER_OFFERING = "USER_OFFERING" , 
  ADMIN = "ADMIN"
}

export enum TYPES {
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR"
}

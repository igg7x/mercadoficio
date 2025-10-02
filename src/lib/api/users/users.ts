import { apiRequest } from "../request";
import { HTTP } from "@/lib/utils";
import { User  ,UserOffering, UserUpdate ,Filter} from "../types";

export const getUsersOfferingsByFilters = async (pageParam : number, filters :Filter) => 
{
  return apiRequest({
    method: HTTP.POST,
    path: `users-offerings/private/search?page=${pageParam}&size=7`,
    body: filters,
  });
};

export const getUserByEmail = async (email :string ) => {
  return apiRequest({
    method: HTTP.GET,
    path: `users/private/${email}`,
  });
};

export const getUserOfferingByEmail = async (email :string ) => {
  return apiRequest({
    method: HTTP.GET,
    path: `users-offerings/private/${email}`,
  });
};

export const getUserCustomerByEmail = async (email : string ) => {
  return apiRequest({
    method: HTTP.GET,
    path: `users-customers/private/${email}`,
  });
};

export const createUser = async (user :User ) => {
  return apiRequest({
    method: HTTP.POST,
    path: "users/public/create",
    body: user,
  });
};

export const createUserCustomer = async () => {
  return apiRequest({
    method: HTTP.POST,
    path: `users-customers/public/create`,
  });
};

export const createUserOffering = async (data : UserOffering) => {
  const { ...userData } = data;
  return apiRequest({
    method: HTTP.POST,
    path: `users-offerings/public/create`,
    body: userData,
  });
};
// export const isUserHasRoles = async () => {
//   const params = {
//     method: HTTP.GET,
//     path: `users/private/roles`,
//   };
//   return request({ params });
// };

export const updateUser = async (user : UserUpdate) => {
  return apiRequest({
    method: HTTP.PUT,
    path: "users/private/update",
    body: user,
  });
};

// export const updateUserOffering = async (categories) => {
//   const params = {
//     method: HTTP.PUT,
//     path: "users-offerings/private/update",
//     body: categories,
//   };
//   return request({ params });
// };

// export const updateUserAdmin = async (user) => {
//   const params = {
//     method: HTTP.PATCH,
//     path: "users/private/admin/update-user",
//     body: user,
//   };
//   return request({ params });
// };

export const getAllUsers = async () => {
  return apiRequest({
    method: HTTP.GET,
    path: "users/private/all",
  });
};

export const deleteUser = async (email :string ) => {
  return apiRequest({
    method: HTTP.PATCH,
    path: `/users/private/delete/${email}`,
  });
};

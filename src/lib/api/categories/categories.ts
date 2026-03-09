import { HTTP } from "@/lib/utils";
import { apiRequest as request  } from "../request";
import { Category ,CategoryUpdate } from "../types";
// arreglar utilizar server components para el fetch de categorias , por lo que entonces no haria falta  el customo hook que utiliza react query 
// pasar toda la logica de react query al client component
// por ejemplo para el manejo de loading y error states  en el client component
export const getCategories = async () :Promise<Category[]> => {
  return request({
    method: HTTP.GET,
    path: "/categories/all",
  });
};
export const getCategoriesStats = async () => {
  return request({  method: HTTP.GET,
    path: "/categories/all/admin/data",
  });
};
export const updateCategoryStatus = async (category_update : CategoryUpdate ) => {
  return request({
    method: HTTP.PATCH,
    path: "/categories/admin/update-status",
    body: category_update,
  });
};
export const createCategory = async (category : Category ) => {
  return request({
    method: HTTP.POST,
    path: "/categories/admin/create",
    body: category,
  });
};
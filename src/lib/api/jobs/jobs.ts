import { apiRequest } from "../request";
import { HTTP } from "@/lib/utils";
import { Job  ,JobUpdate} from "../types";

export const getJobsByUserCustomer = async (pageParam  : number)  => 
{
    return apiRequest({
        path: `/jobs/customer?page=${pageParam}&size=7`,
        method: HTTP.GET,
    });
}


export const getJobsByCategories = async (pageParam :number) => {
  return apiRequest({
    method: HTTP.GET,
    path: `/jobs/all?page=${pageParam}&size=7`,
  });
};

export const getHistorialJobsByUserCustomer = async (pageParam : number) => {
  return apiRequest( {
    method: HTTP.GET,
    path: `/jobs/customer/historial?page=${pageParam}&size=7`,
  });
};

export const getHistorialForUserOffering = async (pageParam : number ) => {
  return apiRequest({
    method: HTTP.GET,
    path: `/jobs/offerings/historial?page=${pageParam}&size=8`,
  });
};

export const createJob = async (job : Job ) => {
  
  return apiRequest({
    method: HTTP.POST,
    path: `/jobs/create`,
    body: job,
  });
};

export const updateJob = async (jobUpdate:JobUpdate) => {
  const jobToUpdate = Object.fromEntries(
    Object.entries({
      userOfferingEmail: jobUpdate.userOfferingEmail,
      title: jobUpdate.title,
      description: jobUpdate.description,
      deadline_date: jobUpdate.deadlineDate,
    }).filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
  );
  return apiRequest({
    method: HTTP.PUT,
    path: `/jobs/update/${jobUpdate.jobId
    }`,
    body: jobToUpdate,
  });
};

export const getJobById = async (jobId :number ) => {
  return apiRequest({
    method: HTTP.GET,
    path: `/jobs/get/${jobId}`,
  }) ;
};

export const deleteJob = async (jobId :number) => {
  return apiRequest({
    method: HTTP.PUT,
    path: `/jobs/delete/${jobId}`,
  });
};

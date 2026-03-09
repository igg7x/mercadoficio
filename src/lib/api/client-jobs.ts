import { clientApiRequest } from "./request";
import { HTTP } from "@/lib/utils";
import { Page, Job, JobUpdate, JobStats, JobApplication } from "./types";

// Client-side API functions for React Query hooks
export const getJobsByUserCustomerClient = async (pageParam: number = 0): Promise<Page<Job>> => {
  return clientApiRequest({
    path: `/jobs/customer?page=${pageParam}&size=7`,
    method: HTTP.GET,
  });
};

export const getJobsByCategoriesClient = async (pageParam: number = 0): Promise<Page<Job>> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/jobs/all?page=${pageParam}&size=7`,
  });
};

export const getJobsStatsByUserCustomerClient = async (): Promise<JobStats> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/jobs/customer/stats`,
  });
};

export const getJobsHistorialByUserCustomerClient = async (pageParam: number = 0): Promise<Page<Job>> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/jobs/customer/historial?page=${pageParam}&size=6`,
  });
};

export const getHistorialForUserOfferingClient = async (pageParam: number): Promise<Page<Job>> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/jobs/offerings/historial?page=${pageParam}&size=8`,
  });
};

export const createJobClient = async (job: Job): Promise<Job> => {
  return clientApiRequest({
    method: HTTP.POST,
    path: `/jobs/create`,
    body: job,
  });
};

export const updateJobClient = async (jobUpdate: JobUpdate): Promise<Job> => {
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
  return clientApiRequest({
    method: HTTP.PUT,
    path: `/jobs/update/${jobUpdate.jobId}`,
    body: jobToUpdate,
  });
};

export const getJobByIdClient = async (jobId: string): Promise<Job> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/jobs/get/${jobId}`,
  });
};

export const deleteJobClient = async (jobId: number): Promise<void> => {
  return clientApiRequest({
    method: HTTP.PUT,
    path: `/jobs/delete/${jobId}`,
  });
};

export const getApplicantsByJobIdClient = async (jobId: string, pageParam: number = 0): Promise<Page<JobApplication>> => {
  return clientApiRequest({
    method: HTTP.GET,
    path: `/applications/job/${jobId}?page=${pageParam}&size=7`,
  });
};

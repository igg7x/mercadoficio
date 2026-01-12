import { useQuery, useQueryClient, useMutation, keepPreviousData } from "@tanstack/react-query";
import { useState  , useEffect } from "react";
import {
  getJobById,
  getJobsByCategories,
  getHistorialForUserOffering,
  deleteJob,
  updateJob,
} from "@/lib/api/jobs/jobs";
import { Job ,JobUpdate ,Page} from "@/lib/api/types";



interface UseJobsParams {
  func : (pageParam : number , params ?: any) => Promise<Page<Job>> ;
  key : string ;
  params ?: any ;
} 

export const useJobs = ({ func, key, params }: UseJobsParams) => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();

    const {
    data,
    isLoading,
    isError,
    isFetching,
    isPlaceholderData,
  } = useQuery<Page<Job>>({
    queryKey: [key, params, page],
    queryFn: ({ queryKey }) => func(page, queryKey[1]),
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  // Prefetch automático sin useEffect → usando queryOptions
  if (!isPlaceholderData && data && !data.last) {
    queryClient.prefetchQuery({
      queryKey: [key, params, page + 1],
      queryFn: () => func(page + 1, params),
    });
  }

  const nextPage = () => {
    if (!data?.last) setPage(prev => prev + 1);
  };

  const prevPage = () => {
    setPage(prev => Math.max(prev - 1, 0));
  };

  return {
    data,
    isError,
    isLoading,
    isFetching,
    isPlaceholderData,
    nextPage,
    prevPage,
    page,
  };
};


export const useJobsByID = (jobId : number ) => {
  const { data, isError, isLoading } = useQuery<Job>({
    queryKey: ["jobsByID", jobId],
    queryFn: () => getJobById(jobId),
    refetchOnWindowFocus: false,
  });

  return { data, isError, isLoading };
};

export const useJobsByCategories = () => {
  return useJobs({ func: getJobsByCategories, key: "getJobsByCategories" });
}



export const useHistorialJobsByUserOffering = () => {
  const [page, setPage] = useState(0);
  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    isError,
    isFetching,
    isPlaceholderData, // reemplazo de isPreviousData en v5
  } = useQuery<Page<Job>>({
    queryKey: ["getHistorialJobsByUserOffering", page],
    queryFn: () => getHistorialForUserOffering(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
    refetchOnWindowFocus: false,
  });

  // Prefetch de la siguiente página (igual al ejemplo oficial)
  useEffect(() => {
    if (!isPlaceholderData && data && !data.last) {
      queryClient.prefetchQuery({
        queryKey: ["getHistorialJobsByUserOffering", page + 1],
        queryFn: () => getHistorialForUserOffering(page + 1),
      });
    }
  }, [data, isPlaceholderData, page, queryClient]);

  const nextPage = () => {
    if (data?.last) return;
    setPage((old) => old + 1);
  };

  const prevPage = () => {
    setPage((old) => Math.max(old - 1, 0));
  };

  return {
    data,
    isError,
    isLoading,
    isFetching,        // útil para mostrar "loading..." de fondo
    isPlaceholderData, // reemplazo de isPreviousData
    nextPage,
    prevPage,
    page,
  };
};


// export const useDeleteJob = (jobId) => {
//   const navigate = useNavigate();
//   const deleteJobMutation = useMutation({
//     mutationFn: (jobId: number ) => deleteJob(jobId ),
//     mutationKey: ["deleteJob", jobId],
//   });

//   const handleDeleteJob = (jobId: number ) => {
//     if (deleteJobMutation.isLoading) return;
//     deleteJobMutation.mutate(jobId, {
//       onSuccess: () => {
//         // toast.success("Trabajo eliminado con exito", {
//         //   position: "bottom-center",
//         //   autoClose: 5000,
//         //   hideProgressBar: false,
//         //   closeOnClick: true,
//         //   pauseOnHover: true,
//         //   draggable: true,
//         //   progress: undefined,
//         //   theme: "dark",
//         // });
//       },
//       onError: () => {
//         // toast.error("Error al eliminar el trabajo", {
//         //   position: "bottom-center",
//         //   autoClose: 5000,
//         //   hideProgressBar: false,
//         //   closeOnClick: true,
//         //   pauseOnHover: true,
//         //   draggable: true,
//         //   progress: undefined,
//         //   theme: "dark",
//         // });
//       },
//       onSettled: () => {
//         navigate("/home/post-job");
//       },
//     });
//   };
//   return {
//     handleDeleteJob,
//     isLoadingDeleteMutation: deleteJobMutation.isLoading,
//   };
// };

export const useUpdateJob = (jobId : number ) => {
  const queryClient = useQueryClient();
  const updateJobMutation = useMutation({
    mutationFn: (jobDetails : JobUpdate) => updateJob(jobDetails),
    mutationKey: ["updateJob", jobId],
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["jobsByID", jobId],
      });
      // toast.success("Trabajo actualizado con exito", {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    },
    onError: () => {
      // toast.error("Error al actualizar el trabajo", {
      //   position: "bottom-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    },
  });

  const handleUpdateJob = (jobDetails : JobUpdate) => {
    console.log(jobDetails);
    updateJobMutation.mutate(jobDetails);
  };
  return {
    handleUpdateJob,
    isLoadingUpdateMutation: updateJobMutation.isPending,
    isSuccessUpdate: updateJobMutation.isSuccess,
  };
};

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Category , CategoryUpdate } from "@/lib/api/types";
import {
  getCategories,
  getCategoriesData,
  createCategory,
  updateCategoryStatus,
} from "@/lib/api/categories/categories";

export const useCategories = () => {
  const {
    data,
    isLoading,
    isError,
  } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn:  getCategories,
    refetchOnWindowFocus: false,
  });

  return {
    categories : data ?? [], 
    isLoading,
    isError,
  };
};

export const useCategoriesData = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categoriesData"],
    queryFn: getCategoriesData,
    refetchOnWindowFocus: false,
  });
  return {
    data,
    isLoading,
    isError,
  };
};

export const useCreateCategory = () => {
  const queryClient = useQueryClient();
  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    mutationKey: ["createCategory"],
    onError: (err) => {
    //   toast.error("Ha ocurrido un error al crear la categoría", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoriesData"] });
    //   toast.success("La categoría ha sido creada exitosamente", {
    //     position: "top-right",
    //     autoClose: 3000,
    //   });
    },
  });

  const handleCreateCategory = (category :Category ) => {
    createCategoryMutation.mutate(category);
  };
  return { handleCreateCategory, isLoading: createCategoryMutation.isPending};
};

export const useUpdateCategoryStatus = () => {
  const queryClient = useQueryClient();
  const updateCategoryStatusMutation = useMutation({
    mutationFn: updateCategoryStatus,
    mutationKey: ["updateCategoryStatus"],
    onError: (err) => {
    //   toast.error("Ha ocurrido un error al actualizar la categoría", {
    //     position: "bottom-right",
    //     autoClose: 3000,
    //   });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categoriesData"] });
    //   toast.success("La categoría ha sido actualizada exitosamente", {
    //     position: "bottom-right",
    //     autoClose: 3000,
    //   });
    },
  });

  const handleUpdateCategoryStatus = (category :CategoryUpdate ) => {
    updateCategoryStatusMutation.mutate(category);
  };
  return {
    handleUpdateCategoryStatus,
    isLoading: updateCategoryStatusMutation.isPending,
  };
};

"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  isLastPage: boolean;
  isFirstPage: boolean;
  totalPages?: number;
  pageType: "active" | "history"; // ✅ Nuevo: identificar qué paginación es
  onPrevPage?: () => void; // Optional callback for custom pagination
  onNextPage?: () => void; // Optional callback for custom pagination
}

const Pagination = ({
  currentPage,
  isLastPage,
  isFirstPage,
  totalPages,
  pageType,
  onPrevPage,
  onNextPage,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    
    // ✅ Usar el parámetro correcto según el tipo
    const paramName = pageType === "active" ? "activePage" : "historyPage";
    params.set(paramName, newPage.toString());
    
    router.push(`?${params.toString()}`);
  };

  const prevPage = () => {
    if (!isFirstPage) {
      if (onPrevPage) {
        onPrevPage();
      } else {
        handlePageChange(currentPage - 1);
      }
    }
  };

  const nextPage = () => {
    if (!isLastPage) {
      if (onNextPage) {
        onNextPage();
      } else {
        handlePageChange(currentPage + 1);
      }
    }
  };

  return (
    <div className="flex gap-2 max-[640px]:text-sm p-4 items-center">
      <button
        className={`bg-gray-200 flex gap-1 items-center justify-start p-1 rounded-md ${
          isFirstPage ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-300"
        }`}
        onClick={prevPage}
        disabled={isFirstPage}
      >
        <ChevronLeftIcon />
        Anterior
      </button>

      <div className="px-2">
        Página: {currentPage + 1}
        {totalPages && ` de ${totalPages}`}
      </div>

      <button
        className={`bg-gray-200 flex gap-1 items-center justify-start p-1 rounded-md ${
          isLastPage ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-300"
        }`}
        onClick={nextPage}
        disabled={isLastPage}
      >
        Siguiente
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
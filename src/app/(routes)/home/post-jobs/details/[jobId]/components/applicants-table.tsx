"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FilePenIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import { useModal } from "@/hooks/use-modal";
import { JobApplication } from "@/lib/api/types";
/* =======================
   Types
======================= */

interface Applicant {
  userOfferingEmail: string;
  applyDate: string;
}

interface ApplicantsTableProps {
  data: JobApplication[];
  jobId: string;
  job_status: boolean;
  updateJob: (payload: {
    jobId: string;
    userOfferingEmail: string;
  }) => void;
}

/* =======================
   Component
======================= */

const ApplicantsTable: React.FC<ApplicantsTableProps> = ({
  data,
  jobId,
  updateJob,
  job_status,
}) => {
  const { show, toogle } = useModal();
  const [selectedApplicant, setSelectedApplicant] = useState<string>("");

  const columns = useMemo(
    () => [
      {
        header: "Email",
        accessorKey: "userOfferingEmail",
        cell: (info: any) => info.getValue(),
      },
      {
        header: "Fecha Aplicación",
        accessorKey: "applyDate",
        cell: (info: any) => info.getValue(),
      },
      {
        header: "Acciones",
        id: "actions",
        cell: ({ row }: { row: any }) => {
          const user: Applicant = row.original;

          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <FilePenIcon />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                  onClick={() =>
                    navigator.clipboard.writeText(user.userOfferingEmail)
                  }
                >
                  Copiar Email
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                  <Link
                    href={`/home/profile/${user.userOfferingEmail}`}
                    className="hover:text-blue-400"
                  >
                    Ver Perfil
                  </Link>
                </DropdownMenuItem>

                {!job_status && (
                  <DropdownMenuItem
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedApplicant(user.userOfferingEmail);
                      toogle();
                    }}
                  >
                    Elegir Postulante
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          );
        },
      },
    ],
    [job_status, toogle]
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateJob({
      jobId,
      userOfferingEmail: selectedApplicant,
    });

    toogle();
  };

  return (
    <>
      {/* TABLE */}
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-xs sm:text-sm px-2 sm:px-4 py-2 sm:py-3">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-20 sm:h-24 text-center text-xs sm:text-sm">
                  No hay postulantes
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* DIALOG */}
      <Dialog open={show} onOpenChange={toogle}>
        <DialogContent className="w-[calc(100%-2rem)] sm:max-w-md px-4 sm:px-6 py-4 sm:py-6">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base sm:text-lg">
              <InfoIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              Elegir postulante
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm mt-2">
              Esta acción no se puede deshacer. El trabajo pasará al estado{" "}
              <span className="font-bold underline">cerrado</span>.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit}>
            <DialogFooter className="flex flex-col gap-2 sm:gap-3 mt-4 sm:mt-6">
              <Button type="submit" className="text-xs sm:text-sm w-full">Confirmar</Button>
              <Button type="button" variant="destructive" onClick={toogle} className="text-xs sm:text-sm w-full">
                Cancelar
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ApplicantsTable;

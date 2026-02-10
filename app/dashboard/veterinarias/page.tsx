"use client";

import { useState } from "react";
import VeterinaryForm from "@/components/dashboard/veterinary/VeterinaryForm";

interface Veterinaria {
  id: string;
  nombre: string;
  contacto: string;
  direccion: string;
  telefono: string;
  estado: "activo" | "inactivo";
  tipoSocio: "VIP" | "Estándar";
}

const veterinariasData: Veterinaria[] = [
  {
    id: "1",
    nombre: "Clínica Veterinaria Cumbayá",
    contacto: "Dr. Juan Pérez",
    direccion: "Av. Interoceánica, Cumbayá",
    telefono: "02-289-5555",
    estado: "activo",
    tipoSocio: "VIP",
  },
  {
    id: "2",
    nombre: "VetCare La Carolina",
    contacto: "Dra. María Paz",
    direccion: "Av. Amazonas y Eloy Alfaro",
    telefono: "02-245-1234",
    estado: "activo",
    tipoSocio: "Estándar",
  },
  {
    id: "3",
    nombre: "Mundo Animal Sur",
    contacto: "Ing. Carlos Ruiz",
    direccion: "Av. Maldonado, Quitumbe",
    telefono: "02-310-9876",
    estado: "inactivo",
    tipoSocio: "Estándar",
  },
  {
    id: "4",
    nombre: "Hospital Veterinario Quito",
    contacto: "Dra. Elena Gómez",
    direccion: "Av. 10 de Agosto y Orellana",
    telefono: "02-256-4321",
    estado: "activo",
    tipoSocio: "VIP",
  },
];

export default function Veterinarias() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroActual, setFiltroActual] = useState<
    "todos" | "activo" | "inactivo"
  >("todos");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const veterinariasFiltradas = veterinariasData.filter((vet) => {
    const cumpleFiltro =
      filtroActual === "todos" || vet.estado === filtroActual;
    const cumpleBusqueda =
      searchTerm === "" ||
      vet.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vet.direccion.toLowerCase().includes(searchTerm.toLowerCase());
    return cumpleFiltro && cumpleBusqueda;
  });

  return (
    <main className="flex-1 overflow-y-auto">
      <div className="max-w-300 mx-auto py-10 px-6">
        {/* <!-- Page Heading --> */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div>
            <h1 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-[-0.033em]">
              Administrar Veterinarias
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Gestión de socios veterinarios en el Distrito Metropolitano de
              Quito.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex min-w-45 cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-blue-700 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined mr-2">add</span>
            <span>Agregar Nueva Veterinaria</span>
          </button>
        </div>
        {/* <!-- Search & Filters Container --> */}
        <div className="bg-white dark:bg-[#1c222d] rounded-xl border border-[#dbdee6] dark:border-gray-800 p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* <!-- Search Bar --> */}
            <div className="flex-1 w-full">
              <label className="flex flex-col w-full h-12">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden border border-gray-200 dark:border-gray-700">
                  <div className="text-gray-400 flex bg-gray-50 dark:bg-gray-800 items-center justify-center px-4">
                    <span className="material-symbols-outlined">search</span>
                  </div>
                  <input
                    className="form-input flex w-full min-w-0 flex-1 border-none bg-gray-50 dark:bg-gray-800 text-[#111318] dark:text-white focus:ring-0 focus:outline-none placeholder:text-gray-400 px-4 pl-2 text-base font-normal leading-normal"
                    placeholder="Buscar por nombre o sector en Quito..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </label>
            </div>
            {/* <!-- Status Chips/Filters --> */}
            <div className="flex gap-3 flex-wrap">
              <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 hidden lg:block">
                Filtrar:
              </span>
              <button
                onClick={() => setFiltroActual("todos")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-4 ${
                  filtroActual === "todos"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-gray-300 hover:bg-gray-200 transition-colors"
                }`}
              >
                <span className="text-sm font-medium">Todos</span>
              </button>
              <button
                onClick={() => setFiltroActual("activo")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-4 ${
                  filtroActual === "activo"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-gray-300 hover:bg-gray-200 transition-colors"
                }`}
              >
                <span className="text-sm font-medium">Activo</span>
              </button>
              <button
                onClick={() => setFiltroActual("inactivo")}
                className={`flex h-10 items-center justify-center gap-x-2 rounded-lg px-4 ${
                  filtroActual === "inactivo"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-[#111318] dark:text-gray-300 hover:bg-gray-200 transition-colors"
                }`}
              >
                <span className="text-sm font-medium">Inactivo</span>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Table Container --> */}
        <div className="bg-white dark:bg-[#1c222d] rounded-xl border border-[#dbdee6] dark:border-gray-800 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 dark:bg-gray-800/50 border-b border-[#dbdee6] dark:border-gray-800">
                <tr>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                    Veterinaria
                  </th>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                    Contacto
                  </th>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                    Dirección (Quito)
                  </th>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                    Teléfono
                  </th>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal text-center">
                    Estado
                  </th>
                  <th className="px-6 py-4 text-[#111318] dark:text-white text-sm font-semibold leading-normal text-right">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {veterinariasFiltradas.map((vet) => (
                  <tr
                    key={vet.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <td className="px-6 py-5">
                      <div className="font-bold text-[#111318] dark:text-white">
                        {vet.nombre}
                      </div>
                      <div
                        className={`text-xs font-medium ${
                          vet.tipoSocio === "VIP"
                            ? "text-primary"
                            : "text-gray-400"
                        }`}
                      >
                        Socio {vet.tipoSocio}
                      </div>
                    </td>
                    <td className="px-6 py-5 text-gray-600 dark:text-gray-400 text-sm">
                      {vet.contacto}
                    </td>
                    <td className="px-6 py-5 text-gray-600 dark:text-gray-400 text-sm">
                      {vet.direccion}
                    </td>
                    <td className="px-6 py-5 text-gray-600 dark:text-gray-400 text-sm">
                      {vet.telefono}
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex justify-center">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                            vet.estado === "activo"
                              ? "bg-success/15 text-success"
                              : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-2 ${
                              vet.estado === "activo"
                                ? "bg-success"
                                : "bg-gray-400"
                            }`}
                          ></span>
                          {vet.estado === "activo" ? "Activo" : "Inactivo"}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex justify-end items-center gap-3">
                        <button
                          className="text-gray-400 hover:text-primary transition-colors"
                          title="Editar"
                        >
                          <span className="material-symbols-outlined">
                            edit
                          </span>
                        </button>
                        <button className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-lg hover:bg-primary hover:text-white transition-all">
                          Ver Perfil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* <!-- Pagination (Self-generated consistent component) --> */}
          <div className="px-6 py-4 border-t border-[#dbdee6] dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-800/30">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Mostrando {veterinariasFiltradas.length} de{" "}
              {veterinariasData.length} veterinarias
            </span>
            <div className="flex gap-2">
              <button className="flex items-center justify-center w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-gray-500 bg-white dark:bg-gray-800">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_left
                </span>
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white text-sm font-bold">
                1
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-gray-500 bg-white dark:bg-gray-800 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-gray-500 bg-white dark:bg-gray-800 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded border border-gray-200 dark:border-gray-700 text-gray-500 bg-white dark:bg-gray-800 hover:bg-gray-50 transition-colors">
                <span className="material-symbols-outlined text-[18px]">
                  chevron_right
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative bg-background-light dark:bg-background-dark rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-300 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <span className="material-symbols-outlined text-slate-600 dark:text-slate-400">
                close
              </span>
            </button>
            <VeterinaryForm onClose={() => setIsModalOpen(false)} />
          </div>
        </div>
      )}
    </main>
  );
}

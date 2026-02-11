import Link from "next/link";

import { clinicData } from "./clinicData";

export default function ComercioPage() {
  return (
    <div className="layout-container flex flex-col h-full">
      <main className="flex-1">
        {/* <!-- Hero Search Section --> */}
        <div className="bg-white dark:bg-[#1a262e] border-b border-[#e5e7eb] dark:border-[#2d3940]">
          <div className="max-w-7xl mx-auto px-10 py-12">
            <div className="flex flex-col items-center text-center gap-4 mb-8">
              <h1 className="text-[#111618] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] md:text-5xl">
                ¿Qué medicamento necesitas?
              </h1>
              <p className="text-[#607d8a] dark:text-gray-400 text-lg">
                Localiza stock y precios actualizados en las mejores clínicas de
                Quito
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-2 p-2 bg-background-light dark:bg-background-dark rounded-xl shadow-sm">
                <div className="flex flex-1 items-center gap-2 px-4 bg-white dark:bg-[#1a262e] rounded-lg border border-transparent focus-within:border-primary transition-all">
                  <span className="material-symbols-outlined text-[#607d8a]">
                    search
                  </span>
                  <input
                    className="w-full py-3 bg-transparent border-none focus:ring-0 text-[#111618] dark:text-white placeholder:text-[#607d8a]"
                    placeholder="Nombre del medicamento (ej: Amoxicilina 500mg)"
                  />
                </div>
                <div className="flex items-center gap-2 px-4 bg-white dark:bg-[#1a262e] rounded-lg border border-transparent min-w-50">
                  <span className="material-symbols-outlined text-[#607d8a]">
                    location_on
                  </span>
                  <select className="w-full py-3 bg-transparent border-none focus:ring-0 text-[#111618] dark:text-white text-sm font-medium">
                    <option>Todo Quito</option>
                    <option>Norte</option>
                    <option>Centro</option>
                    <option>Sur</option>
                    <option>Valles</option>
                  </select>
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center">
                  Buscar Ahora
                </button>
              </div>
              {/* <!-- Suggestions --> */}
              <div className="flex gap-3 mt-4 flex-wrap justify-center">
                <span className="text-xs font-bold text-[#607d8a] dark:text-gray-400 uppercase tracking-wider self-center mr-2">
                  Sugerencias:
                </span>
                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-primary/10 text-primary border border-primary/20 px-4 cursor-pointer hover:bg-primary/20 transition-all">
                  <p className="text-xs font-bold">Amoxicilina</p>
                </div>
                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111618] dark:text-white px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <p className="text-xs font-medium">Ivermectina</p>
                </div>
                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111618] dark:text-white px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <p className="text-xs font-medium">Meloxicam</p>
                </div>
                <div className="flex h-8 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#111618] dark:text-white px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                  <p className="text-xs font-medium">Doxiciclina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Content Area --> */}
        <div className="max-w-360 mx-auto px-6 py-8 flex gap-8">
          {/* <!-- Sidebar Filters --> */}
          <aside className="w-72 shrink-0 flex flex-col gap-8">
            <div className="bg-white dark:bg-[#1a262e] p-6 rounded-xl border border-[#e5e7eb] dark:border-[#2d3940]">
              <h3 className="text-[#111618] dark:text-white text-base font-bold mb-4">
                Ordenar por
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    defaultChecked
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    name="sort"
                    type="radio"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200 group-hover:text-primary transition-colors">
                    Menor Distancia
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    name="sort"
                    type="radio"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200 group-hover:text-primary transition-colors">
                    Menor Precio
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input
                    className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    name="sort"
                    type="radio"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200 group-hover:text-primary transition-colors">
                    Mayor Disponibilidad
                  </span>
                </label>
              </div>
              <hr className="my-6 border-[#e5e7eb] dark:border-[#2d3940]" />
              <h3 className="text-[#111618] dark:text-white text-base font-bold mb-4">
                Zonas de Quito
              </h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    defaultChecked
                    className="rounded text-primary focus:ring-primary border-gray-300"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200">
                    Norte
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    className="rounded text-primary focus:ring-primary border-gray-300"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200">
                    Centro
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    className="rounded text-primary focus:ring-primary border-gray-300"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200">
                    Sur
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    defaultChecked
                    className="rounded text-primary focus:ring-primary border-gray-300"
                    type="checkbox"
                  />
                  <span className="text-sm font-medium text-[#111618] dark:text-gray-200">
                    Valles (Cumbayá, Tumbaco)
                  </span>
                </label>
              </div>
              <hr className="my-6 border-[#e5e7eb] dark:border-[#2d3940]" />
              <div className="flex flex-col gap-3">
                <p className="text-[#111618] dark:text-white text-base font-bold">
                  Rango de Precio
                </p>
                <div className="flex h-9.5 w-full pt-1.5 mt-2">
                  <div className="flex h-1.5 w-full rounded-sm bg-gray-200 dark:bg-gray-700 relative">
                    <div className="absolute left-[10%] right-[40%] h-full bg-primary"></div>
                    <div className="absolute left-[10%] -top-2">
                      <div className="size-4 rounded-full bg-primary border-2 border-white shadow-md"></div>
                      <p className="text-[#111618] dark:text-white text-[10px] font-bold mt-3">
                        $2.50
                      </p>
                    </div>
                    <div className="absolute right-[40%] -top-2">
                      <div className="size-4 rounded-full bg-primary border-2 border-white shadow-md"></div>
                      <p className="text-[#111618] dark:text-white text-[10px] font-bold mt-3">
                        $15.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
          {/* <!-- Main View Split --> */}
          <div className="flex-1 flex gap-6 min-h-175">
            {/* <!-- Results List --> */}
            <div className="flex-1 flex flex-col gap-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold">
                  8 resultados para "Amoxicilina"
                </h2>
                <span className="text-sm text-[#607d8a]">
                  Viendo locales abiertos ahora
                </span>
              </div>
              {clinicData.map((clinic) => {
                const statusClass =
                  clinic.statusTone === "secondary"
                    ? "bg-secondary/10 text-secondary"
                    : "bg-orange-100 text-orange-600";
                const stockIconClass =
                  clinic.stockTone === "secondary"
                    ? "text-secondary"
                    : "text-orange-500";
                const cardBorderClass =
                  clinic.statusTone === "secondary"
                    ? "border-l-4 border-l-secondary"
                    : "";

                return (
                  <Link
                    key={clinic.id}
                    className={`bg-white dark:bg-[#1a262e] border border-[#e5e7eb] dark:border-[#2d3940] rounded-xl overflow-hidden hover:shadow-lg transition-all ${cardBorderClass}`}
                    href={clinic.url}
                  >
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-lg">{clinic.name}</h3>
                            <span
                              className={`${statusClass} text-[10px] font-bold px-2 py-0.5 rounded-full uppercase`}
                            >
                              {clinic.statusLabel}
                            </span>
                          </div>
                          <p className="text-sm text-[#607d8a] flex items-center gap-1">
                            <span className="material-symbols-outlined text-sm">
                              location_on
                            </span>{" "}
                            {clinic.address}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-black text-[#111618] dark:text-white">
                            {clinic.price}
                          </p>
                          <p className="text-xs text-[#607d8a]">
                            Precio por unidad
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6 mb-4">
                        <div className="flex items-center gap-1 text-sm">
                          <span className="material-symbols-outlined text-primary text-base">
                            directions_car
                          </span>
                          <span className="font-bold">
                            {clinic.distanceKm} km
                          </span>
                          <span className="text-[#607d8a]">de ti</span>
                        </div>
                        <div className="flex items-center gap-1 text-sm">
                          <span
                            className={`material-symbols-outlined ${stockIconClass} text-base filled-icon`}
                          >
                            inventory_2
                          </span>
                          <span className="font-bold">{clinic.stockLabel}</span>
                          <span className="text-[#607d8a]">en stock</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-primary/10 text-primary font-bold py-2 rounded-lg hover:bg-primary/20 transition-all text-sm">
                          <span className="material-symbols-outlined text-sm">
                            map
                          </span>{" "}
                          Ver mapa
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-secondary text-white font-bold py-2 rounded-lg hover:bg-secondary/90 transition-all text-sm">
                          <span className="material-symbols-outlined text-sm">
                            call
                          </span>{" "}
                          Llamar ahora
                        </button>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            {/* <!-- Map Section --> */}
            <div className="w-112.5 bg-white dark:bg-[#1a262e] rounded-xl border border-[#e5e7eb] dark:border-[#2d3940] overflow-hidden sticky top-24 h-[calc(100vh-140px)]">
              <div className="absolute top-4 left-4 z-10 bg-white dark:bg-[#1a262e] p-2 rounded-lg shadow-md border border-[#e5e7eb] dark:border-[#2d3940] flex items-center gap-2">
                <span className="material-symbols-outlined text-primary filled-icon">
                  my_location
                </span>
                <span className="text-xs font-bold">
                  Tu ubicación: La Carolina
                </span>
              </div>
              <div
                className="w-full h-full relative"
                data-location="Quito, Ecuador"
                style={{
                  backgroundColor: "#e5e7eb",
                  backgroundImage:
                    "radial-gradient(#d1d5db 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              >
                {/* <!-- Mock Map Pin (User) --> */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div className="size-6 bg-blue-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                </div>
                {/* <!-- Mock Clinic Pins --> */}
                <div className="absolute top-[40%] left-[45%] group cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-4xl filled-icon drop-shadow-md">
                    location_on
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-white dark:bg-[#1a262e] px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap border border-gray-200">
                    La Mariscal
                  </div>
                </div>
                <div className="absolute top-[60%] left-[70%] group cursor-pointer">
                  <span className="material-symbols-outlined text-secondary text-4xl filled-icon drop-shadow-md">
                    location_on
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-white dark:bg-[#1a262e] px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap border border-gray-200">
                    Vet Cumbayá
                  </div>
                </div>
                <div className="absolute top-[25%] left-[55%] group cursor-pointer">
                  <span className="material-symbols-outlined text-primary text-4xl filled-icon drop-shadow-md">
                    location_on
                  </span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-white dark:bg-[#1a262e] px-2 py-1 rounded text-[10px] font-bold whitespace-nowrap border border-gray-200">
                    Hospital del Norte
                  </div>
                </div>
                {/* <!-- Map Controls --> */}
                <div className="absolute bottom-4 right-4 flex flex-col gap-2">
                  <button className="size-10 bg-white dark:bg-[#1a262e] rounded-lg shadow-md flex items-center justify-center font-bold text-lg">
                    +
                  </button>
                  <button className="size-10 bg-white dark:bg-[#1a262e] rounded-lg shadow-md flex items-center justify-center font-bold text-lg">
                    -
                  </button>
                </div>
                <img
                  alt=""
                  className="w-full h-full object-cover opacity-50 grayscale"
                  data-alt="Map of Quito showing location pins"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg3CVjp73Dsmce2Yj8Q1-LWcfhWFOkYPGkU7nICwtla0HDOpsm4AdemzVngecg1oE8hjoeq0tyuWuYCChxk6WHjWy2XT0gGVoFsF3relXElvEf3jAnCmHjsJz0HfQdTxf6A_oMktaLs-_7zN1ofh46WFC5jsSjIwyT8c40Zc7AIxXVgIv682xExqF6AteJE7WuYbtzF1xlQVcx1khmhL3zNSjhkeNEUZyNOEi_n7k9LYf28uuMKx6kXQLP0wjypdclrOlcvSVx1So"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

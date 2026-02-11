export default function ClinicPage() {
  return (
    <main className="flex-1 flex flex-col items-center">
      <div className="w-full max-w-300 flex flex-col gap-6 p-4 lg:p-10">
        <div className="relative w-full rounded-xl overflow-hidden bg-white dark:bg-background-dark shadow-sm">
          <div
            className="w-full bg-center bg-no-repeat bg-cover min-h-64 lg:min-h-80"
            data-alt="Modern veterinary clinic exterior with bright signage"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCFqSxPfC4TV8EpvG7bhr6ylJCc2czClcyBWaLF5fDZEpi1zzoYo5FdyzQJrDT00FprS00pIpoyTjLEPzmEaNMYeJzVqLtCm-q4jtIaZ9uCiSpTvaBlWs7IjDGSonQaU9aiCQQMgBxvpeb-L_DXn_S45KDsMTjiQucXp-ut8MidUjS-r5YHygU_EUNez6t7rd_95xDt3tlqb_OGKGAcOD39PJdcNF4cipeG9aRRVeiOAPZNCMXDyY16IBndM1EQq02znscvcruMInY")',
            }}
          ></div>
          <div className="flex flex-col md:flex-row p-6 gap-6 items-start justify-between">
            <div className="flex gap-6">
              <div className="bg-white p-1 rounded-xl -mt-20 shadow-lg">
                <div
                  className="bg-primary aspect-square bg-cover rounded-lg size-32 flex items-center justify-center text-white"
                  data-alt="Veterinary clinic logo with paw print"
                >
                  <span className="material-symbols-outlined text-6xl!">
                    pets
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-[#111618] dark:text-white text-3xl font-bold tracking-tight">
                  Veterinaria La Mariscal
                </h1>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex items-center text-green-600 font-semibold text-sm">
                    <span className="size-2 bg-green-600 rounded-full mr-2"></span>
                    Abierto ahora
                  </span>
                  <span className="text-[#607d8a]">•</span>
                  <span className="text-[#607d8a] text-sm">Quito, Ecuador</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <button className="flex-1 md:flex-none min-w-35 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-background-light dark:bg-gray-800 text-[#111618] dark:text-white text-sm font-bold border border-[#dbe2e6] dark:border-gray-700">
                <span className="truncate">Pedir Cita</span>
              </button>
              <button className="flex-1 md:flex-none min-w-35 cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-green-600 text-white text-sm font-bold">
                <span className="truncate">Cómo llegar</span>
              </button>
            </div>
          </div>
          <div className="px-6 pb-6 border-t border-[#f0f3f5] dark:border-gray-800">
            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-[#111618] dark:text-white text-2xl font-black">
                    4.8
                  </p>
                  <div className="flex gap-0.5 text-yellow-400">
                    <span className="material-symbols-outlined material-fill text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined material-fill text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined material-fill text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined material-fill text-xl">
                      star
                    </span>
                    <span className="material-symbols-outlined text-xl">
                      star_half
                    </span>
                  </div>
                </div>
                <p className="text-[#607d8a] text-sm font-medium">
                  120 reseñas verificadas
                </p>
              </div>
              <div className="flex-1 max-w-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs w-2">5</span>
                  <div className="flex-1 h-1.5 bg-[#dbe2e6] dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs w-2">4</span>
                  <div className="flex-1 h-1.5 bg-[#dbe2e6] dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="bg-primary h-full"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">
                  info
                </span>
                Acerca de
              </h3>
              <p className="text-[#607d8a] dark:text-gray-300 leading-relaxed">
                En Veterinaria La Mariscal, nos dedicamos al cuidado integral de
                tus mascotas con más de 15 años de experiencia en Quito.
                Contamos con tecnología de punta y un equipo de profesionales
                apasionados por el bienestar animal. Ofrecemos servicios médicos
                preventivos, especializados y de emergencia.
              </p>
            </div>
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-4">Servicios</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col items-center p-4 rounded-xl bg-background-light dark:bg-gray-800 text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">
                    medical_services
                  </span>
                  <span className="text-sm font-bold">Consulta</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-background-light dark:bg-gray-800 text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">
                    surgical
                  </span>
                  <span className="text-sm font-bold">Cirugía</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-background-light dark:bg-gray-800 text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">
                    biotech
                  </span>
                  <span className="text-sm font-bold">Laboratorio</span>
                </div>
                <div className="flex flex-col items-center p-4 rounded-xl bg-background-light dark:bg-gray-800 text-center">
                  <span className="material-symbols-outlined text-primary text-3xl mb-2">
                    medication
                  </span>
                  <span className="text-sm font-bold">Farmacia</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-4">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">
                      location_on
                    </span>
                    <div>
                      <p className="font-bold text-sm">Dirección</p>
                      <p className="text-sm text-[#607d8a] dark:text-gray-400">
                        Av. Mariscal Foch y Amazonas, Quito
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <span className="material-symbols-outlined text-primary">
                      call
                    </span>
                    <div>
                      <p className="font-bold text-sm">Teléfono</p>
                      <a
                        className="text-sm text-primary hover:underline"
                        href="tel:+59399999999"
                      >
                        +593 2-255-0000
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <a className="text-[#607d8a] hover:text-primary" href="#">
                      <span className="material-symbols-outlined">public</span>
                    </a>
                    <a className="text-[#607d8a] hover:text-primary" href="#">
                      <span className="material-symbols-outlined">share</span>
                    </a>
                    <a className="text-[#607d8a] hover:text-primary" href="#">
                      <span className="material-symbols-outlined">mail</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-bold mb-4">Horarios</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#607d8a]">Lunes - Viernes</span>
                    <span className="font-medium">08:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#607d8a]">Sábado</span>
                    <span className="font-medium">09:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#607d8a]">Domingo</span>
                    <span className="font-medium">
                      Cerrado (Solo Emergencias)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-white dark:bg-background-dark p-6 rounded-xl shadow-sm flex flex-col h-fit">
              <h3 className="text-lg font-bold mb-4 flex items-center justify-between">
                <span>Medicamentos</span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                  Stock disponible
                </span>
              </h3>
              <div className="relative mb-4">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                  search
                </span>
                <input
                  className="w-full pl-9 pr-4 py-2 bg-background-light dark:bg-gray-800 border-none rounded-lg text-sm focus:ring-1 focus:ring-primary"
                  placeholder="Buscar medicamento..."
                  type="text"
                />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 border border-[#f0f3f5] dark:border-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-bold">Amoxicilina 250mg</p>
                    <p className="text-[10px] text-[#607d8a]">
                      Antibiótico • Suspensión
                    </p>
                  </div>
                  <p className="text-sm font-bold text-primary">$12.50</p>
                </div>
                <div className="flex justify-between items-center p-3 border border-[#f0f3f5] dark:border-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-bold">Ivermectina 1%</p>
                    <p className="text-[10px] text-[#607d8a]">
                      Antiparasitario • Oral
                    </p>
                  </div>
                  <p className="text-sm font-bold text-primary">$8.75</p>
                </div>
                <div className="flex justify-between items-center p-3 border border-[#f0f3f5] dark:border-gray-800 rounded-lg">
                  <div>
                    <p className="text-sm font-bold">Bravecto Perro</p>
                    <p className="text-[10px] text-[#607d8a]">
                      Pulgas y Garrapatas
                    </p>
                  </div>
                  <p className="text-sm font-bold text-primary">$45.00</p>
                </div>
              </div>
              <button className="mt-4 text-primary text-sm font-bold hover:underline">
                Ver catálogo completo
              </button>
            </div>
            <div className="bg-white dark:bg-background-dark p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-bold mb-3 px-2">Ubicación</h3>
              <div
                className="rounded-lg overflow-hidden h-48 bg-gray-200 relative"
                data-location="Quito, Ecuador"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Map of La Mariscal district in Quito"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1OzNtqqor4nZgL4kpEjh9RvK_s1evquXYaqpQA56k_oKvwjyWD36LL5y1N-b7DahuZdMXwgme3R3iFpdVpbfPBB9Mt1gR3-X6lnDUmhvCLkCBmSgrUD2zg_syBIW6EEHtBDUuwrpbBvj41ynl7C7RkF8dWoSLvyXDtQMKNvFCmuQGGZIqNLj4bbHnpQj0UxburQIu9a75-xJkK162rr_whaZM1loF4hBBUTtryn5cvtE2WD-6S3WU5kK2lJ_DpforceJKIhMYpUU')",
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-500 text-4xl material-fill">
                    location_on
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#607d8a] mt-3 px-2">
                Sector La Mariscal, a dos cuadras de la Plaza Foch.
              </p>
            </div>
            <div className="bg-primary/5 dark:bg-primary/10 p-6 rounded-xl border border-primary/20">
              <h4 className="font-bold text-primary mb-2">¿Emergencia?</h4>
              <p className="text-sm text-[#111618] dark:text-gray-300 mb-4">
                Estamos disponibles para emergencias críticas 24/7. Llámanos
                inmediatamente.
              </p>
              <button className="w-full bg-primary text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">emergency</span>
                Llamar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

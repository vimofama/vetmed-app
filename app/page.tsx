export default function Home() {
  // TODO: Componetizar
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-[#111318] dark:text-white transition-colors duration-300">
      <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#dbdee6] dark:border-b-gray-800 px-10 py-4 bg-white dark:bg-background-dark">
            <div className="flex items-center gap-4 text-primary">
              <div className="size-8">
                <svg
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z"
                    fillRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col">
                <h2 className="text-[#111318] dark:text-white text-xl font-bold leading-tight tracking-[-0.015em]">
                  VetMed Connect
                </h2>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Plataforma B2B de Gestión de Medicamentos Veterinarios
                </span>
              </div>
            </div>
            <div className="flex flex-1 justify-end gap-6 items-center">
              <div className="hidden md:flex items-center gap-6">
                <a
                  className="text-[#111318] dark:text-white text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  Beneficios
                </a>
                <a
                  className="text-[#111318] dark:text-white text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  Roles
                </a>
                <a
                  className="text-[#111318] dark:text-white text-sm font-medium hover:text-primary transition-colors"
                  href="#"
                >
                  Cómo funciona
                </a>
              </div>
              <div className="flex items-center gap-3 bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold tracking-wider">
                  DEMO INTERACTIVO
                </span>
              </div>
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary/20"
                data-alt="Avatar of a professional veterinarian"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFc9fEPM-QSaUkgHMKodzP5xQrt7-1X-uaH4fYoviOUG1aNBeMWT5VTr6ToeC5c5Nclj_DoVuFlVndf-e-abzvtOPPcePfEEo7W5pGU-W0wcA1y4QDfK1mbf9X-Ri3ofa3yw1RkDlXPv3cJo_CI4ApNiTxXNsuIg8DOVB26S8MNp7T77PofuKcDpNuq7k6eXJ3PWnJf4vicYOW6gflZOj1Ul5nwW-Y4ACy6Irr8HjeOD2k6OkDnWzDw7N0dsh_R4qDZZiqosAu05s")',
                }}
              ></div>
            </div>
          </header>
          <main className="flex-1">
            <section className="max-w-300 mx-auto px-6 py-12 md:py-20">
              <div className="@container">
                <div className="flex flex-col gap-8 @[864px]:flex-row items-center">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl shadow-2xl border-4 border-white dark:border-gray-800"
                    data-alt="Modern veterinary clinic laboratory in Quito"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLDb19wwFeo8kNXZDLgDcLcb-p_GXRu9pSus1xZ9vpCADmUHdWUWY6Bje5fcNiC8OOKuh6SauZbuKtSOy0nddVqbS-8abnCDKMsBT1z07OZ3WhsBgjVTkWn99ubzaytNp1chZC6ob0z6kT3JAQz_NKf_aLpzp9w_E7juNDcAuExYdiH_2PObVfOxaxrHp03JN-7DPWddB_WI9aC2lQ-t0CiA2d1WmzhBHNADZ2it6ve4D2y6amR5Hpp6DlMaGW7qhWC-10lJDPmeg")',
                    }}
                  ></div>
                  <div className="flex flex-col gap-8 @[864px]:w-full">
                    <div className="flex flex-col gap-4">
                      <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl">
                        Conectamos Distribuidores con Veterinarias de Forma{" "}
                        <span className="text-primary italic">Inteligente</span>
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-125">
                        La plataforma B2B líder en Quito para la gestión
                        eficiente de medicamentos. Automatiza pedidos, controla
                        tu stock y localiza productos en tiempo real.
                      </p>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex min-w-45 cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold shadow-lg shadow-primary/30 hover:bg-primary/90 transition-all active:scale-95">
                        Explorar Demo
                      </button>
                      <button className="flex items-center justify-center rounded-lg h-14 px-8 border-2 border-primary text-primary text-lg font-bold hover:bg-primary/5 transition-all">
                        Ver Video
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="max-w-300 mx-auto px-6 py-12">
              <div className="flex flex-col items-center mb-10">
                <h2 className="text-[#111318] dark:text-white text-3xl font-extrabold tracking-tight">
                  Elige tu rol
                </h2>
                <div className="h-1.5 w-20 bg-primary mt-3 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="group flex flex-col gap-6 rounded-xl border-2 border-solid border-[#dbdee6] dark:border-gray-800 bg-white dark:bg-background-dark p-8 hover:border-primary hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="size-14 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-3xl!">
                          factory
                        </span>
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-wider rounded-lg bg-primary px-3 py-1">
                        Distribuidor
                      </span>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-[#111318] dark:text-white text-xl font-bold">
                        Panel Logístico
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-primary text-4xl font-black">
                          47
                        </span>
                        <span className="text-gray-500 text-sm font-bold uppercase">
                          Productos
                        </span>
                      </div>
                      <p className="text-red-500 text-sm font-bold mt-1">
                        8 Alertas de Stock Crítico
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-4 border-y border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary text-[20px]!">
                        check_circle
                      </span>
                      Gestión centralizada de catálogo
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-primary text-[20px]!">
                        check_circle
                      </span>
                      Inventario en tiempo real
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300 font-bold">
                      <span className="material-symbols-outlined text-primary text-[20px]!">
                        check_circle
                      </span>
                      23 veterinarias conectadas
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-12 bg-primary text-white font-bold hover:brightness-110 transition-all">
                    Acceder como Distribuidor
                  </button>
                </div>
                <div className="group flex flex-col gap-6 rounded-xl border-2 border-solid border-[#dbdee6] dark:border-gray-800 bg-white dark:bg-background-dark p-8 hover:border-[#059669] hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="size-14 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#059669]">
                        <span className="material-symbols-outlined text-3xl!">
                          stethoscope
                        </span>
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-wider rounded-lg bg-[#059669] px-3 py-1">
                        Veterinaria
                      </span>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-[#111318] dark:text-white text-xl font-bold">
                        Veterinaria La Mariscal
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-[#059669] text-4xl font-black">
                          35
                        </span>
                        <span className="text-gray-500 text-sm font-bold uppercase">
                          En Stock
                        </span>
                      </div>
                      <p className="text-[#059669] text-sm font-bold mt-1">
                        Ingresos hoy: $247.50
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-4 border-y border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#059669] text-[20px]!">
                        check_circle
                      </span>
                      Gestión automatizada de stock
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#059669] text-[20px]!">
                        check_circle
                      </span>
                      Control de ventas POS
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#059669] text-[20px]!">
                        check_circle
                      </span>
                      Pedidos directos a distribuidores
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-12 bg-[#059669] text-white font-bold hover:brightness-110 transition-all">
                    Acceder como Veterinaria
                  </button>
                </div>
                <div className="group flex flex-col gap-6 rounded-xl border-2 border-solid border-[#dbdee6] dark:border-gray-800 bg-white dark:bg-background-dark p-8 hover:border-[#0ea5e9] hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <div className="size-14 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center text-[#0ea5e9]">
                        <span className="material-symbols-outlined text-3xl!">
                          search
                        </span>
                      </div>
                      <span className="text-white text-xs font-bold uppercase tracking-wider rounded-lg bg-[#0ea5e9] px-3 py-1">
                        Usuario
                      </span>
                    </div>
                    <div className="mt-2">
                      <h3 className="text-[#111318] dark:text-white text-xl font-bold">
                        Público General
                      </h3>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-[#0ea5e9] text-4xl font-black">
                          150+
                        </span>
                        <span className="text-gray-500 text-sm font-bold uppercase">
                          Medicinas
                        </span>
                      </div>
                      <p className="text-[#0ea5e9] text-sm font-bold mt-1">
                        23 veterinarias en Quito
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 py-4 border-y border-gray-100 dark:border-gray-800">
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#0ea5e9] text-[20px]!">
                        check_circle
                      </span>
                      Búsqueda rápida de medicinas
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#0ea5e9] text-[20px]!">
                        check_circle
                      </span>
                      Localización de clínicas cercanas
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                      <span className="material-symbols-outlined text-[#0ea5e9] text-[20px]!">
                        check_circle
                      </span>
                      Consulta de disponibilidad real
                    </div>
                  </div>
                  <button className="w-full flex items-center justify-center rounded-lg h-12 bg-[#0ea5e9] text-white font-bold hover:brightness-110 transition-all">
                    Buscar Productos
                  </button>
                </div>
              </div>
            </section>
            <section className="bg-white dark:bg-background-dark py-16 px-6">
              <div className="max-w-250 mx-auto text-center">
                <h2 className="text-[#111318] dark:text-white text-3xl font-extrabold mb-12">
                  Cómo funciona
                </h2>
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4">
                  <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-1/3">
                    <div className="size-20 rounded-full bg-primary flex items-center justify-center text-white shadow-xl">
                      <span className="material-symbols-outlined text-4xl!">
                        local_shipping
                      </span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">
                      1. Distribuidor
                    </h4>
                    <p className="text-sm text-gray-500 max-w-50">
                      Carga stock y gestiona pedidos de veterinarias locales.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-10 left-[25%] right-[25%] h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>
                  <span className="material-symbols-outlined md:hidden text-primary/30">
                    arrow_downward
                  </span>
                  <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-1/3">
                    <div className="size-20 rounded-full bg-[#059669] flex items-center justify-center text-white shadow-xl">
                      <span className="material-symbols-outlined text-4xl!">
                        pets
                      </span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">
                      2. Veterinaria
                    </h4>
                    <p className="text-sm text-gray-500 max-w-50">
                      Recibe productos y registra ventas de pacientes.
                    </p>
                  </div>
                  <div className="hidden md:block absolute top-10 right-[33.33%] left-[66.66%] h-0.5 border-t-2 border-dashed border-primary/30 z-0"></div>
                  <span className="material-symbols-outlined md:hidden text-primary/30">
                    arrow_downward
                  </span>
                  <div className="flex flex-col items-center gap-4 relative z-10 w-full md:w-1/3">
                    <div className="size-20 rounded-full bg-[#0ea5e9] flex items-center justify-center text-white shadow-xl">
                      <span className="material-symbols-outlined text-4xl!">
                        person_search
                      </span>
                    </div>
                    <h4 className="font-bold text-lg dark:text-white">
                      3. Público
                    </h4>
                    <p className="text-sm text-gray-500 max-w-50">
                      Encuentra la medicina necesaria en segundos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <footer className="bg-gray-100 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 py-12 px-10">
            <div className="max-w-300 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-bold text-lg">
                  <span className="material-symbols-outlined">
                    health_and_safety
                  </span>
                  VetMed Connect
                </div>
                <p className="text-gray-500 text-sm">
                  © 2024 Demo desarrollado para Quito, Ecuador.
                </p>
              </div>
              <div className="flex gap-8 text-sm text-gray-500 font-medium">
                <a className="hover:text-primary" href="#">
                  Términos
                </a>
                <a className="hover:text-primary" href="#">
                  Privacidad
                </a>
                <a className="hover:text-primary" href="#">
                  Contacto
                </a>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 max-w-75">
                <p className="text-[10px] text-gray-400 leading-tight uppercase font-bold tracking-widest mb-1">
                  Nota legal
                </p>
                <p className="text-[11px] text-gray-500 leading-normal italic">
                  Esta es una versión de demostración. Los datos presentados son
                  ficticios y solo para fines de visualización de la interfaz.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}


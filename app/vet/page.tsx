export default function VetPage() {
  return (
    <main className="max-w-360 mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* <!-- Left Column: Inventory Management --> */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="bg-white dark:bg-[#1a2e28] rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#dbe6e3] dark:border-[#2d4a41] flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h2 className="text-2xl font-bold">Gestión de Inventario</h2>
              <div className="flex gap-2">
                <div className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-lg cursor-pointer">
                  Todos
                </div>
                <div className="bg-[#f0f5f3] dark:bg-[#233b34] text-[#111816] dark:text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#e0ece8] cursor-pointer transition-colors">
                  Stock bajo
                </div>
                <div className="bg-[#f0f5f3] dark:bg-[#233b34] text-[#111816] dark:text-white text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-[#e0ece8] cursor-pointer transition-colors">
                  Próximos a vencer
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-background-light dark:bg-[#233b34]">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#5f8c7d]">
                      Producto
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#5f8c7d]">
                      Proveedor
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#5f8c7d]">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#5f8c7d]">
                      Precio
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-[#5f8c7d]">
                      Vencimiento
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#dbe6e3] dark:divide-[#2d4a41]">
                  <tr className="hover:bg-background-light/50 dark:hover:bg-[#233b34]/30">
                    <td className="px-6 py-4 font-semibold">Amoxicilina</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      FarmaVet
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#dbe6e3] dark:bg-[#2d4a41] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">80</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">$12.50</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      2025-05-15
                    </td>
                  </tr>
                  <tr className="hover:bg-background-light/50 dark:hover:bg-[#233b34]/30">
                    <td className="px-6 py-4 font-semibold text-[#e53e3e]">
                      Ivermectina 1%
                    </td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      FarmaVet
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#dbe6e3] dark:bg-[#2d4a41] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-[#e53e3e] h-full"
                            style={{ width: "15%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-[#e53e3e]">
                          15
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">$8.00</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      2024-12-10
                    </td>
                  </tr>
                  <tr className="hover:bg-background-light/50 dark:hover:bg-[#233b34]/30">
                    <td className="px-6 py-4 font-semibold">Meloxicam</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      FarmaVet
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#dbe6e3] dark:bg-[#2d4a41] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: "45%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">45</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">$15.30</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      2025-03-20
                    </td>
                  </tr>
                  <tr className="hover:bg-background-light/50 dark:hover:bg-[#233b34]/30">
                    <td className="px-6 py-4 font-semibold">Cefalexina</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      FarmaVet
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#dbe6e3] dark:bg-[#2d4a41] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: "60%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">60</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">$22.00</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      2025-08-01
                    </td>
                  </tr>
                  <tr className="hover:bg-background-light/50 dark:hover:bg-[#233b34]/30">
                    <td className="px-6 py-4 font-semibold">Drontal Plus</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      FarmaVet
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-24 bg-[#dbe6e3] dark:bg-[#2d4a41] h-1.5 rounded-full overflow-hidden">
                          <div
                            className="bg-primary h-full"
                            style={{ width: "90%" }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium">90</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium">$18.00</td>
                    <td className="px-6 py-4 text-sm text-[#5f8c7d]">
                      2026-01-10
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <!-- Day Summary --> */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-[#1a2e28] p-6 rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] shadow-sm">
              <p className="text-xs font-bold text-[#5f8c7d] uppercase tracking-wider mb-2">
                Ventas Hoy
              </p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">08</span>
                <span className="text-primary text-sm font-medium flex items-center mb-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  +2
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2e28] p-6 rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] shadow-sm">
              <p className="text-xs font-bold text-[#5f8c7d] uppercase tracking-wider mb-2">
                Ingresos Totales
              </p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">$247.50</span>
                <span className="text-primary text-sm font-medium flex items-center mb-1">
                  <span className="material-symbols-outlined text-sm">
                    trending_up
                  </span>
                  +12%
                </span>
              </div>
            </div>
            <div className="bg-white dark:bg-[#1a2e28] p-6 rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] shadow-sm">
              <p className="text-xs font-bold text-[#5f8c7d] uppercase tracking-wider mb-2">
                Unidades Vendidas
              </p>
              <div className="flex items-end gap-2">
                <span className="text-3xl font-bold">23</span>
                <span className="text-[#5f8c7d] text-sm font-medium flex items-center mb-1">
                  Medicina
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Right Column: Realizar Venta & Alerts --> */}
        <div className="xl:col-span-4 flex flex-col gap-6">
          {/* <!-- Sale Form --> */}
          <div className="bg-white dark:bg-[#1a2e28] rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] shadow-sm overflow-hidden">
            <div className="p-6 border-b border-[#dbe6e3] dark:border-[#2d4a41]">
              <h3 className="text-xl font-bold">Realizar Venta</h3>
            </div>
            <form className="p-6 space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold">Producto</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#5f8c7d] text-lg">
                    search
                  </span>
                  <input
                    className="w-full pl-10 pr-4 py-2 bg-background-light dark:bg-[#233b34] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
                    placeholder="Buscar medicamento..."
                    type="text"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Cantidad</label>
                  <input
                    className="w-full px-4 py-2 bg-background-light dark:bg-[#233b34] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
                    type="number"
                    defaultValue="1"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold">Precio Un.</label>
                  <input
                    className="w-full px-4 py-2 bg-background-light/50 dark:bg-[#233b34]/50 border-none rounded-lg text-sm italic"
                    disabled
                    type="text"
                    value="$ 0.00"
                  />
                </div>
              </div>
              <hr className="border-[#dbe6e3] dark:border-[#2d4a41]" />
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Cliente (Nombre / Cédula)
                  </label>
                  <input
                    className="w-full px-4 py-2 bg-background-light dark:bg-[#233b34] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
                    placeholder="Juan Pérez / 1712345678"
                    type="text"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Mascota</label>
                    <input
                      className="w-full px-4 py-2 bg-background-light dark:bg-[#233b34] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm"
                      placeholder="Nombre"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold">Especie</label>
                    <select className="w-full px-4 py-2 bg-background-light dark:bg-[#233b34] border-none rounded-lg focus:ring-2 focus:ring-primary text-sm">
                      <option>Canino</option>
                      <option>Felino</option>
                      <option>Otro</option>
                    </select>
                  </div>
                </div>
              </div>
              <button
                className="w-full bg-primary hover:bg-[#047d56] text-white font-bold py-3 rounded-lg mt-4 transition-all flex items-center justify-center gap-2"
                type="submit"
              >
                <span className="material-symbols-outlined">point_of_sale</span>
                Procesar Venta
              </button>
            </form>
          </div>
          {/* <!-- Alert Panel --> */}
          <div className="bg-[#fff5f5] dark:bg-[#3b1c1c] rounded-xl border border-[#fed7d7] dark:border-[#5a2a2a] p-6 shadow-sm">
            <div className="flex items-center gap-2 text-[#c53030] mb-4">
              <span className="material-symbols-outlined">warning</span>
              <h4 className="font-bold">Panel de Alertas</h4>
            </div>
            <div className="space-y-4">
              <div className="bg-white/80 dark:bg-black/20 p-4 rounded-lg border-l-4 border-[#e53e3e]">
                <p className="text-sm font-bold text-[#111816] dark:text-white">
                  Stock Crítico
                </p>
                <p className="text-xs text-[#5f8c7d] mt-1">
                  Ivermectina 1% - Solo quedan 15 unidades disponibles.
                </p>
                <a
                  className="mt-3 text-xs font-bold text-[#e53e3e] hover:underline flex items-center gap-1"
                  href="#"
                >
                  Solicitar reposición a FarmaVet{" "}
                  <span className="material-symbols-outlined text-[14px]">
                    open_in_new
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Quick Access Links --> */}
          <div className="bg-white dark:bg-[#1a2e28] rounded-xl border border-[#dbe6e3] dark:border-[#2d4a41] p-6 shadow-sm">
            <h4 className="text-sm font-bold mb-4 uppercase text-[#5f8c7d] tracking-wider">
              Acceso Rápido
            </h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-4 bg-background-light dark:bg-[#233b34] rounded-lg hover:bg-primary/10 transition-colors group">
                <span className="material-symbols-outlined text-primary mb-2">
                  add_box
                </span>
                <span className="text-xs font-medium">Nuevo Producto</span>
              </button>
              <button className="flex flex-col items-center justify-center p-4 bg-background-light dark:bg-[#233b34] rounded-lg hover:bg-primary/10 transition-colors group">
                <span className="material-symbols-outlined text-primary mb-2">
                  analytics
                </span>
                <span className="text-xs font-medium">Exportar PDF</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function Dashboard() {
  // TODO: Mejorar el uso del cursor
  return (
    <main className="max-w-360 mx-auto px-6 py-8">
      <div className="grid grid-cols-12 gap-8">
        {/* <!-- Main Content Area --> */}
        <div className="col-span-12 lg:col-span-9 space-y-8">
          {/* <!-- Stats Overview --> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">
                  inventory_2
                </span>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Total Products
                </p>
              </div>
              <p className="text-3xl font-bold">47</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-success bg-success/10 p-2 rounded-lg">
                  clinical_notes
                </span>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Associated Vets
                </p>
              </div>
              <p className="text-3xl font-bold">23</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-warning bg-warning/10 p-2 rounded-lg">
                  warning
                </span>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Low Stock Alerts
                </p>
              </div>
              <p className="text-3xl font-bold">8</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <span className="material-symbols-outlined text-danger bg-danger/10 p-2 rounded-lg">
                  event_busy
                </span>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Near Expiry
                </p>
              </div>
              <p className="text-3xl font-bold">5</p>
            </div>
          </div>
          {/* <!-- Inventory Table Section --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">Inventory Management</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Track and manage your current medical supplies
                </p>
              </div>
              <button className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md">
                <span className="material-symbols-outlined text-sm">add</span>
                Agregar Nuevo Producto
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Product Name
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Stock
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Price (USD)
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Selling Vets
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Status
                    </th>
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-semibold">
                      Amoxicilina 500mg
                    </td>
                    <td className="px-6 py-5">120 units</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                      $15.00
                    </td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">
                      12
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-semibold">Ivermectina 1%</td>
                    <td className="px-6 py-5">15 units</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                      $22.50
                    </td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">
                      8
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-warning/10 text-warning border border-warning/20">
                        Low Stock
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-semibold">Meloxicam 15mg</td>
                    <td className="px-6 py-5">5 units</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                      $18.00
                    </td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">
                      5
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-danger/10 text-danger border border-danger/20">
                        Expiry Alert
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-5 font-semibold">
                      Enrofloxacina 100ml
                    </td>
                    <td className="px-6 py-5">45 units</td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                      $34.20
                    </td>
                    <td className="px-6 py-5 text-slate-600 dark:text-slate-400">
                      10
                    </td>
                    <td className="px-6 py-5">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-slate-400 dark:text-slate-500 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined">edit</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Right Sidebar */}
        <aside className="col-span-12 lg:col-span-3 space-y-8">
          {/* <!-- Recent Notifications --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg">Recent Alerts</h3>
              <span className="bg-danger text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                2 NEW
              </span>
            </div>
            <div className="space-y-4">
              <div className="flex gap-4 p-3 rounded-lg bg-warning/5 border-l-4 border-warning">
                <span className="material-symbols-outlined text-warning text-xl">
                  inventory_2
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Stock Alert: Mariscal Vet
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Amoxicilina running low in La Mariscal location.
                  </p>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 block">
                    2 hours ago
                  </span>
                </div>
              </div>
              <div className="flex gap-4 p-3 rounded-lg bg-danger/5 border-l-4 border-danger">
                <span className="material-symbols-outlined text-danger text-xl">
                  calendar_today
                </span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                    Expiry: Cumbayá Vet
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Vaccines expiring in 48h at Cumbayá branch.
                  </p>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 block">
                    5 hours ago
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 text-xs font-bold text-primary hover:underline">
              View All Notifications
            </button>
          </div>
          {/* <!-- Associated Veterinaries --> */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold">Associated Veterinaries</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    local_hospital
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Clínica La Mariscal</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Av. Amazonas y Colón, Quito
                  </p>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    local_hospital
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Vet-Cumbayá</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Calle Francisco de Orellana, Cumbayá
                  </p>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    local_hospital
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Quito Norte Vet</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Av. de la Prensa, Quito Norte
                  </p>
                </div>
              </div>
              <div className="p-4 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors flex items-center gap-4">
                <div className="size-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">
                    local_hospital
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold">Centro Veterinario Sur</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Av. Pedro Vicente Maldonado, Quito
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-slate-50 dark:bg-slate-800/50">
              <div className="rounded-lg h-32 overflow-hidden relative border border-slate-200 dark:border-slate-700">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  data-alt="Map of veterinary locations in Quito"
                  data-location="Quito, Ecuador"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAZ_DPr6Vyh11lIGKBRJVH6J81FQqo8Lqgxktkf6mqMJz0BPND9drglmXkfC6fr9Kzj0DUWNXv0Mu_nyYj5FLb76hy7jDTPSiU95siyQqDdd3dEwa4T4zQx2VOuat5gqJ7rqIIzDpenyrtSp9QDZuvfOC_GguxXRTpNu3xfqeqQbCiL_wfzszQp16YiB4RE7ilzINb3pKhv2TKmXpcNhx_RJlK0UJsgGwZ1xnnSqheZ71fmyD-tShVT3ie9URrPu_vDfj19ffdfwBE")',
                  }}
                ></div>
                <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-[10px] font-bold shadow-sm">
                  Map View
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

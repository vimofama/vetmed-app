export default function PedidosPage() {
  return (
    <main className="flex-1 px-10 py-8 max-w-360 mx-auto w-full">
      <div className="flex flex-col gap-6">
        {/* <!-- Distributor Header --> */}
        <div className="flex items-center justify-between bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-lg size-14"
              data-alt="FarmaVet Distributor Logo"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDtif1DdTQwG6XukuIQH1z5SOkr-y_GE-YNWboCGlRNpn6ejDcx6n2AHrOUx1nmXtTa5aPIaJVoxarjFpfI_sFpHkFWMBaa9PsWbzhzfQ1KzUqFBRik48VM4oukuQmqPO5mOHKKkJa072NtnRgR8XxomrbKc4S2CZWxZG9MXZv5C1H6Q2FF1VLcktJW9dJKHmH0mQZ3upqB1WyOI0uKtiCLnnbz7_1Q3QxJCQYWuvIkUnowpvHzAEPAhab5pOQrp0j3rgw2jVhu97Q")',
              }}
            ></div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Proveedor Seleccionado
              </p>
              <h1 className="text-2xl font-bold">Distribuidora FarmaVet</h1>
              <p className="text-sm text-slate-400">
                Quito, Ecuador • Entrega en 24-48h
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-sm">
                chat_bubble
              </span>{" "}
              Contactar
            </button>
          </div>
        </div>
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Catalog */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col h-full">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold mb-4">
                  Catálogo de Productos
                </h2>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400">
                      search
                    </span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-3 py-3 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary placeholder:text-slate-500"
                    placeholder="Buscar medicamentos (Amoxicilina, Ivermectina...)"
                    type="text"
                  />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800/50">
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Producto
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Stock Clinic
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Precio Unit.
                      </th>
                      <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Item 1 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">Amoxicilina 500mg</div>
                        <div className="text-xs text-slate-400">
                          Caja x 20 caps.
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          5 unidades
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                        $12.50
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-1 ml-auto">
                          <span className="material-symbols-outlined text-lg">
                            add
                          </span>{" "}
                          Añadir
                        </button>
                      </td>
                    </tr>
                    {/* Item 2 */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">
                          Ivermectina 1% (Frasco 50ml)
                        </div>
                        <div className="text-xs text-slate-400">
                          Uso inyectable
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                          2 unidades
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                        $8.00
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-1 ml-auto">
                          <span className="material-symbols-outlined text-lg">
                            add
                          </span>{" "}
                          Añadir
                        </button>
                      </td>
                    </tr>
                    {/* <!-- Item 3 --> */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">
                          Suero Fisiológico 500ml
                        </div>
                        <div className="text-xs text-slate-400">
                          Pack x 12 bolsas
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                          15 unidades
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                        $3.20
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-1 ml-auto">
                          <span className="material-symbols-outlined text-lg">
                            add
                          </span>{" "}
                          Añadir
                        </button>
                      </td>
                    </tr>
                    {/* <!-- Item 4 --> */}
                    <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-medium">Meloxicam 20mg/ml</div>
                        <div className="text-xs text-slate-400">
                          Frasco 20ml
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                          1 unidad
                        </span>
                      </td>
                      <td className="px-6 py-4 font-semibold text-slate-700 dark:text-slate-300">
                        $21.15
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="bg-primary text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-primary/90 transition-colors flex items-center gap-1 ml-auto">
                          <span className="material-symbols-outlined text-lg">
                            add
                          </span>{" "}
                          Añadir
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-auto p-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 text-center">
                <button className="text-primary text-sm font-bold hover:underline">
                  Cargar más productos
                </button>
              </div>
            </div>
          </div>
          {/* Right Column: Cart & Details */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Shopping Cart */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">
                    shopping_cart
                  </span>
                  <h2 className="text-xl font-bold">Tu Pedido</h2>
                </div>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  3 ítems
                </span>
              </div>
              <div className="p-0">
                {/* Cart Item 1 */}
                <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                  <div className="flex-1">
                    <div className="font-bold">Amoxicilina 500mg</div>
                    <div className="text-xs text-slate-400">
                      $12.50 x unidad
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="px-3 py-1 text-sm font-bold bg-slate-50 dark:bg-slate-800">
                        10
                      </span>
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="text-right w-20">
                      <div className="font-bold">$125.00</div>
                    </div>
                    <button className="text-slate-300 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                {/* Cart Item 2 */}
                <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                  <div className="flex-1">
                    <div className="font-bold">Ivermectina 1%</div>
                    <div className="text-xs text-slate-400">$8.00 x unidad</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="px-3 py-1 text-sm font-bold bg-slate-50 dark:bg-slate-800">
                        5
                      </span>
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="text-right w-20">
                      <div className="font-bold">$40.00</div>
                    </div>
                    <button className="text-slate-300 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
                {/* Cart Item 3 */}
                <div className="p-6 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
                  <div className="flex-1">
                    <div className="font-bold">Meloxicam 20mg/ml</div>
                    <div className="text-xs text-slate-400">
                      $21.15 x unidad
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          remove
                        </span>
                      </button>
                      <span className="px-3 py-1 text-sm font-bold bg-slate-50 dark:bg-slate-800">
                        2
                      </span>
                      <button className="px-2 py-1 hover:bg-slate-100 dark:hover:bg-slate-800">
                        <span className="material-symbols-outlined text-sm">
                          add
                        </span>
                      </button>
                    </div>
                    <div className="text-right w-20">
                      <div className="font-bold">$42.30</div>
                    </div>
                    <button className="text-slate-300 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-800/30">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Fecha de Entrega Sugerida
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="material-symbols-outlined text-slate-400 text-sm">
                          calendar_today
                        </span>
                      </div>
                      <input
                        className="block w-full pl-10 pr-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm"
                        type="date"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Notas del Pedido
                    </label>
                    <textarea
                      className="block w-full px-3 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm"
                      placeholder="Instrucciones especiales para el transportista..."
                      rows={3}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="p-6 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>Subtotal</span>
                    <span>$207.30</span>
                  </div>
                  <div className="flex justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span>IVA (15%)</span>
                    <span>$31.10</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold mt-2">
                    <span>Total del Pedido</span>
                    <span className="text-primary">$238.40 USD</span>
                  </div>
                </div>
                <button className="w-full bg-primary py-4 rounded-xl text-white font-bold text-lg hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">send</span>
                  Enviar Pedido a FarmaVet
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">
                  Al confirmar, el pedido será enviado instantáneamente al
                  centro de distribución de FarmaVet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

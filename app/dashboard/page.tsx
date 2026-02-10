"use client";

import { useState } from "react";
import ProductForm from "@/components/dashboard/veterinary/ProductForm";

interface Product {
  id: string;
  name: string;
  stock: number;
  price: number;
  sellingVets: number;
  status: "active" | "low-stock" | "expiry-alert";
  category: string;
  activeIngredient: string;
  dosage: string;
  expirationDate: string;
}

const productsData: Product[] = [
  {
    id: "1",
    name: "Amoxicilina 500mg",
    stock: 120,
    price: 15.0,
    sellingVets: 12,
    status: "active",
    category: "antibiotics",
    activeIngredient: "Amoxicillin",
    dosage: "500mg",
    expirationDate: "2025-12-31",
  },
  {
    id: "2",
    name: "Ivermectina 1%",
    stock: 15,
    price: 22.5,
    sellingVets: 8,
    status: "low-stock",
    category: "antibiotics",
    activeIngredient: "Ivermectin",
    dosage: "1%",
    expirationDate: "2025-08-15",
  },
  {
    id: "3",
    name: "Meloxicam 15mg",
    stock: 5,
    price: 18.0,
    sellingVets: 5,
    status: "expiry-alert",
    category: "analgesics",
    activeIngredient: "Meloxicam",
    dosage: "15mg",
    expirationDate: "2024-03-01",
  },
  {
    id: "4",
    name: "Enrofloxacina 100ml",
    stock: 45,
    price: 34.2,
    sellingVets: 10,
    status: "active",
    category: "antibiotics",
    activeIngredient: "Enrofloxacin",
    dosage: "100ml bottle",
    expirationDate: "2026-01-20",
  },
];

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

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
              <button
                onClick={handleAddProduct}
                className="cursor-pointer bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 transition-all shadow-md"
              >
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
                  {productsData.map((product) => {
                    const getStatusBadge = () => {
                      switch (product.status) {
                        case "active":
                          return (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-success/10 text-success border border-success/20">
                              Active
                            </span>
                          );
                        case "low-stock":
                          return (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-warning/10 text-warning border border-warning/20">
                              Low Stock
                            </span>
                          );
                        case "expiry-alert":
                          return (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-danger/10 text-danger border border-danger/20">
                              Expiry Alert
                            </span>
                          );
                      }
                    };

                    return (
                      <tr
                        key={product.id}
                        className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        <td className="px-6 py-5 font-semibold">
                          {product.name}
                        </td>
                        <td className="px-6 py-5">{product.stock} units</td>
                        <td className="px-6 py-5 text-slate-600 dark:text-slate-400 font-medium">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-5 text-slate-600 dark:text-slate-400">
                          {product.sellingVets}
                        </td>
                        <td className="px-6 py-5">{getStatusBadge()}</td>
                        <td className="px-6 py-5">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="cursor-pointer text-slate-400 dark:text-slate-500 hover:text-primary transition-colors"
                          >
                            <span className="material-symbols-outlined">
                              edit
                            </span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
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

      {/* Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="relative bg-background-light dark:bg-background-dark rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto w-full max-w-250 animate-in zoom-in-95 duration-200"
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
            <ProductForm
              product={selectedProduct}
              onClose={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </main>
  );
}

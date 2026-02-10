"use client";

import { useState, useEffect } from "react";

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

interface ProductFormProps {
  product?: Product | null;
  onClose?: () => void;
}

export default function ProductForm({ product, onClose }: ProductFormProps) {
  const [formData, setFormData] = useState({
    productName: "",
    category: "",
    activeIngredient: "",
    dosage: "",
    unitPrice: "",
    totalStock: "",
    expirationDate: "",
  });

  const [selectedVets, setSelectedVets] = useState<string[]>(["clinica-sur"]);

  // Actualizar el formulario cuando cambia el producto
  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.name,
        category: product.category,
        activeIngredient: product.activeIngredient,
        dosage: product.dosage,
        unitPrice: product.price.toString(),
        totalStock: product.stock.toString(),
        expirationDate: product.expirationDate,
      });
    } else {
      // Resetear el formulario si no hay producto (modo agregar)
      setFormData({
        productName: "",
        category: "",
        activeIngredient: "",
        dosage: "",
        unitPrice: "",
        totalStock: "",
        expirationDate: "",
      });
      setSelectedVets(["clinica-sur"]);
    }
  }, [product]);

  const veterinaries = [
    { id: "clinica-sur", name: "Clínica Veterinaria Sur" },
    { id: "petcare-central", name: "Pet Care Quito Central" },
    { id: "vethealth-cumbaya", name: "VetHealth Cumbayá" },
    { id: "hospital-norte", name: "Animal Hospital Norte" },
    { id: "dr-paredes", name: "Dr. Miguel Paredes" },
    { id: "centro-felino", name: "Centro Médico Felino" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleVetToggle = (vetId: string) => {
    setSelectedVets((prev) =>
      prev.includes(vetId)
        ? prev.filter((id) => id !== vetId)
        : [...prev, vetId],
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(product ? "Updating product:" : "Creating product:", formData);
    console.log("Selected vets:", selectedVets);
    // Aquí iría la lógica para guardar/actualizar el producto
    onClose?.(); // Cerrar el modal después de guardar
  };

  return (
    <main className="flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-240 flex-1 px-4">
        {/* <!-- Page Heading --> */}
        <div className="flex flex-wrap justify-between gap-3 py-6">
          <div className="flex min-w-72 flex-col gap-1">
            <p className="text-[#111318] dark:text-white tracking-light text-[32px] font-bold leading-tight">
              {product ? "Edit Product" : "Add New Veterinary Product"}
            </p>
            <p className="text-[#616e89] dark:text-gray-400 text-base font-normal leading-normal">
              {product
                ? "Update the details for this medicine or equipment."
                : "Enter the details for the new medicine or equipment to update your catalog."}
            </p>
          </div>
        </div>
        {/* <!-- Form Section --> */}
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-[#1c222d] rounded-xl border border-[#dbdee6] dark:border-gray-700 shadow-sm p-8 flex flex-col gap-8"
        >
          {/* <!-- Basic Information Grid --> */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* <!-- Product Name --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Product Name
              </label>
              <input
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4 placeholder:text-[#616e89] dark:placeholder:text-gray-500"
                placeholder="e.g. Enrofloxacin 10%"
                type="text"
              />
            </div>
            {/* <!-- Category --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="form-select flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4"
              >
                <option disabled value="">
                  Select Category
                </option>
                <option value="antibiotics">Antibiotics</option>
                <option value="analgesics">Analgesics</option>
                <option value="vaccines">Vaccines</option>
                <option value="equipment">Medical Equipment</option>
                <option value="supplements">Supplements</option>
              </select>
            </div>
            {/* <!-- Active Ingredient --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Active Ingredient
              </label>
              <input
                name="activeIngredient"
                value={formData.activeIngredient}
                onChange={handleInputChange}
                className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4 placeholder:text-[#616e89]"
                placeholder="e.g. Enrofloxacin"
                type="text"
              />
            </div>
            {/* <!-- Dosage --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Dosage / Presentation
              </label>
              <input
                name="dosage"
                value={formData.dosage}
                onChange={handleInputChange}
                className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4 placeholder:text-[#616e89]"
                placeholder="e.g. 5mg/kg or 100ml bottle"
                type="text"
              />
            </div>
            {/* <!-- Unit Price --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Unit Price (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#616e89]">
                  $
                </span>
                <input
                  name="unitPrice"
                  value={formData.unitPrice}
                  onChange={handleInputChange}
                  className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 pl-8 pr-4 placeholder:text-[#616e89]"
                  placeholder="0.00"
                  step="0.01"
                  type="number"
                />
              </div>
            </div>
            {/* <!-- Total Stock --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Total Stock
              </label>
              <input
                name="totalStock"
                value={formData.totalStock}
                onChange={handleInputChange}
                className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4 placeholder:text-[#616e89]"
                placeholder="Available units"
                type="number"
              />
            </div>
            {/* <!-- Expiration Date --> */}
            <div className="flex flex-col gap-2">
              <label className="text-[#111318] dark:text-white text-sm font-semibold leading-normal">
                Expiration Date
              </label>
              <input
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleInputChange}
                className="form-input flex w-full rounded-lg text-[#111318] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/20 border border-[#dbdee6] dark:border-gray-600 bg-white dark:bg-[#111621] h-12 px-4"
                type="date"
              />
            </div>
          </div>
          {/* <!-- Multi-select Checkbox Section --> */}
          <div className="flex flex-col gap-4 border-t border-[#dbdee6] dark:border-gray-700 pt-6">
            <div className="flex flex-col gap-1">
              <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                Associated Veterinaries
              </h3>
              <p className="text-[#616e89] dark:text-gray-400 text-sm">
                Select which clinics or professionals have access to this
                product inventory.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {veterinaries.map((vet) => (
                <label
                  key={vet.id}
                  className="flex items-center gap-3 p-3 rounded-lg border border-[#dbdee6] dark:border-gray-600 hover:bg-background-light dark:hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  <input
                    checked={selectedVets.includes(vet.id)}
                    onChange={() => handleVetToggle(vet.id)}
                    className="rounded text-primary focus:ring-primary h-5 w-5"
                    type="checkbox"
                  />
                  <span className="text-[#111318] dark:text-gray-300 text-sm font-medium">
                    {vet.name}
                  </span>
                </label>
              ))}
            </div>
          </div>
          {/* <!-- Action Buttons --> */}
          <div className="flex items-center justify-end gap-4 border-t border-[#dbdee6] dark:border-gray-700 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="flex min-w-25 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-transparent border border-[#dbdee6] dark:border-gray-600 text-[#111318] dark:text-gray-300 text-sm font-bold leading-normal hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex min-w-40 cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#1d4ed8] shadow-md transition-all active:scale-95"
            >
              {product ? "Update Product" : "Save Product"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

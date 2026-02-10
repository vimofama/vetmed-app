"use client";

import { useState } from "react";

interface VeterinaryFormProps {
  onClose?: () => void;
}

export default function VeterinaryForm({ onClose }: VeterinaryFormProps) {
  const [formData, setFormData] = useState({
    veterinaryName: "",
    ruc: "",
    category: "",
    sector: "",
    fullAddress: "",
    contactPerson: "",
    email: "",
    phone: "",
    creditLimit: "",
    paymentTerms: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form data:", formData);
    // Aquí iría la lógica para guardar la veterinaria
    onClose?.(); // Cerrar el modal después de guardar
  };

  return (
    <main className="flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-240 flex-1 px-4 lg:px-10">
        {/* <!-- PageHeading --> */}
        <div className="flex flex-wrap justify-between gap-3 py-6">
          <div className="flex min-w-72 flex-col gap-2">
            <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
              Register New Veterinary
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-base font-normal">
              Complete the onboarding details for the new clinic partner in
              Quito.
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <!-- Section 1: Datos Generales --> */}
          <div className="bg-white dark:bg-background-dark/50 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
              Datos Generales
            </h2>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Veterinary Name
                </span>
                <input
                  name="veterinaryName"
                  value={formData.veterinaryName}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  placeholder="e.g. PetCare Clinic"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  RUC (Tax ID)
                </span>
                <input
                  name="ruc"
                  value={formData.ruc}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  placeholder="1790000000001"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Category
                </span>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select category</option>
                  <option value="clinic">Clinic</option>
                  <option value="hospital">Hospital</option>
                  <option value="petshop">Pet Shop</option>
                </select>
              </label>
            </div>
          </div>
          {/* <!-- Section 2: Ubicación en Quito --> */}
          <div className="bg-white dark:bg-background-dark/50 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
              Ubicación en Quito
            </h2>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <label className="flex flex-col gap-2">
                  <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                    Sector
                  </span>
                  <select
                    name="sector"
                    value={formData.sector}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select Sector</option>
                    <option value="cumbaya">Cumbayá</option>
                    <option value="la-carolina">La Carolina</option>
                    <option value="el-batan">El Batán</option>
                    <option value="tumbaco">Tumbaco</option>
                    <option value="centro-historico">Centro Histórico</option>
                  </select>
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                    Full Address
                  </span>
                  <textarea
                    name="fullAddress"
                    value={formData.fullAddress}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white min-h-25 p-4 focus:ring-primary focus:border-primary"
                    placeholder="Street name and number, suite, etc."
                  ></textarea>
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Pin on Map
                </span>
                <div className="relative w-full h-52.5 bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden group cursor-pointer border border-gray-100 dark:border-gray-700">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-100 transition-opacity"
                    data-alt="Map of Quito city showing street layout"
                    data-location="Quito"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCPjIs8Mf8g42PmUeIOd5W-1LXb-BioYme8_St1l4f8nnytTQIAtdczYxpBcUAZQyB4RAie93aNGwSfh30PT3LiwoiSu-H-s7kDKkWhV8otVivdFQzXrZdQbW7y7ExCSYooTgt4p5k5Zfd2mN-sa0mWJjTxrN1PoDEB22XV_3w1jJf8nKokvJlHhj9tP_19nE3srQR8_1OP96r8w9pfOjoVXnnBiatoZILSIojxs0FbHstA8ZHbxPPBcHo_mh0qxdRD6dDJPlId-wE')",
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                      <span className="material-symbols-outlined">
                        location_on
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 px-3 py-1.5 rounded text-xs font-bold dark:text-white">
                    Click to adjust pin
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Section 3: Contacto --> */}
          <div className="bg-white dark:bg-background-dark/50 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
              Contacto
            </h2>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Contact Person Name
                </span>
                <input
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  placeholder="Juan Perez"
                  type="text"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Email
                </span>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  placeholder="contact@veterinary.com"
                  type="email"
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Phone Number
                </span>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                  placeholder="+593 9..."
                  type="tel"
                />
              </label>
            </div>
          </div>
          {/* <!-- Section 4: Información Comercial --> */}
          <div className="bg-white dark:bg-background-dark/50 border border-gray-100 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
            <h2 className="text-[#111318] dark:text-white text-xl font-bold px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30">
              Información Comercial
            </h2>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Credit Limit (USD)
                </span>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
                    $
                  </span>
                  <input
                    name="creditLimit"
                    value={formData.creditLimit}
                    onChange={handleInputChange}
                    className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 pl-8 pr-4 focus:ring-primary focus:border-primary"
                    placeholder="0.00"
                    type="number"
                  />
                </div>
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-[#111318] dark:text-gray-200 text-sm font-semibold">
                  Payment Terms
                </span>
                <select
                  name="paymentTerms"
                  value={formData.paymentTerms}
                  onChange={handleInputChange}
                  className="w-full rounded-lg border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white h-12 px-4 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select terms</option>
                  <option value="cash">Cash</option>
                  <option value="net30">Net 30 days</option>
                  <option value="net60">Net 60 days</option>
                  <option value="immediate">Immediate Transfer</option>
                </select>
              </label>
            </div>
          </div>
          {/* <!-- Footer Actions --> */}
          <div className="flex items-center justify-end gap-4 py-8 mt-4 border-t border-gray-200 dark:border-gray-800">
            <button
              onClick={onClose}
              className="px-8 h-12 rounded-lg text-[#111318] dark:text-white font-bold bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
              type="button"
            >
              Cancelar
            </button>
            <button
              className="px-8 h-12 rounded-lg bg-primary text-white font-bold hover:bg-blue-700 transition-all shadow-md shadow-primary/20 flex items-center gap-2"
              type="submit"
            >
              <span className="material-symbols-outlined">save</span>
              Registrar Veterinaria
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isInventory = pathname === "/vet";
  const isPedidos = pathname === "/vet/pedidos";

  const getNavClass = (isActive: boolean) =>
    isActive
      ? "text-primary border-b-2 border-primary text-sm font-semibold py-1"
      : "text-[#5f8c7d] hover:text-primary transition-colors text-sm font-medium";

  return (
    <header className="w-full bg-white dark:bg-[#1a2e28] border-b border-solid border-[#dbe6e3] dark:border-[#2d4a41] px-4 md:px-10 py-3 sticky top-0 z-50">
      <div className="max-w-360 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="text-primary size-8">
              <svg
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
                <path
                  clipRule="evenodd"
                  d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                  fill="currentColor"
                  fillRule="evenodd"
                ></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight">
              Veterinaria La Mariscal
            </h2>
          </div>
          <nav className="hidden lg:flex items-center gap-6">
            <Link className={getNavClass(isInventory)} href="/vet">
              Inventario
            </Link>
            <Link className={getNavClass(isPedidos)} href="/vet/pedidos">
              Pedidos
            </Link>
            <a
              className="text-[#5f8c7d] hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Reportes
            </a>
            <a
              className="text-[#5f8c7d] hover:text-primary transition-colors text-sm font-medium"
              href="#"
            >
              Configuración
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex items-center gap-2 bg-[#f0f5f3] dark:bg-[#233b34] px-3 py-1.5 rounded-lg border border-[#dbe6e3] dark:border-[#2d4a41]">
            <span className="material-symbols-outlined text-primary text-sm">
              location_on
            </span>
            <span className="text-xs font-medium">
              Av. Mariscal Foch N24-56, Quito
            </span>
          </div>
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary"
            data-alt="User profile avatar of the veterinarian administrator"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzOHt0YK1_T6L5YH79A6FP9-Ujt04zmNIUt4bnFvUwyT_i4SX_3xGkwM8MzWxy-pupKKZjCoo_g7AK-XoUG8uSassZ8xQtoYzGMUk8EOZUqtRkA1MdqCsAaB-BLL_qYjrrOvF9uMlqbvndX3cXJnU4vK_2DlClEnT8-clZddBUAFOyXaYk-p8Bijay4htAF0aMDe4ER3OYn4TgvZZYLlEjBzp7IaB02JiGG-w1gFZ6_98xm6lC-CM9Z4E4B5AggRN1huSakmadSeU')",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
}

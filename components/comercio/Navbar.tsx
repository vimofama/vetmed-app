import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-[#2d3940] bg-white dark:bg-[#1a262e] px-10 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-4 text-primary">
        <div className="size-8">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col">
          <h2 className="text-[#111618] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            VetMed Localizador
          </h2>
          <p className="text-xs text-[#607d8a] dark:text-gray-400">
            Quito, Ecuador
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-6">
          <Link
            className="text-[#111618] dark:text-white text-sm font-medium hover:text-primary transition-colors"
            href="/comercio"
          >
            Medicamentos
          </Link>
          <a
            className="text-[#111618] dark:text-white text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Clínicas
          </a>
          <a
            className="text-[#111618] dark:text-white text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Urgencias 24h
          </a>
        </nav>
        <button className="flex min-w-21 cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold tracking-[0.015em]">
          Acceso Profesionales
        </button>
      </div>
    </header>
  );
}

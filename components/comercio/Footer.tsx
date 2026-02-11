export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1a262e] border-t border-[#e5e7eb] dark:border-[#2d3940] py-8 mt-12">
      <div className="max-w-7xl mx-auto px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary">pets</span>
          <span className="font-bold">VetMed Localizador © 2024</span>
        </div>
        <div className="flex gap-8 text-sm text-[#607d8a]">
          <a className="hover:text-primary" href="#">
            Términos de Uso
          </a>
          <a className="hover:text-primary" href="#">
            Privacidad
          </a>
          <a className="hover:text-primary" href="#">
            Registrar mi Clínica
          </a>
          <a className="hover:text-primary" href="#">
            Contacto
          </a>
        </div>
        <div className="flex gap-4">
          <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-all">
            <span className="material-symbols-outlined text-base">share</span>
          </div>
          <div className="size-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center cursor-pointer hover:bg-primary/20 transition-all">
            <span className="material-symbols-outlined text-base">help</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

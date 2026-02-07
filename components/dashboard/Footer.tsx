export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 dark:border-slate-800 py-8 bg-white dark:bg-slate-900">
      <div className="max-w-360 mx-auto px-6 flex flex-wrap justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-xl">
            pets
          </span>
          <p className="text-sm font-bold">
            VetMed Supply{" "}
            <span className="font-normal text-slate-500 dark:text-slate-400 ml-2">
              © 2024 Quito Distributor
            </span>
          </p>
        </div>
        <div className="flex gap-8 text-xs font-medium text-slate-500 dark:text-slate-400">
          <a className="hover:text-primary" href="#">
            Legal Notice
          </a>
          <a className="hover:text-primary" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-primary" href="#">
            Contact Support
          </a>
        </div>
      </div>
    </footer>
  );
}

import { Home, CreditCard, Wallet, Settings, Menu, Search, Bell } from "lucide-react";

const SidebarItem = ({ icon, label, active }: any) => (
  <div className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${
    active ? "bg-blue-50 text-blue-600" : "text-slate-600"
  }`}>
    <div className="w-8 h-8 rounded-xl bg-white shadow-sm grid place-items-center">{icon}</div>
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export default function HalfDoneDashboard() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-700 flex flex-col">
      {/*Header*/}
      <header className="h-16 bg-white border-b sticky top-0 z-20">
        <div className="max-w-7xl mx-auto h-full flex items-center gap-4 px-4">
          <button className="lg:hidden p-2 rounded-full hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-blue-600 font-semibold text-lg">
            <div className="w-9 h-9 rounded-lg bg-blue-600 grid place-items-center text-white">
              <CreditCard className="w-5 h-5" />
            </div>
            <span>BankDash.</span>
          </div>

          <div className="text-xl font-semibold ml-4 hidden sm:block">Overview</div>

          <div className="ml-auto flex items-center gap-3 w-full sm:w-auto">
            <div className="relative hidden md:block w-[360px]">
              <input
                placeholder="Search for something"
                className="pl-10 rounded-2xl border border-slate-200 h-10 w-full"
              />
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            </div>
            <button className="p-2 rounded-full hover:bg-slate-100">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100">
              <Bell className="w-5 h-5" />
            </button>
            <div className="h-9 w-9 rounded-full bg-slate-200 grid place-items-center text-slate-600">
              AN
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/*Sidebar*/}
        <aside className="hidden md:flex flex-col gap-2 w-64 p-4 bg-white shadow-sm">
          <SidebarItem icon={<Home className="w-5 h-5" />} label="Dashboard" active />
          <SidebarItem icon={<Wallet className="w-5 h-5" />} label="Accounts" />
          <SidebarItem icon={<CreditCard className="w-5 h-5" />} label="Cards" />
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        </aside>

        {/*Main*/}
        <main className="flex-1 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-32 w-200 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
              cards
            </div>
            <div className="h-32 w-150 bg-white rounded-xl shadow-sm flex items-center justify-center ml-25 text-slate-400">
              transactions
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="h-64 w-200 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
              activity
            </div>
            <div className="h-64 w-150 bg-white rounded-xl shadow-sm flex items-center justify-center ml-25 text-slate-400">
              chart
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-6">
            <div className="h-40 w-150 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-400">
              transfer
            </div>
            <div className="h-40 w-200 bg-white rounded-xl shadow-sm flex items-center justify-center -ml-23 text-slate-400">
              history
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

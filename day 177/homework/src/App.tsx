import { Home, Table, CreditCard, Settings, User, LogIn, FilePlus, HelpCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Nh from "./assets/Nh.png";

export default function App() {
  return (
    <div className="w-64 min-h-screen bg-white shadow-lg flex flex-col justify-between py-6 px-4 rounded-r-2xl">
      <div>
        <div className="flex items-center gap-2 px-2 mb-8">
          <span className="font-bold text-lg">argon</span>
          <span className="text-sm text-blue-500 font-semibold">| chakra</span>
        </div>

        <nav className="space-y-2">
          <SidebarItem icon={<Home className="h-5 w-5" />} label="Dashboard" active />
          <SidebarItem icon={<Table className="h-5 w-5" />} label="Tables" />
          <SidebarItem icon={<CreditCard className="h-5 w-5" />} label="Billing" />
          <SidebarItem icon={<Settings className="h-5 w-5" />} label="RTL" />

          <p className="text-xs font-bold text-gray-500 mt-6 px-2">ACCOUNT PAGES</p>
          <SidebarItem icon={<User className="h-5 w-5" />} label="Profile" />
          <SidebarItem icon={<LogIn className="h-5 w-5" />} label="Sign In" />
          <SidebarItem icon={<FilePlus className="h-5 w-5" />} label="Sign Up" />
        </nav>
      </div>

      <img src={Nh} alt="Nh" className="mx-auto mt-134.5 absolute w-50 ml-3" />
      
      <div className="p-4 rounded-xl text-center">
        <HelpCircle className="mx-auto mb-2 text-blue-600" />
        <p className="text-sm font-semibold">Need help?</p>
        <p className="text-xs text-gray-500 mb-3">Please check our docs</p>
        <div className="flex flex-col gap-2">
          <Button variant="default" className="bg-blue-500 hover:bg-blue-600 text-white text-xs">DOCUMENTATION</Button>
          <Button variant="secondary" className="text-xs">UPGRADE TO PRO</Button>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, active = false }: { icon: React.ReactNode; label: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer transition-all ${
        active ? 'bg-blue-100 text-blue-600 font-semibold shadow-sm' : 'hover:bg-gray-100 text-gray-700'
      }`}
    >
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
}

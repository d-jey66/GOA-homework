import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon } from "lucide-react";

interface InputFieldProps {
  label: string;
  type: string;
  icon?: LucideIcon;
  value: string;
  onChange: (val: string) => void;
}

export const InputField = ({ label, type, icon: Icon, value, onChange }: InputFieldProps) => {
  return (
    <div className="mb-5">
      <Label className="block text-zinc-300 text-sm font-medium mb-2">{label}</Label>
      <div className="flex items-center bg-zinc-800 px-3 py-2 rounded-xl shadow-inner focus-within:ring-2 focus-within:ring-red-600">
        {Icon && <Icon className="text-red-400 mr-3" size={20} />}
        <Input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="bg-transparent text-white border-none focus:outline-none focus:ring-0 placeholder:text-zinc-500"
        />
      </div>
    </div>
  );
};
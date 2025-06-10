import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { SocialButton } from "./SocialButton";
import { Facebook, Apple, Chrome } from "lucide-react";

export function SignInForm() {
  return (
    <div className="p-8 rounded-xl shadow-md w-full mx-auto w-[20%]">
      <h1 className="text-center text-[30px] font-semibold mb-4 p-5">Sign In with</h1>
      <div className="flex justify-center gap-9 mb-4">
        <SocialButton icon={<Facebook size={16} />} label="" />
        <SocialButton icon={<Apple size={16} />} label="" />
        <SocialButton icon={<Chrome size={16} />} label="" />
      </div>
      <p className="text-center text-gray-500 mb-4">or</p>
      <Input placeholder="Your full name" className="mb-3 h-12" />
      <Input placeholder="Your password" type="password" className="mb-5 h-12" />
      <div className="flex items-center mb-4">
        <Switch id="remember-me" />
        <label htmlFor="remember-me" className="ml-2">Remember me</label>
      </div>
      <Button className="w-full">Sign In</Button>
      <p className="text-center text-sm mt-4">Don't have an account? <a href="#" className="text-blue-500">Sign up</a></p>
    </div>
  );
}

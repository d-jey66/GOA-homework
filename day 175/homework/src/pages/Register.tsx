import { Button } from "@/components/ui/button";
import { InputField } from "../components/InputField";
import { useState } from "react";
import { z } from "zod";
import { UserPlus, User, Mail, Lock } from "lucide-react";

const registerSchema = z.object({
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
});

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const result = registerSchema.safeParse({ username, email, password });
    if (!result.success) {
      alert("Validation failed");
      return;
    }
    alert("Registered successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-950">
      <div className="bg-zinc-900/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-[400px] border border-zinc-700">
        <h1 className="text-white text-2xl mb-6 font-bold flex items-center gap-3">
          <UserPlus /> Join the Scuderia
        </h1>
        <InputField label="Username" type="text" icon={User} value={username} onChange={setUsername} />
        <InputField label="Email" type="email" icon={Mail} value={email} onChange={setEmail} />
        <InputField label="Password" type="password" icon={Lock} value={password} onChange={setPassword} />
        <Button onClick={handleSubmit} className="w-full mt-6 bg-red-600 hover:bg-red-700 transition-all">Register</Button>
      </div>
    </div>
  );
}
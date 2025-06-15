import { Navbar } from "../components/Navbar";
import { Car, Trophy, Flag } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <Navbar />
      <main className="p-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-red-600 mb-10">🏁 Ferrari F1 Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all">
            <Car className="text-red-500 mb-4" size={28} />
            <h2 className="font-semibold text-lg">Car Info</h2>
            <p className="text-zinc-400 mt-2">SF-24: Hybrid V6 Turbo, 1000+ HP</p>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all">
            <Trophy className="text-yellow-400 mb-4" size={28} />
            <h2 className="font-semibold text-lg">Championships</h2>
            <p className="text-zinc-400 mt-2">16 Constructors', 15 Drivers' titles</p>
          </div>
          <div className="bg-zinc-800/80 border border-zinc-700 rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all">
            <Flag className="text-green-400 mb-4" size={28} />
            <h2 className="font-semibold text-lg">Latest Race</h2>
            <p className="text-zinc-400 mt-2">Monza GP - P1 (Leclerc)</p>
          </div>
        </div>
      </main>
    </div>
  );
}

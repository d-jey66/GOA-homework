import React, { useState} from 'react';
import { Fish, Waves, MapPin, Info, Heart } from 'lucide-react';

export default function App() {
  const [facts] = useState([
    "Sea lions can swim up to 25 mph",
    "They can hold their breath for up to 10 minutes",
    "Sea lions are highly social and live in colonies",
    "They can rotate their hind flippers forward to walk on land"
  ]);
  const [selectedSpecies, setSelectedSpecies] = useState<number | null>(null);
  const [likedFacts, setLikedFacts] = useState(new Set());

  const species = [
    {
      id: 1,
      name: "California Sea Lion",
      habitat: "Pacific Coast of North America",
      weight: "200-350 kg",
      diet: "Fish, squid, octopus",
      color: "bg-blue-600"
    },
    {
      id: 2,
      name: "Steller Sea Lion",
      habitat: "North Pacific",
      weight: "300-1000 kg",
      diet: "Fish, cephalopods",
      color: "bg-indigo-600"
    },
    {
      id: 3,
      name: "South American Sea Lion",
      habitat: "South American coasts",
      weight: "150-350 kg",
      diet: "Fish, crustaceans",
      color: "bg-cyan-600"
    },
    {
      id: 4,
      name: "Australian Sea Lion",
      habitat: "Southern Australia",
      weight: "100-250 kg",
      diet: "Fish, squid, penguins",
      color: "bg-teal-600"
    }
  ];

  const toggleLike = (index: number) => {
    const newLiked = new Set(likedFacts);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedFacts(newLiked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-700 to-cyan-500">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Waves className="w-16 h-16 mx-auto mb-6 text-cyan-300 animate-bounce" />
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Amazing Sea Lions
          </h1>
          <p className="text-2xl text-cyan-100 mb-8">
            Discover the fascinating world of these incredible marine mammals
          </p>
          <div className="flex justify-center gap-4">
            <Fish className="w-8 h-8 text-yellow-300 animate-pulse" />
            <Fish className="w-8 h-8 text-yellow-300 animate-pulse delay-100" />
            <Fish className="w-8 h-8 text-yellow-300 animate-pulse delay-200" />
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Sea Lion Species
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {species.map((s) => (
            <div
              key={s.id}
              onClick={() => setSelectedSpecies(s.id === selectedSpecies ? null : s.id)}
              className={`${s.color} rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                selectedSpecies === s.id ? 'ring-4 ring-yellow-300' : ''
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4">{s.name}</h3>
              <div className="space-y-2 text-white">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                  <span className="text-sm">{s.habitat}</span>
                </div>
                <p className="text-sm">
                  <span className="font-semibold">Weight:</span> {s.weight}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Diet:</span> {s.diet}
                </p>
              </div>
              {selectedSpecies === s.id && (
                <div className="mt-4 pt-4 border-t border-white/30">
                  <Info className="w-5 h-5 inline-block mr-2" />
                  <span className="text-sm text-cyan-100">Click again to close</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl">
          <h2 className="text-4xl font-bold text-white text-center mb-8">
            Fun Facts
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {facts.map((fact, index) => (
              <div
                key={index}
                className="bg-white/20 rounded-lg p-6 backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start gap-4">
                  <p className="text-white text-lg">{fact}</p>
                  <button
                    onClick={() => toggleLike(index)}
                    className="flex-shrink-0 transition-transform hover:scale-110"
                  >
                    <Heart
                      className={`w-6 h-6 ${
                        likedFacts.has(index)
                          ? 'fill-red-500 text-red-500'
                          : 'text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl p-10 text-center shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Help Protect Sea Lions
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Sea lions face threats from pollution, habitat loss, and climate change.
            Learn how you can make a difference in their conservation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-100 transition-colors">
              Learn More
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors">
              Donate
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-blue-950 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <Waves className="w-8 h-8 mx-auto mb-4" />
          <p className="text-sm text-cyan-300 mt-2">
            Protecting marine life for future generations
          </p>
        </div>
      </footer>
    </div>
  );
}
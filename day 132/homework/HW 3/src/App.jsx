import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">BMW</h1>
          <p className="text-xl text-gray-400">The Ultimate Driving Machine</p>
        </header>

        <div className="space-y-12">
          <section className="bg-neutral-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Iconic Models</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold">E30 M3</h3>
                <p className="text-gray-400">The original M3. Born from motorsport, this homologation special dominated touring car racing and became a legend.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold">E46 M3</h3>
                <p className="text-gray-400">The perfect balance of raw power and daily usability. That straight-six sound still gives enthusiasts goosebumps.</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-xl font-bold">E39 M5</h3>
                <p className="text-gray-400">V8 power in a subtle suit. The last hand-built M5 and considered by many as the greatest sports sedan ever made.</p>
              </div>
            </div>
          </section>

          <section className="bg-neutral-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Engineering Excellence</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Legendary Engines</h3>
                <ul className="space-y-3 text-gray-400">
                  <li>• S14: The high-revving 4-cylinder that powered the E30 M3</li>
                  <li>• S54: Last of the naturally aspirated straight-six engines</li>
                  <li>• S85: Formula 1 inspired V10, a masterpiece of engineering</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-neutral-800 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Racing Heritage</h2>
            <div className="space-y-4 text-gray-400">
              <p>From touring cars to Le Mans, BMW's motorsport division has left an indelible mark on racing history. The iconic M stripes represent the most successful manufacturer in touring car history.</p>
              <p>Every M car carries this racing DNA, from the track-focused M4 CSL to the daily-driver M340i.</p>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center text-sm text-gray-500">
          <p>Sheer Driving Pleasure Since 1916</p>
          <div className="flex justify-center gap-8 mt-4 text-2xl">
            <span>///M</span>
            <span>🏁</span>
            <span>🏎️</span>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
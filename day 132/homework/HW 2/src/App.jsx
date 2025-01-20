import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-amber-50 p-6">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">The Beer Bible</h1>
          <p className="text-gray-600 mt-2">Your guide to Belgian's liquid gold</p>
        </header>

        <div className="grid gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Today's Drafts</h2>
            <div className="space-y-6">
              <div className="flex justify-between items-start border-b pb-4">
                <div>
                  <h3 className="font-bold">Tripel Karmeliet</h3>
                  <p className="text-sm text-gray-600 mt-1">Three grain recipe from 1679</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm bg-amber-100 px-2 py-1 rounded">8.4%</span>
                    <span className="text-sm text-gray-500">Served: 8°C</span>
                  </div>
                </div>
                <span className="text-xl font-bold">€5.50</span>
              </div>

              <div className="flex justify-between items-start border-b pb-4">
                <div>
                  <h3 className="font-bold">Delirium Tremens</h3>
                  <p className="text-sm text-gray-600 mt-1">The pink elephant will get you</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm bg-amber-100 px-2 py-1 rounded">8.5%</span>
                    <span className="text-sm text-gray-500">Served: 6-8°C</span>
                  </div>
                </div>
                <span className="text-xl font-bold">€6</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold">Kwak</h3>
                  <p className="text-sm text-gray-600 mt-1">Comes in that crazy wooden stand glass</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-sm bg-amber-100 px-2 py-1 rounded">8.4%</span>
                    <span className="text-sm text-gray-500">Served: 7°C</span>
                  </div>
                </div>
                <span className="text-xl font-bold">€6.50</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Beer Tips</h2>
            <div className="space-y-4 text-gray-700">
              <p>→ Every beer has its own glass. No exceptions.</p>
              <p>→ Let it warm up a bit. We don't drink it ice cold.</p>
              <p>→ Leave the yeast in the bottle for wheat beers.</p>
            </div>
          </div>
        </div>
        
        <footer className="mt-8 text-center text-sm text-gray-600">
          <p>🍺 20+ beers on tap • Proper glassware guaranteed</p>
          <p className="mt-2">ID required • Please drink responsibly</p>
        </footer>
      </div>
    </div>
  )
}

export default App
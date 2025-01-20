import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-50 p-6">
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl mb-8 font-bold">Belgian Food Spotlight</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl mb-3">Must-Try Belgian Dishes:</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">Beef Stew (Carbonnade)</h4>
                  <p>Rich beef stew cooked in dark Belgian beer. Comes with fries and mayo - the proper Belgian way!</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">Belgian Mussels</h4>
                  <p>Fresh mussels in white wine sauce. Always served in a massive pot!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl mb-8 font-bold">Belgian Beer Guide</h2>
          <div className="grid gap-6">
            <div className="bg-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Top Picks:</h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-bold">Delirium Tremens</span>
                  <p className="text-sm">The pink elephant beer! Watch out - it's stronger than it tastes.</p>
                </li>
                <li>
                  <span className="font-bold">Duvel</span>
                  <p className="text-sm">The classic golden ale. Don't let its clear color fool you.</p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl mb-8 font-bold">About Belgian Beer</h2>
          <div className="space-y-4">
            <p>Beer isn't just a drink in Belgium - it's basically a national treasure. Each beer has its own special glass, and yes, it actually matters!</p>
            <p>The monks still brew some of the best beers in the world. They've been doing it for centuries and they're not stopping anytime soon.</p>
          </div>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl mb-8 font-bold">Projects</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold">Belgian Beer Finder</h3>
              <p>App to help you find any Belgian beer in your area</p>
            </div>
            <div>
              <h3 className="text-xl font-bold">Brussels Food Map</h3>
              <p>Where to find the best waffles and fries in Brussels</p>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl mb-8 font-bold">Belgian League Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Team</th>
                  <th className="p-4 text-center">Played</th>
                  <th className="p-4 text-center">Won</th>
                  <th className="p-4 text-center">Points</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-4 font-bold">RSC Anderlecht</td>
                  <td className="p-4 text-center">24</td>
                  <td className="p-4 text-center">15</td>
                  <td className="p-4 text-center">48</td>
                </tr>
                <tr className="border-t">
                  <td className="p-4 font-bold">Club Brugge</td>
                  <td className="p-4 text-center">24</td>
                  <td className="p-4 text-center">14</td>
                  <td className="p-4 text-center">45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
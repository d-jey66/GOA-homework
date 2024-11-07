import React from 'react';

function Header() {
  return (
    <header className="bg-red-600 text-white p-6 text-center">
      <h1 className="text-4xl font-bold">Soviet Union History</h1>
      <p className="text-lg mt-2">An Overview of the Soviet Union's History</p>
    </header>
  );
}

function Timeline() {
  const events = [
    { year: "1917", event: "October Revolution - Bolsheviks take power" },
    { year: "1922", event: "Formation of the Soviet Union" },
    { year: "1941-1945", event: "World War II - The Eastern Front" },
    { year: "1953", event: "Stalin's Death" },
    { year: "1991", event: "Collapse of the Soviet Union" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-3xl text-center font-bold mb-6">Major Historical Events</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {events.map((event, index) => (
          <div key={index} className="flex justify-between bg-white p-4 rounded-lg shadow-md">
            <span className="font-semibold text-lg">{event.year}</span>
            <span>{event.event}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="py-10 bg-white">
      <h2 className="text-3xl text-center font-bold mb-6">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Coat_of_arms_of_the_Soviet_Union_%281956%E2%80%931991%29.svg" alt="Soviet Coat of Arms" className="rounded-lg shadow-lg px-10 py-36" />
        <img src="https://www.meisterdrucke.uk/kunstwerke/1260px/-%20-%20-%20Portrait%20of%20Joseph%20Stalin%20-%20%28MeisterDrucke-662722%29.jpg" alt="Stalin" className="rounded-lg shadow-lg" />
        <img src="https://ru.usembassy.gov/wp-content/uploads/sites/138/1-342-FH-3A27446-94586AC.jpg" alt="Soviet Soldiers" className="rounded-lg shadow-lg py-8" />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-red-600 text-white p-6 text-center">
      <p>Soviet Union History.</p>
    </footer>
  );
}

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Timeline />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

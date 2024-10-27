import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">React+Tailwind</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl p-4">
        <div className="bg-red-500 text-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold">Block 1</h2>
          <p>This is the first block.</p>
        </div>
        <div className="bg-green-500 text-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold">Block 2</h2>
          <p>This is the second block.</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold">Block 3</h2>
          <p>This is the third block.</p>
        </div>
      </div>
    </div>
  );
}

export default App;

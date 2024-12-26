import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white py-4">
          <nav className="container mx-auto flex justify-between px-5">
            <h1 className="text-2xl font-bold">Welcome!</h1>
            <div className="space-x-4">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/products" className="hover:underline">Products</Link>
              <Link to="/goa" className="hover:underline">Goa</Link>
            </div>
          </nav>
        </header>

        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/*" element={<Products />} />
            <Route path="/goa" element={<Goa />} />
          </Routes>
        </main>

        <footer className="bg-gray-800 text-white text-center py-4">
          <p>© 2024 My Awesome Website</p>
        </footer>
      </div>
    </Router>
  );
};


const Home = () => (
  <div className="text-center">
    <h2 className="text-3xl font-bold mb-4">Welcome to My Awesome Website!</h2>
    <p className="text-gray-700">Explore our products and learn more about Goa.</p>
  </div>
);

const Products = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Our Products</h2>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path=":productId" element={<ProductDetails />} />
    </Routes>
  </div>
);

const ProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {["Pumpkin", "Mandarin", "Mango"].map((product, index) => (
      <Link to={`/products/${index}`} key={index} className="block border rounded-lg p-4 bg-white shadow-md">
        <h3 className="text-lg font-semibold">{product}</h3>
        <p className="text-gray-600">Click to learn more about {product}!</p>
      </Link>
    ))}
  </div>
);

const ProductDetails = () => (
  <div>
    <h2 className="text-xl font-bold">Product Details</h2>
    <p className="text-gray-700">
      Learn all about our exclusive product offerings! For instance, the <strong>Pumpkin</strong> is a high-quality organic vegetable grown locally with care. Packed with vitamins and minerals, it's perfect for soups, pies, and even smoothies! You can also find the <strong>Mandarin</strong>, a sweet, juicy fruit rich in vitamin C and antioxidants. And don’t forget the <strong>Mango</strong>, a tropical delight that’s perfect for desserts or just eating on its own.
    </p>
    <p className="text-gray-700 mt-4">
      Each product comes with detailed information about its benefits, nutritional value, and the best ways to incorporate it into your daily routine.
    </p>
  </div>
);


const Goa = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Discover Goa</h2>
    <p className="text-gray-700">
      Goa is a leading programming academy, empowering students to learn coding and build amazing projects.
    </p>
  </div>
);

export default App;

import React, { useEffect, useState } from "react";

const App = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => {
        setCourses(data.products);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <header className="bg-green-600 text-black py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">GOA - Programming Academy</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 mt-6">
        <h2 className="text-3xl font-semibold mb-4 text-green-400">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-800 text-white shadow-md rounded-lg p-6 border border-green-400"
            >
              <h3 className="text-xl font-bold mb-2 text-green-300">
                {course.title}
              </h3>
              <p className="text-gray-300">{course.description}</p>
              <p className="mt-2 font-semibold text-green-400">
                Price: ${course.price}
              </p>
              <button className="mt-4 bg-green-600 text-black px-4 py-2 rounded hover:bg-green-700">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </main>
      <footer className="bg-gray-900 text-gray-400 text-center py-4 mt-6">
        <p>GOA Programming Academy</p>
      </footer>
    </div>
  );
};

export default App;

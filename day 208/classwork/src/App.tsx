import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log("Fetched", json); 
        console.log("Fetch done"); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>fetch data pkaceholder  </h1>
    </div>
  );
};

export default App;
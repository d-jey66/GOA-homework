import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isRegister, setIsRegister] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegister ? "register" : "login";

    const res = await fetch(`http://localhost:5000/api/auth/${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    if (res.ok) {
      if (!isRegister) {
        localStorage.setItem("authToken", data.token);
        navigate("/");
      } else {
        alert("Registered successfully!");
        setIsRegister(false);
      }
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-3xl">{isRegister ? "Register" : "Login"}</h2>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="text"
          placeholder="Username"
          className="border p-2 w-full"
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full mt-2"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
          {isRegister ? "Sign Up" : "Login"}
        </button>
      </form>
      <button className="mt-4 text-blue-600" onClick={() => setIsRegister(!isRegister)}>
        {isRegister ? "Already have an account? Login" : "Create an account"}
      </button>
    </div>
  );
};

export default Authentication;

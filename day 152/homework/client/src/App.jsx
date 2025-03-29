import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";

const useAuth = () => {
  return localStorage.getItem("authToken") !== null;
};

const ProtectedRoute = ({ children }) => {
  return useAuth() ? children : <Navigate to="/auth" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;

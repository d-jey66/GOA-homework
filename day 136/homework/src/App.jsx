import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Contacts } from "./components/Contacts";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <div className="bg-zinc-900 min-h-screen">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Contacts />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </div>
  );
}

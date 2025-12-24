"use client";
import { createContext, useContext, useState } from "react";

const ToastContext = createContext<{
  message: string;
  show: (msg: string) => void;
}>({ message: "", show: () => {} });
export function useToast() {
  return useContext(ToastContext);
}
export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState("");
  function show(msg: string) {
    setMessage(msg);
    setTimeout(() => setMessage(""), 2500);
  }
  return (
    <ToastContext.Provider value={{ message, show }}>
      {children}
      {message && (
        <div className="fixed bottom-4 right-4 rounded-lg bg-white text-black px-4 py-2 shadow-lg text-sm font-medium">
          {message}
        </div>
      )}
    </ToastContext.Provider>
  );
}

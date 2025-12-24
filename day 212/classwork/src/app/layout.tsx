import "./globals.css";
import { ToastProvider } from "@/components/ToastProvider";
export const metadata = { title: process.env.NEXT_PUBLIC_APP_NAME || "Apple" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-black text-white antialiased">
        <ToastProvider>
          <div className="mx-auto max-w-6xl px-4 py-8">{children}</div>
        </ToastProvider>
      </body>
    </html>
  );
}

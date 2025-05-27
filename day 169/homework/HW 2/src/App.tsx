import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[url('./assets/images/image.png')] bg-cover bg-center">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <SignIn />
      </main>
      <Footer />
    </div>
  );
}

export default App;
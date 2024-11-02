import Header from "./components/header"
import Main from "./components/main"
import Footer from "./components/footer"
function App() {

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Main />
      </main>
      <Footer />
    </div>
  )
}

export default App

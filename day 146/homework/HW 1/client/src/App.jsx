import { useEffect, useState } from "react"
import axios from "axios"
import { gsap } from "gsap"

export default function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  
  useEffect(() => {
    const timeline = gsap.timeline()
    
    timeline.from(".header", {
      y: -100,
      opacity: 0,
      duration: 1
    })
    
    timeline.from(".search-container", {
      opacity: 0,
      duration: 0.5
    }, "-=0.5")
    
    fetchMovies()
  }, [])
  
  const fetchMovies = async () => {
    setLoading(true)
    try {
      const response = await axios.get("http://localhost:5001/api/movies")
      setMovies(response.data)
      
      gsap.from(".movie-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.7
      })
    } catch (error) {
      console.error("Error fetching movies:", error)
    } finally {
      setLoading(false)
    }
  }
  
  const handleAddMovie = async () => {
    try {
      const newMovie = {
        title: "New Movie",
        director: "Director Name",
        year: 2025,
        genre: "Action",
        rating: 8.5,
        poster: "https://via.placeholder.com/300x450"
      }
      
      await axios.post("http://localhost:5001/api/movies", newMovie)
      fetchMovies()
    } catch (error) {
      console.error("Error adding movie:", error)
    }
  }
  
  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie)
    
    gsap.to(".movie-details", {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out"
    })
  }
  
  const handleCloseDetails = () => {
    gsap.to(".movie-details", {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      onComplete: () => setSelectedMovie(null)
    })
  }
  
  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="header bg-black py-6 px-8 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-red-500">CineFlix</h1>
          <button 
            onClick={handleAddMovie}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-all duration-300"
          >
            Add Movie
          </button>
        </div>
      </div>
      
      <div className="search-container container mx-auto py-8 px-4">
        <input
          type="text"
          placeholder="Search movies by title, genre or director..."
          className="w-full bg-gray-800 px-4 py-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="container mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredMovies.map(movie => (
              <div 
                key={movie._id} 
                className="movie-card bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer transform transition-transform duration-300 hover:scale-105"
                onClick={() => handleSelectMovie(movie)}
              >
                <div className="aspect-w-2 aspect-h-3 bg-gray-700">
                  <img 
                    src={movie.poster || "https://via.placeholder.com/300x450"} 
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold truncate">{movie.title}</h3>
                  <p className="text-sm text-gray-400">{movie.year} • {movie.genre}</p>
                  <div className="flex items-center mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{movie.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {selectedMovie && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="movie-details bg-gray-800 rounded-lg max-w-4xl w-full overflow-hidden opacity-0 scale-90">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-700">
                <img 
                  src={selectedMovie.poster || "https://via.placeholder.com/300x450"} 
                  alt={selectedMovie.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-3xl font-bold">{selectedMovie.title}</h2>
                  <button 
                    onClick={handleCloseDetails}
                    className="text-gray-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex items-center mt-2 text-gray-400">
                  <span>{selectedMovie.year}</span>
                  <span className="mx-2">•</span>
                  <span>{selectedMovie.genre}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{selectedMovie.rating}</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-300">Director: {selectedMovie.director}</p>
                <p className="mt-6 text-gray-300">{selectedMovie.description || "No description available."}</p>
                
                <div className="flex space-x-3 mt-8">
                  <button className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-md transition-all duration-300">
                    Watch Trailer
                  </button>
                  <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-md transition-all duration-300">
                    Add to Watchlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
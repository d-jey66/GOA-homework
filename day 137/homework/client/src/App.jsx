import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PersonalBlog from './pages/PersonalBlog'
import PhotoPortfolio from './pages/PhotoPortfolio'
import TravelBlog from './pages/TravelBlog'
import CulinaryBlog from './pages/CulinaryBlog'
import FitnessBlog from './pages/FitnessBlog'
import MusicBlog from './pages/MusicBlog'
import MovieReviews from './pages/MovieReviews'
import GamingBlog from './pages/GamingBlog'
import NewsPortal from './pages/NewsPortal'

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-zinc-900 min-h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<PersonalBlog />} />
          <Route path="/photos" element={<PhotoPortfolio />} />
          <Route path="/travel" element={<TravelBlog />} />
          <Route path="/culinary" element={<CulinaryBlog />} />
          <Route path="/fitness" element={<FitnessBlog />} />
          <Route path="/music" element={<MusicBlog />} />
          <Route path="/movies" element={<MovieReviews />} />
          <Route path="/games" element={<GamingBlog />} />
          <Route path="/news" element={<NewsPortal />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
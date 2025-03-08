import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import User from './Pages/Users/User.jsx'
import Post from './Pages/posts/post.jsx'
import Footer from './Layout/Footer.jsx'
import Navbar from './Layout/Navbar.jsx'
import Alboms from './Pages/posts/Alboms.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Alboms />} />
        <Route path="/post" element={<Post />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)

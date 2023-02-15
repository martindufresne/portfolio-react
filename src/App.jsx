import React from 'react'
import StarRating from './components/StarRating'
import Contact from './contents/Contact'
import Search from './components/Search'
import ContactForm from './components/ContactForm'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom"

function Home() {
  return <h2>Acceuil</h2>
}

function About() {
  return <h2>A propos</h2>
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
            <Link to="/apropos">A propos</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
            <li>
            <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
        <div><Search/></div>
        <div><StarRating rating={3}/></div>
        <div><ContactForm /></div>
        
        
        <Routes>
          <Route path="/apropos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App

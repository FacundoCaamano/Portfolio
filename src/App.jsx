import './App.css'
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { Home } from './/components/pages/home/Home';
import { Contact } from './components/pages/contact/Contact';
import { Projects } from './components/pages/projects/Projects';
function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <section className='menu'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/home"/>} />
          </Routes>
        </section>
        <Footer />
      </Router>
    </div>
  )
}

export default App

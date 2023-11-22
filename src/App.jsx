import './App.css'
import { Footer } from './components/footer/Footer';
import { NavBar } from './components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { Home } from './/components/pages/home/Home';
import { Contact } from './components/pages/contact/Contact';
import { Projects } from './components/pages/projects/Projects';
import { useEffect, useState } from 'react';
function App() {
  const [isDarkMode , setIsDarkMode] = useState(false);

  useEffect(() => {
    // Obtener el valor del localStorage cuando se monta el componente
    const storedIsDarkMode = localStorage.getItem('isDarkMode');

    // Si hay un valor almacenado, actualizar el estado con ese valor
    if (storedIsDarkMode) {
      setIsDarkMode(JSON.parse(storedIsDarkMode));
    }
  }, []);

  useEffect(() => {
    // Guardar el valor de isDarkMode en el localStorage cuando cambie
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <div className={isDarkMode ? 'App darkMode' : 'App'}>
      <Router>
        <NavBar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <section className='menu'>
          <Routes>
            <Route path="home" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="projects" element={<Projects isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
            <Route path="Contact" element={<Contact isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>} />
            <Route path="*" element={<Navigate to="home"/>} />
          </Routes>
        </section>
        <Footer isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </Router>
    </div>
  )
}

export default App

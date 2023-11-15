import './App.css'
import { Footer } from './assets/components/footer/Footer';
import { NavBar } from './assets/components/navbar/navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './assets/components/pages/home/Home';
import { Contact } from './assets/components/pages/contact/Contact';
import { Projects } from './assets/components/pages/projects/Projects';
function App() {
  return (
    <div className='App'>
     <Router>
        <NavBar />
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/projects" element={<Projects/>} />
          <Route path="/Contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App

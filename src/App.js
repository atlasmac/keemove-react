import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Consultation from './components/Consultation';
import Calendly from './components/Calendly';
import CalendlyMobile from './components/CalendlyMobile';
import Resources from './components/Resources';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path='/' element={
          <>
            <About />
            <Consultation />
            {/* <Calendly /> */}
            <CalendlyMobile />
            <Resources />
          </>
        } />
        <Route path='*' element={
          <h1>Error</h1>
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

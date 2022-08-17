import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Consultation from './components/Consultation';
import Start from './components/Start';
import Regulation from './components/Regulation';
import Structure from './components/Structure';
import CalendlyButton from './components/CalendlyButton';
import Resources from './components/Resources';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';



function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path='/' element={
          <>
            <About />
            <Start />
            <Regulation />
            <Structure />
            <Consultation />
            <FormspreeProvider project='2011689111676517690'>
              <ContactPage />
            </FormspreeProvider>
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

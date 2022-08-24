import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FormspreeProvider } from '@formspree/react';
import Header from "./components/Header";
import Home from './components/Home';
import About from './components/About';
import Consultation from './components/Consultation';
import Start from './components/Start';
import Regulation from './components/Regulation';
import Structure from './components/Structure';
import Resources from './components/Resources';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Home />
              <About />
              <Consultation />
              
            </>
          }
        />
        <Route
          path='/GetStarted'
          element={
            <>
              <Start />
              <Regulation />
              <Structure />
            </>
          }
        />
        <Route
          path='/Resources'
          element={
            <>
              <Resources />
            </>
          }
        />
        <Route path='*' element={
          <h1>Error</h1>
        } />
      </Routes>
      <FormspreeProvider project='2011689111676517690'>
        <ContactPage />
      </FormspreeProvider>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';
import Consultation from './components/Consultation';
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
            <Consultation />
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

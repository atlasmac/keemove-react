import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Home />
      <Routes>
        <Route path='/' element={
          <>
            
          </>
        } />
        <Route path='*' element={
          <h1>Error</h1>
        } />
      </Routes>

    </Router>
  );
}

export default App;

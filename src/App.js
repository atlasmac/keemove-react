import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Consultation from "./components/Consultation";
import Start from "./components/Start";
import Regulation from "./components/Regulation";
import Structure from "./components/Structure";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import Slideshow from "./components/Slideshow";
import Testimonial from "./components/Testimonial";
import images from "./images.json";
import posts from "./posts.json";
import Privacy from "./components/Privacy";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Slideshow colors={images} />
              <Testimonial colors={posts} />
              <Consultation />
            </>
          }
        />
        <Route
          path="/GetStarted"
          element={
            <>
              <Start />
              <Regulation />
              <Structure />
            </>
          }
        />
        <Route
          path="/Resources"
          element={
            <>
              <Resources />
            </>
          }
        />
        <Route
          path="/Privacy"
          element={
            <>
              <Privacy />
            </>
          }
        />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
      <ContactPage />
      <Footer />
    </Router>
  );
}

export default App;

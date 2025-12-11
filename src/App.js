import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Consultation from "./components/Consultation";
import WhatWeDo from "./components/WhatWeDo";
import Regulation from "./components/Regulation";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import Testimonial from "./components/Testimonial";
import posts from "./posts.json";
import Privacy from "./components/Privacy";
import PatientTools from "./components/PatientTools";
import ScrollToTop from "./components/ScrollToTop";
import NewsletterPopup from "./components/NewsLetterPopup";

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Testimonial colors={posts} />
              <Consultation />
              <NewsletterPopup />
            </>
          }
        />
        <Route
          path="/Help"
          element={
            <>
              <Regulation />
            </>
          }
        />
        <Route
          path="/WhatWeDo"
          element={
            <>
              <WhatWeDo />
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
          path="/PatientTools"
          element={
            <>
              <PatientTools />
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

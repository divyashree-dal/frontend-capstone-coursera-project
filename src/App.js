import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Highlights from "./components/highlights/Highlights";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import Order from "./pages/Order";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        {/* Default Page with Sections */}
        <Route
          path="/"
          element={
            <main>
              <Header />
              <section className="py-20 min-h-screen">
                <Hero />
              </section>
              <section className="py-12">
                <Highlights />
              </section>
              <section className="py-12">
                <Testimonials />
              </section>
              <section className="py-12">
                <About />
              </section>
              <Footer />
            </main>
          }
        />
        {/* Other Pages for Navigation Links */}
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;

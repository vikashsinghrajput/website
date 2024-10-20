import "./App.css";
import Navbar from "./componets/Header";
import Home from "./pages/Home";
import Scroll from "./pages/Scroll";
import Desgin from "./componets/Desgin";
import PcardOne from "./componets/Photoshop/PcardOne";
import AppCard from "./componets/Photoshop/AppCard";
import Modal from "./componets/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <Desgin />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photoshop-work" element={<AppCard />} />
        <Route path="/contact-us" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;

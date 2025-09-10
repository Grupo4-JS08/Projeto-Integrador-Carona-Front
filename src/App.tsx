import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/sobreNos";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<SobreNos />} />
    </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
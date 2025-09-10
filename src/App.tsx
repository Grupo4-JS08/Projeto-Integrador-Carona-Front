import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import SobreNos from "./pages/sobrenos/sobreNos";
import Produto from "./pages/produto/Produto";

function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobrenos" element={<SobreNos />} />
      <Route path="/produto" element={<Produto />} />
    </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
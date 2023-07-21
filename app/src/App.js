import "./style.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import Footer from "./component/Layout/Footer/Footer"
import TC from "./component/Layout/TC/TC"
import BuyProperty from "./component/Layout/Services/BuyProperty"
import Services from "./component/Layout/Services/Services"



export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/tc" element={<TC />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/buyProperty" element={<BuyProperty />} />

        </Routes>
      <Footer />
    </Router>
  );
}
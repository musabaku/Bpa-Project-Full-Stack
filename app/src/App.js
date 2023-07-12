import "./style.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import Footer from "./component/Layout/Footer/Footer"
import TC from "./component/Layout/TC/TC"

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/tc" element={<TC />} />
        </Routes>
      <Footer />
    </Router>
  );
}
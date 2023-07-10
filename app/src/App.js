import "./style.css";
import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import Footer from "./component/Layout/Footer/Footer"
export default function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />

    </div>
  );
}

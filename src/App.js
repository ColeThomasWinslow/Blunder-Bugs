import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./InfoContent/NavBar/NavBar";
import GettingStarted from "./InfoContent/GettingStarted/GettingStarted";
import Pricing from "./InfoContent/Pricing/Pricing";
import HomePage from "./InfoContent/HomePage/HomePage";
import Footer from "./InfoContent/Footer/Footer";
// import Dashboard from "./Dashboard/Dashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/GettingStarted" element={<GettingStarted />} />
          {/* <Route path="/" element={<Dashboard />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

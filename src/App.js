import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./InfoContent/NavBar/NavBar";
import GettingStarted from "./InfoContent/GettingStarted/GettingStarted";
import Pricing from "./InfoContent/Pricing/Pricing";
import HomePage from "./InfoContent/HomePage/HomePage";
import Footer from "./InfoContent/Footer/Footer";
import Dashboard from "./Dashboard/Dashboard";
import TopBar from "./Dashboard/TopBar";
import DashNav from "./Dashboard/DashNav/DashNav";
import Assigned from "./Dashboard/Assigned/Assigned";
import CreateNew from "./Dashboard/CreateNew/CreateNew";
function App() {
  const User = false;
  return (
    <div className="App">
      <Router>
        {User ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Pricing" element={<Pricing />} />
              <Route path="/GettingStarted" element={<GettingStarted />} />
            </Routes>
            <Footer />
          </>
        ) : (
          <div className="Application">
            <DashNav />
            <div className="Pages">
              <TopBar />
              <div className="Content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/Assigned" element={<Assigned />} />
                  <Route path="/Create" element={<CreateNew />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </Router>
    </div>
  );
}

export default App;

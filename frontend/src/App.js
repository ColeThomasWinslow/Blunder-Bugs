import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./InfoContent/NavBar/NavBar";
import GettingStarted from "./InfoContent/GettingStarted/GettingStarted";
import Pricing from "./InfoContent/Pricing/Pricing";
import HomePage from "./InfoContent/HomePage/HomePage";
import Footer from "./InfoContent/Footer/Footer";
import Dashboard from "./Tracker/Dashboard/Dashboard";
import TopBar from "./Tracker/TopBar";
import DashNav from "./Tracker/DashNav/DashNav";
import Roles from "./Tracker/Roles/Roles";
import Projects from "./Tracker/Projects/Projects";
import MyProjects from "./Tracker/MyProjects/MyProjects";
import Issues from "./Tracker/Issues/Issues";
import UserProfile from "./Tracker/UserProfile/UserProfile";

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
                  <Route path="/Roles" element={<Roles />} />
                  <Route path="/Projects" element={<Projects />} />
                  <Route path="/MyProjects" element={<MyProjects />} />
                  <Route path="/Issues" element={<Issues />} />
                  <Route path="/User" element={<UserProfile />} />
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

import React from "react";
import { Link } from "react-router-dom";
function NavElements() {
  return (
    <div>
      <Link to="/">Dashboard</Link>
      <Link to="/Create">Create Issue</Link>
      <Link to="/Assigned">Assigned Issue</Link>
    </div>
  );
}

export default NavElements;

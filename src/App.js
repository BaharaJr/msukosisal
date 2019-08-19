import React from "react";
import MainRoutes from "./feats/MainRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <MainRoutes />
      </div>
    </div>
  );
}

export default App;

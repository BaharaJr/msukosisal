import React from "react";
import MainRoutes from "./feats/MainRoutes";
import Navbar from "./components/Navbar";
// import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <MainRoutes />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

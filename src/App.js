import React from "react";
import Info from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <div className="card-container">
        <Info />
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;

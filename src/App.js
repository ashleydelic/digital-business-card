import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import "./index.css";


function App() {
  return (
    <div className="app-container">
      <div className="app-container-two">
        <Header />
        <Main />
        <Footer />
        </div>
    </div>
  );
}

export default App;

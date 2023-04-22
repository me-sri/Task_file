import React, { useState, useEffect } from "react";
import "./App.css";
// import components file

import About from "./Component/About";
import Footer from "./Component/Footer";
import Heathcare from "./Component/Heathcare";
import Claimscare from "./Component/Claimscare";
import Utiliziemanange from "./Component/Utiliziemanange";
import Consultingcare from "./Component/Consultingcare";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import Navbar from "./Component/Navbar";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


const App = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 1000) {
      // replace 1000 with your desired scroll position
      setShowNotification(true);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Hello, I just reached the bottom of this page!";
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url);
    setShowNotification(false);
  };
  return (
    <>
      <div>
        {showNotification && (
          <button
            onClick={handleWhatsAppClick}
            className="contact-message-box btn-wb "
          >
            {" "}
            <i class="fab fa-whatsapp wb"></i>
          </button>
        )}

        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Heathcare" component={Heathcare} />
            <Route path="/Claimscare" component={Claimscare} />
            <Route path="/Utiliziemanange" component={Utiliziemanange} />
            <Route path="/Consultingcare" component={Consultingcare} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
};

export default App;

import React from "react";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Project from "./components/Project/";
import About from "./components/About/";
import Contact from "./components/Contact/";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <switch>
        <Route exact path="/" component={About} />
        <Route exact path="/" component={Project} />
        <Route exact path="/" component={Contact} />
        {/* <Route component={NoMatch} /> */}
        </switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

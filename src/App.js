import React from "react";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Project from "./components/Project/";
import About from "./components/About/";
import Contact from "./components/Contact/";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        {/* <About /> */}
        <Switch>
        <Route exact path="/" component={About} />
        <Route exact path="/Project" component={Project} />
        <Route exact path="/Contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

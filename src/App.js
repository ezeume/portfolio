import React from "react";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Project from "./components/Project/";
import About from "./components/About/";
import Contact from "./components/Contact/"



function App() {
  return (
  <>
  <Header />
  <About />
  <Project />
  {/* <Project title="Car Amplify"/>
  <Project title="Team Generator"/>
  <Project title="Food Finder"/>
  <Project title="Car Amplify"/>
  <Project title="Team Generator"/> */}
  <Contact />
  <Footer />
  </>
  )
};

export default App;

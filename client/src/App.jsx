import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

import { data } from "./resumeData.js";

const App = () => {
  return (
    <div className="App">
      <Header data={data.main} />
      <Resume data={data.resume} />
      <Portfolio data={data.portfolio} />
      <Contact data={data.main} />
      <About data={data.main} />
      <Footer data={data.main} />
    </div>
  );
};

export default App;

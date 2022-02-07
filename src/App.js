import React from 'react';
import "./App.css";

import { Header, Footer, WhatGTP, Features, Blog,Possibility } from "./containers";
import { Cta, Brand, Navbar } from "./components";





const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header/>
      </div>
      <Brand />
      <WhatGTP />
    <Features/>
      <Possibility />
      <Cta />
      <Footer/>
    </div>
  )
}

export default App;

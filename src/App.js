import "./App.css";
// components imports
import Navbar from "./components/navbar/Navbar";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";

// containers imports
import Header from "./containers/header/Header";
import WhatGPT3 from "./containers/whatGPT3/WhatGPT3";
import Features from "./containers/features/Features";
import Possibility from "./containers/possibility/Possibility";
import Blog from "./containers/blog/Blog";
import Footer from './containers/footer/Footer'

function App() {
  return (
    <>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;

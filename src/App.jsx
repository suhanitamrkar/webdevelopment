import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Banner from "./Components/Banner";

function App() {
  return (
    <>
    <div className="bg-slate-600">
    <Navbar />
    <Banner/>
    <Card title={'helo this is suhani'} />
    <Footer/>
    </div>
      
    </>
  );
}

export default App;

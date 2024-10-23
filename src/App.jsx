import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Card from "./Components/Card";
import Banner from "./Components/Banner";
import Form from "./Components/Form";
import { useSelector } from "react-redux";

function App() {
  const count = useSelector ((state) => state.counter.value)
  return (
    <>
    <div className="">
      {count}
    <Navbar />
    {/* <Form/> */}
    <Banner/>
    <Card title={'helo this is suhani'} />
    <Footer/>
    </div>
      
    </>
  );
}

export default App;

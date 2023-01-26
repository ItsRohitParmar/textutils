import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Fragment } from "react";
import About from "./components/About/About";
function App() {
  return (
    <Fragment>
      <Router>
       <Navbar title="TextEditor" aboutText="About TextEditor" />
       <Routes>
        <Route exact path="/" element={<Form heading="Enter the text to analyze"/>}/>
        <Route exact path="/about" element={<About/>}/>
       </Routes>
       <Footer/>
       </Router>
    </Fragment>
  );
}

export default App;

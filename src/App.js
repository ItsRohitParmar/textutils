import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
       <Navbar title="Textutils" aboutText="About Textutils" />
       <Form heading="Enter the text to analyze"/>
       <Footer/>
    </>
  );
}

export default App;

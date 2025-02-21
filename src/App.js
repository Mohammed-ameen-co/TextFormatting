import React,{ useState } from "react";
// import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
        setAlert({
          message:message,
          type:type
        })
        setTimeout(()=>{
          setAlert(null);
        },1500);
  }
 const toggleMode = {
  darkBlue: ()=>{
    
    setMode('dark');
    document.body.style.backgroundColor = "#042743";
    showAlert("Dark blue mode has bin enable","success")
  },
  darkRed: ()=>{
    setMode('dark');
    document.body.style.backgroundColor = "#080000";
    showAlert("Dark red mode has bin enable","success")
  },
  darkGreen: ()=>{
    setMode('dark');
    document.body.style.backgroundColor = "#001a00";
    showAlert("Dark green mode has bin enable","success")
  },
  whiteMode: () =>{
    setMode('light');
    document.body.style.backgroundColor = "white";
    showAlert("Light mode has bin enable","success")
  }
 }

  return (
    <>
    {/* <Router> */}
      {/* <Routes>
          <Route path="/about" element={<About mode={mode} toggleMode={toggleMode} />} /> */}
          {/* <Route path="/"element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>}/> */}
        {/* </Routes> */}
      {/* </Router> */}
          <NavBar title="TextFormatting" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert}/>
          <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>
      </div>
    </>
  );
}

export default App;

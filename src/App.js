import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';



function App() {
   const [mode,setMode] = useState('light');
   const [alert,setAlert] = useState(null); // Here alert is an object having two properties : message and type
   
   const toggleMode = ()=>{
      if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been Enabled!!","success")
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been Enabled!!","success")
      }
   }

   const showAlert = (message,type)=>{
      setAlert({
        msg : message,
        type : type
      })

      setTimeout(()=>{
        setAlert(null)
      },1500)
   }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/" element={<Textform heading="Enter the text to be analysed below!!" mode={mode} showAlert={showAlert}/>}/>
    </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;

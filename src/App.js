// import logo from './logo.svg';
import { useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import {
  Switch,
  Route,
} from "react-router-dom";
function App() {
  
  const [alert, setAlert] = useState(null);
   const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      showAlert("dark mode enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode enabled", "success");

    }
   }
   
   const showAlert = (massage, type) =>{
      setAlert({
        msg :massage,
        ty : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
   }
   
  const [mode, setMode] = useState('light');
  
  return (
    <>
    
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert = {alert}/>
      <Switch>
        <Route exact path="/about">
          <About mode =  {mode}/>
        </Route>
        <Route path="/">
          <TextForm mode={mode} showalert={showAlert}/>
        </Route>
      </Switch>
    </>
  );
}

export default App;

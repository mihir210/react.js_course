// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  
  
   const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#212529';
      <Alert alert="Dark mode Enabled"/>
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      <Alert alert="Light mode Enabled"/>
    }
   }
  const [mode, setMode] = useState('light');
  return (
    <>

<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>

<TextForm mode={mode} />

      {/* <About/> */}
    </>
  );
}

export default App;

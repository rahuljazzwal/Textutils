import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react';



function App() {
  const [mode, setmode] = useState('light');
  const enableMode=(cls)=>{
    setdefault();
    document.body.classList.add('bg-'+cls);
    setmode(cls);
    setAlert('success', 'Changed to '+cls+' mode');
    setInterval(()=>{
      document.title = 'Enter Text';
    },1000)
    setInterval(()=>{
      document.title = 'Change Your Text';
    },1500)
    setInterval(()=>{
      document.title = 'Textutils';
    },2000)
  }

  const setdefault=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-danger');
  }
  const [alert, myalert] = useState(null)
  const [alertmsg, myalertmsg] = useState(null)
  const setAlert = (status, msg)=>{
    setTimeout(() => {
      myalert(null)
    }, 2000);
    myalert(status)
    myalertmsg(msg)
  }
  
  return (
    <>
    <Navbar title='Textutils' about='myabout' enableMode={enableMode}/>
    <Alert alert={alert} alertmsg = {alertmsg}/>
    <div className="container">
      <Textform setAlert = {setAlert} mode={mode}/>
    {/* <About/> */}
    </div>
    </>

  );
}

export default App;

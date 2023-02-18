import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  //THIS IS THE USESTATE FOR THE MODE
  const [mode, setmode] = useState("light")
  //THIS IS THE USESTATE FOR THE ALERT
  const [alert, setalert] = useState(null)
  //THIS IS THE FUNCTION THAT SET THE ALERT
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    //the below function will automatically dismiss the alert
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }
  // we dont need to pass  the showalert inside the navbar to see the alert as we change the mode as we have declared the functioning of the mode inside the app.js only so pass the showalert inside the below function only 
  const toggle = () => {
    if (mode === "light") {
      setmode("dark")
      document.body.style.backgroundColor = '#06293c'
      showalert("Dark mode enabled", "success")


    }
    else {
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showalert("Light mode enabled", "success")
      

    }
  }
  return (
    <>
      <Navbar tittle="LEGEND" mode={mode} toggle={toggle} />
      
      <Alert alert={alert} />
      
      
      {/* we are enclosing the textform inside the div so that it appear in center */}
      <div className='container my-3' >
        {/* IN ORDER TO SEE THE ALERT AS WE PRESS THE FUNCTIONLAITY BUTTON WE NEED TO PASS  THE PARAMETER INSIDE THE TEXTFORM AS THE FUNCTIONING OF THE BUTTONS IS PRESENT INSODE THE TEXT FORM SO WE WILL USE THE CONCEPT OF PROPS TO SEE ALERT  */}
        <Textform heading="TEXT UTILTILES ,ENTER YOUR TEXT BELOW" mode={mode} showalert={showalert} />

      </div>


    </>

  );
}

export default App;

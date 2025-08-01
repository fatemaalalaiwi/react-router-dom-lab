// import { use } from "react";
import React, {useState} from "react";
import {Route, Routes} from 'react-router'
import NavBar from "./components/NavBar/NavBAr";
import MailBoxForm from "./components/MailBoxForm/MailBoxForm";
import MailBoxList from "./components/MailBoxList/MailBoxList";
import MailBoxDetails from "./components/MailBoxDetails/MailBoxDetails";
import './index.css';

const App =() => {

 const [mailboxes, setMailBoxes] = useState([])
 
 const addBox= (newBox) =>{
  newBox._id = mailboxes.length +1;
  setMailBoxes([...mailboxes, newBox]);
 }




  return (

    <>
    <NavBar />

    
  <Routes>
    <Route path="/" element={<main><h1 style={{color: '#4c6daaff' , display: 'flex',
        justifyContent: 'center', alignItems: 'center'}}>Post Office  📬  </h1></main>} />
    <Route path="/mailboxes" element={<MailBoxList mailboxes={mailboxes}/>} />
    <Route path='/mailboxes/:mailboxId' element={<MailBoxDetails mailboxes={mailboxes}/>}/>
    <Route path="/new-mailbox" element={<MailBoxForm addBox={addBox}/>  }/>
  </Routes>
    </>
  )
}
export default App;

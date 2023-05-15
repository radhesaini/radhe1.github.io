import React, { useState } from 'react'
import './ContactUs.css'


export const ContactUs = () => {
  const [name, setName] = useState('radhe');
  const [nameError, setNameError] = useState('');
  const [ocupType, setOcupType] = useState('');
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');



  function isValid(itemName, value){
    let regex;
    if(itemName === 'name'){
      regex = /[A-Za-z]{5,10}$/;
    }
    return regex.test(value);
  }

  const onContact = () => {
    if(isValid('name', name)){
      setNameError('');
    }
    else{
      setNameError('Enter a valid Name');
    }
    console.log
    console.log(name, ocupType, orgName, email, msg, nameError);
  }
  return (
    <div className='contact-main-container'>
    <div className='contact-container'>
      <div className="contact-form">
      <div className='heading-details'>
        <h1>Contact Form</h1>
      </div >
        
        
        <label htmlFor="">Name</label>
        <input id='name' name='name' type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
        <p style={{color: 'red'}}>{nameError}</p>


        <label htmlFor="">Ocuupation Type</label>
        <input id='ocup_type' name='ccup_type' type="text" value={ocupType} onChange={(e)=>setOcupType(e.target.value)}/>

        <label htmlFor="">Organization / Instiute Name</label>
        <input id='org_name' name='org_name' type="text" value={orgName} onChange={(e)=>setOrgName(e.target.value)}/>

        <label htmlFor="">Email</label>
        <input id='email' name='email' type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />

        <label>Message</label>
        <textarea name="msg" id="msg" cols="30" rows="10" value={msg} onChange={(e)=>setMsg(e.target.value)}>

        </textarea>
      <div className="savebtn">
        <button type='submit' onClick={onContact}>
          Send
        </button>
      </div>
      </div>
    </div>
    </div>
  )
}

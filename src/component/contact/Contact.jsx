import React,{useState} from 'react'
import './contact.scss'
function Contact() {
  const [message , setMessage]= useState(false)
  const handleSubmite = (e)=>{
    e.preventDefault()
    setMessage(true)
  }
  return (
  <div className="contact" id='contact'>
  <div className="left">
    <img src="./assets/rgg.webp" alt="" />
  </div>
  <div className="right">
    <h2>Contact</h2>
    <form action=""    onSubmit={handleSubmite}>
      <input type="text" name="" id=""  placeholder='Email'/>
   <textarea placeholder='Message'></textarea>
   <button type='submit'>send</button>
   {message && <span>Thanks , i'll reply asap</span>}
    </form>
  </div>
  </div>
  )
}

export default Contact
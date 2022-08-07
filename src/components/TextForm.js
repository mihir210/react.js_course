import React, { useState } from 'react'






export default function TextForm() {
   const handleUpclick = () =>{
      let newtext = atext.toUpperCase();
      setaText(newtext);
      setHead("uppercase converted text ");
   }
   const handleOnChange = (event) =>{
      setaText(event.target.value);
   }
   
   const resetall = () =>{
      setaText('Enter the text ');
      setHead('Enter text here')
   }
   const [atext, setaText] = useState('Enter text here');
   const [head, setHead] = useState('Enter the text ')
    return (
      
      <div className="container">
         
         <div className="mb-3 my-4">
            <label htmlFor="exampleFormControlTextarea1" className="form-label ">{head}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleOnChange} placeholder='enter text' value={atext}></textarea>
         </div>
      <button className='btn btn-primary' onClick={handleUpclick}>Convert to upper case</button>
      
      
      
      <input class="btn btn-primary mx-5" type="reset" value="Reset" onClick={resetall}/>
      </div>
   
    )
}
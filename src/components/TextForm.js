import React, { useState } from 'react'






export default function TextForm(props) {
   const handleUpclick = () =>{
      let newtext = atext.toUpperCase();
      setaText(newtext);
      setHead("uppercase converted text ");
   }
   const handleOnChange = (event) =>{
      setaText(event.target.value);
   }
   
   const resetall = () =>{
      setaText('');
      setHead('Enter text here')
   }
   const handleLowerclick = () =>{
      let newtext = atext.toLowerCase();
      setaText(newtext);
      setHead("lowercase converted text ");
   }
   
   const handleCopy = () =>{
      var text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
   }
   const [atext, setaText] = useState('');
   const [head, setHead] = useState('Enter the text ')
    return (
      <>
      <div className="container">
         
         <div className="mb-3 my-4">
            <label htmlFor="exampleFormControlTextarea1" className={`form-label  text-${props.mode==='dark' ? 'light':'dark'}`}>{head}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleOnChange} placeholder='enter text' value={atext} ></textarea>
         </div>
      <button className='btn btn-primary' onClick={handleUpclick}>Convert to upper case</button>
      <button className='btn btn-primary mx-5' onClick={handleLowerclick}>Convert to Lower case</button>
      
      
      
      <input class="btn btn-primary mx-5" type="reset" value="Clear text" onClick={resetall}/>
      <button className='btn btn-primary mx-5' onClick={handleCopy}>Copy text</button>
      
      </div>
      <div className={`container my-3 text-${props.mode==='dark' ? 'light':'dark'}`}>

         <p>{atext.split(' ').length} words and {atext.length} characters</p>
         <p>{0.008 *atext.split(' ').length } minutes read</p>
      
      
      <hr />
      <h2>preview</h2>
      <p>{atext}</p>
      </div>
   </>
    )
}
import React, { useState } from 'react'






export default function TextForm(props) {
   
   const handleUpclick = () =>{
      let newtext = atext.toUpperCase();
      setaText(newtext);
      setHead("uppercase converted text ");
      props.showalert("converted to upper case", "success");
   }
   const handleOnChange = (event) =>{
      setaText(event.target.value);
   }
   
   const resetall = () =>{
      setaText('');
      setHead('Enter text here')
      props.showalert("reset the text", "success")
   }
   const handleLowerclick = () =>{
      let newtext = atext.toLowerCase();
      setaText(newtext);
      setHead("lowercase converted text ");
      props.showalert("converted to lower case", "success")
   }
   
   const handleCopy = () =>{
      props.showalert("copiied text", "success");
      var text = document.getElementById('exampleFormControlTextarea1');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
        
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
      <button disabled={atext.length===0} className='btn btn-primary mx-5 my-3' onClick={handleUpclick}>Convert to upper case</button>
      <button disabled={atext.length===0} className='btn btn-primary mx-5 my-3' onClick={handleLowerclick}>Convert to Lower case</button>
      
   
      <input disabled={atext.length===0} className="btn btn-primary mx-5 my-3" type="reset" value="Clear text" onClick={resetall}/>
      <button disabled={atext.length===0} className='btn btn-primary mx-5 my-3' onClick={handleCopy}>Copy text</button>
      
      </div>
      <div className={`container my-3 text-${props.mode==='dark' ? 'light':'dark'}`}>

         <p>{atext.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {atext.length} characters</p>
         <p>{0.008 *atext.split(' ').filter((element)=>{return element.length!==0}).length } minutes read</p>
      
      
      <hr />
      <h2>preview</h2>
      <p>{atext.length>0?atext:"nothing to preview"}</p>
      </div>
   </>
    )
}
import React ,{useState}from 'react'
let d="Enter your text here";

export default function Form() {
    
    const clickhandle = (e) =>{
        e.preventDefault();
        console.log("Button was clicked");
        let newText=text.toUpperCase();
        settext(newText);
        
    }
    const resethandle =()=>{
        console.log("Site reload");
        settext(d);


    }
    const handleonchange = (event) =>{
        console.log("On change");
        settext(event.target.value);
    }
     const lchandle =(e)=>{
        e.preventDefault();
        console.log("LC button clicked");
        settext(text.toLowerCase());
     }

    const [text,settext]= useState(d);
  return (
    <>
    
      < div className='container'>
      <div className="mb-3">
  <h2 className='my-3'>Example textarea</h2>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleonchange} rows="6"></textarea>
  </div>
  <button type="submit" className="btn btn-primary" onClick={clickhandle}>Convert To Uppercase </button>
  <button type="submit" className="btn btn-primary mx-3" onClick={resethandle}>Reset </button>
  <button type="submit" className="btn btn-primary " onClick={lchandle}>Convert to Lowercase </button>

  
</div>
<div className='container my-3'>
    <h1>Text Summary</h1>
    <p>{text.split(/\s+/).length} words and {text.length} characters</p>
    <p> Time taken to read: {0.008*text.split(" ").length} secs </p>
    <h2>
        Preview
    </h2>
    <p>{text}</p>
</div>
  
  






    
    </>
  )
}

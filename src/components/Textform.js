import React , { useState} from 'react'

export default function Textform(props) {
    const handleUpperCase = () => {
        //console.log("Uppercase Clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text has been converted to Uppercase","success")  
    }

    const handleLowerCase = ()=>{
        setText(text.toLowerCase())
        props.showAlert("Text has been converted to Lowercase","success")
    }

    const handleOnChange = (event)=>{
        //console.log("Onchange");
        setText(event.target.value)
    }

    const handleClearText = ()=>{
        setText("")
        props.showAlert("Text has been cleared","warning")
    }

    const handleCopyText = ()=>{
        let text = document.getElementById("myTextBox");
        //text.ariaSelected();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success")
    }

    const handleExtraSpaces = ()=>{
        setText(text.split(/[ ]+/).join(" "))
        props.showAlert("Removed Extra Spaces","success")
    }
    const [text,setText] = useState('');
  return (
   <>
    <div className='container'>
        <div className="form-group" style={{color : props.mode==='dark'?'white':'black'}}>
            <label htmlFor="myTextBox">{props.heading}</label>
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{color : props.mode==='dark'?'white':'black' , backgroundColor : props.mode==='dark'?'grey':'white'}} id="myTextBox" rows="8"></textarea>
            <div className="container my-2">
             <button className="btn btn-primary mx-2" onClick={handleUpperCase}>Convert to Uppercase</button>
             <button className="btn btn-primary mx-2" onClick={handleLowerCase}>Convert to Lowercase</button>
             <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
             <button className="btn btn-primary mx-2" onClick={handleCopyText}>Copy Text</button>
             <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.length>0? text.trim().split(/[ ]+/).length : 0} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} minutes required to read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Type something to preview it here"}</p>
    </div>
   </>
  )
}

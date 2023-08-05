// import { clear } from "@testing-library/user-event/dist/clear";
import React, {useState} from "react";

// react function component rfc //
export default function TextForm(props) {
    const handleUpClick =  () => {
        // console.log("Uppercase was clicked " +text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
       }
       const handleLoClick =  () => {
        // console.log("Lowercase was clicked " +text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
       }
       const handleClearClick =  () => {
        // console.log("clearText was clicked " +text);
        let newText = ' ';
        setText(newText);
        props.showAlert("Text was cleared" , "success");
       }
       const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard" , "success");
       }
       const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extraspaces was removed" , "success");
       }
   const handleOnChange =  (event) => {
   // console.log("On changed");
    setText(event.target.value);
   }
    const [text, setText] = useState('');
    // text = "new text" // wrong way to change the text
     //   setText("New Text");  // correct way to change the text

  return (
    <>
    <div className="container"  style = {{color : props.mode==='light'?'black':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
      <textarea className="form-control" value ={text} style = {{backgroundColor : props.mode==='light'?'white':'gray' , color : props.mode==='dark'?'white':'black'}} onChange = {handleOnChange} id="myBox" rows="8" ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick = {handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick = {handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick = {handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick = {handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick = {handleExtraSpaces}>Remove Extraspaces</button>
    </div>
    <div className="container my-3" style = {{color : props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  );
}

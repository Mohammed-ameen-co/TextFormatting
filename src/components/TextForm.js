import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState("");

    
    

    const handleUpClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to Uppercase", "success");
    }
    const handleLwClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to Lowercase", "success");
    }
    const handleTitleClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.toLowerCase().replace(/(?:^|\s)([a-z])/g, (match) => match.toUpperCase());
        setText(newText);
        props.showAlert("Convert to Title case", "success");
    }
    const handleStClick = ()=>{
        // console.log('Uppercase was clicked');
        let newText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert("Convert to Sentance case", "success");
    }
    const handleClear = ()=>{
        // console.log('Uppercase was clicked');
        let newText = '';
        setText(newText);
        props.showAlert("Clear all text", "success");
    }
    //this function is gonerate error
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        document.execCommand('copy');  
        props.showAlert("Copied to Clipboard ", "success");
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove extra spaces", "success");
    }

    function wordCounter(text) {
        if(!text) return 0;
        // Text ko split kar ke words ka array banaya jaata hai
        const words = text.trim().split(/\s+/); 
        // Agar array mein koi item nahi hai, toh word count 0 hoga
        return words.length === 1 && words[0] === '' ? 0 : words.length;
    }
        
    const handleOnChange = (event)=>{
        // console.log('On Change');
        setText(event.target.value);
        
    }
  return (
    <>
    <div className="container" style={{color:props.mode === `dark` ? `white` : `black`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="8" style={{backgroundColor:props.mode === `dark` ? `gray` : `white`, color:props.mode === `dark` ? `white` : `black`}} ></textarea>
        </div>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"  style={{backgroundColor:props.mode === `light` ? `gray` : `white`,color:props.mode === `light` ? `white` : `black`}}>
            Text Case
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
                <li><button className="btn btn-primary dropdown-item" onClick={handleUpClick}>UPPERCASE</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleLwClick}>lowercase</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleTitleClick}>Title Case</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleStClick}> Sentence case</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleExtraSpaces}> Remove Extra Spaces</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleCopy}> Copy</button></li>
                <li><button className="btn btn-primary dropdown-item" onClick={handleClear}> Clear</button></li>
            </ul>
        </div>
                {/* <button className="btn btn-primary" onClick={handleUndo}>Undo</button> */}

    </div>
    <div className="container my-3" style={{color:props.mode === `dark` ? `white` : `black`}}>
        <h1>Your text summary</h1>
        <p>{wordCounter(text)} words and {text.length} character</p>
        <p>{0.008 * wordCounter(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

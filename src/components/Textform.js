import React, {useState} from 'react'

function Textform(props) {
    const [text, setText] = useState('Enter your text');
    const textToUpperCase=()=>{
        setText(text.toUpperCase());
        props.setAlert('success', 'Text Converted to Upper Case');
    }
    const textToLowercase=()=>{
        setText(text.toLowerCase());
        props.setAlert('success', 'Text Converted to Lower Case');
    }
    const clearText=()=>{
        setText('');
        props.setAlert('warning', 'Text has been cleared');
    }
    const removeExtraSpaces=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.setAlert('success', 'Removed the extra spaces');
    }
    const copyText=()=>{
        var newText = document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value);
        props.setAlert('primary', 'Text Copied to Clipboard');
    }
    const onChangeClicked=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
        <div className='container'>
        <h2 style = {props.mode === 'light'? {color:'black'}: {color: 'white'}}>Enter Your text to Analyse</h2>
        <div className='mb-3' style = {{border: 'solid 4px yellow', color: 'grey'}}>
            <textarea className='form-control' onChange={onChangeClicked}  id='myBox' rows='8' style = {{backgroundColor: '#70A6B0'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" style={props.mode === 'primary'?{border: 'solid 5px black'}:{border: ''}} onClick={textToUpperCase}>Convert to Upercase</button>
        <button className="btn btn-primary mx-2" style={props.mode === 'primary'?{border: 'solid 5px black'}:{border: ''}} onClick={textToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" style={props.mode === 'primary'?{border: 'solid 5px black'}:{border: ''}} onClick={clearText}>Clear All</button>
        <button className="btn btn-primary mx-2" style={props.mode === 'primary'?{border: 'solid 5px black'}:{border: ''}} onClick={removeExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" style={props.mode === 'primary'?{border: 'solid 5px black'}:{border: ''}} onClick={copyText}>Copy To Clipboard</button>
        </div>
        <div className="container my-3" style = {props.mode === 'light'? {color:'black'}: {color: 'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.length>0?text.trim().split(" ").length:0} word and {text.length} characters</p>
            <p>{0.5 * text.split(" ").length} seconds to read the Paragraph</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
    </>
  )
}
export default Textform

import React, { useState } from 'react'



export default function Form(props) {
    const [text, setText] = useState('');

    
    //This function stores the value of textarea in a state named as text.
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    //This arrow funtion converts the text string value to upercase.
    const UpperCase = () => {
        setText(text.toUpperCase());
    }

    //This arrow function converts the text string value to lowercase.
    const LowerCase = () => {
        setText(text.toLowerCase());
    }

    //This arrow function removes the extra spaces from text
    const RemoveSpace = () => {
       let data = text.replace( /\s\s+/g, ' ' );
        setText(data.trim());
    }
    // This Arrow function removes numbers from string
    const RemoveNumbers = () => {
        let questionText = text.replace(/[0-9]/g, '');
        setText(questionText);
    }

    // This Arrow function copies all the text to Clipboard.
    const Copy = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Text copied to clipboard');
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            })
    }

    // This Arrow function clear all the text.
    const ClearText = () => {
        setText('');
    }

    //This Arrow functions is to save Text as a Note
    const SaveText = ()=>{
        console.log("Successfully saved text in iNoteBook")
    }

    return (
        <>
            <h3 className='m-2 text-center'>{props.heading}</h3>

            <div className="form-group m-5">
                <textarea className="form-control my-3" placeholder='Enter text here...' value={text} id="textBox" onChange={handleOnChange} rows="8"></textarea>
                <button type="button" disabled={text.length === 0} onClick={UpperCase} className="btn m-2 btn-primary">Convert To UpperCase</button>
                <button type="button" disabled={text.length === 0} onClick={LowerCase} className="btn m-2 btn-primary">Convert To Lower Case</button>
                <button type="button" disabled={text.length === 0} onClick={RemoveSpace} className="btn m-2 btn-primary">Remove Extra Spaces</button>
                <button type="button" disabled={text.length === 0} onClick={RemoveNumbers} className="btn m-2 btn-primary">Remove Numbers</button>
                <button type='button' disabled={text.length === 0} onClick={Copy} className="btn m-2 btn-primary">Copy Text</button>
                <button type="button" disabled={text.length === 0} onClick={ClearText} className="btn m-2 btn-danger"> Clear All Text</button>
                <button type="button" disabled={text.length === 0} onClick={SaveText} className="btn m-2 btn-success"> Save in iNoteBook</button>

            </div>

        </>
    )
}

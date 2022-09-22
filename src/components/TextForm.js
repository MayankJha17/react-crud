import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () => {

        let upText = text.toUpperCase();
        setText(upText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("Enter the Text");
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <h4>{props.title}</h4>
                <div className="my-3">
                    <textarea className="form-control" id="mybox" rows="3" value={text} onChange={handleOnChange}></textarea>
                    <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                </div>
            </div>
            <div className="container">
                <div className="my-3">
                    <h3>Text Summary</h3>
                    <p>Word Count is {(text.trim()).split(" ").length} and No. of characters is {text.length}</p>
                </div>
            </div>
        </>
    )
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired
}

// Setting default props

TextForm.defaultProps = {
    title: "Text Area",
    heading: "Enter the text"
}

import React, { useState } from 'react'//here we are importing the use state hook from the react
//INSIDE THE TEXTFORM WE USE THE CONCEPT OF THE STATE :IN THESE CONCEPT WE TAKE THE CONTENT INSIDE THE TEXTFORM AS AN VARIABLE WHICH WE CAN UPDATE OR CHANGE
export default function Textform(props) {

  const [text, settext] = useState("")//HERE WE HAVE INITIALIZED THE USESTATE HERE THE 'TEXT' IS THE VARIABLE WHICH HAS THE INITIAL VALUE OF ""(nothing) WHEN WE HAVE TO UPDATE THE 'TEXT' WE WILL USE THE SETTEXT' TO DO SO.
  //also always declare the the use state inside the function
  //also  we can never set the text directly ,we always need to use the settext to do so.

  // IN THE BELOW FUNCTION WE ARE ADDING THE FUNCTIONALLITY TO THE BUTTON:-


  const handleUPclick = () => {
    let newtext = text.toUpperCase();//we are creating the variable in which we are storing the upper case version of the content present inside the text area
    settext(newtext);// here we are changing the value of the text to the upper case by passing te uppercase version to the settext
    props.showalert("The text got converted to upper case!", "success")
  }
  const handleLOWERclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("The text got converted to lower case!", "success")
  }

  const handleclearclick = () => {
    settext("");
    props.showalert("The the text got cleared!", "success")
  }

  const handlecopyclick = () => {

    navigator.clipboard.writeText(text)
    props.showalert("The text got copied to the clipboard!", "success")
  }

  const handleremoveclick = () => {
    let extraspace = text.split(/[ ]+/)
    settext(extraspace.join(" "))
    props.showalert("The extra spaces got removed!", "success")
  }
  //IN ORDER TO ABLE TO WRITE INSIDE THE TEXT AREA WE NEED THE HANDLECHANGE FUNCTION BECAUSE WHEN WE WRITE INSIDE THE TEXTAREA THE VALUE OF THE TEXT CHANGE AS IT IS THE STATE VaRIABLE SO WE CAN'T CHANGE IT DIRECTLY SO WE NEED TO CHANGE IT USING THE SETTEXT
  const handleChange = (event) => {
    settext(event.target.value)//here we are saying that as soon as the text is writen inside the text area the ,we will update the text using the settext
  }

  return (
    <>
      <div className="mb-3" style={{ color: props.mode === "dark" ? "white" : "#06293c" }}>
        <h3>{props.heading}</h3>

        {/* here the value signify the content present inside the text area */}
        {/* IT IS IMP TO ADD THE ONCHANGE TO THE TEXT AREA */}
        <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "#06293c" }} onChange={handleChange} id="mybox" rows="8"></textarea>
        
        {/* IN THE BUTTON WE ARE ADDING THE ONCLICK TO ADD THE FUNCTIONALLITY TO THE BUTTON */}
        {/* we don't want that without the text also our button are working so we will use the disabled keyword whiv=which will disable the button when there is n text inside the text box */}
        <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUPclick}>CONVERT TO UPPERCASE</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleLOWERclick}>CONVERT TO LOWERCASE</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleclearclick}>CLEAR TEXT</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handlecopyclick}>COPY TEXT</button>
        <button disabled={text.length === 0} className="btn btn-primary my-1 mx-1" onClick={handleremoveclick}>REMOVE EXTRA SPACES</button>
      </div>
      <div className="container" style={{ color: props.mode === "dark" ? "white" : "#06293c" }}>
        <h1>YOUR TEXT SUMMARY</h1>
        {/* now to slove the problem of addition of the word with the spaces we will use the filter  */}
        {/* filter is the method which takes the arrow function */}
        {/* to fix the error due to the wrong word count as we add the word in the new line we will use the regular expression as /\s+/ */}
        <p>THE TEXT CONTAINS {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} WORDS AND {text.length} LETTERS</p>
        <h2>PREVIEW</h2>
        <p>{text}</p>
      </div>
    </>
  )
}

import React from 'react'

export default function Alert(props) {
  //in order to cappatalize the first letter of the word we will create a function
  const capitalize=(word)=>{
    const lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase()+lower.slice(1)//herer the slice will break the word in two parts seperating the 1st word and the remaing
  }
  //now so that our content don't shift down as we see the alert we will enclose the alert inside the div and we will set some height to the div

  return (
    <div style={{height:'50px'}}>
   {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    <strong> {capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>}
    </div>
  )
}

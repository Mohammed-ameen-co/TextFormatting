import React from 'react'

export default function Alert(props) {
    const capitalize = (word)=>{
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    <div style={{height:50}}>
    {props.alert &&  <div className={` container alert alert-${props.alert.type} alert-dismissible fade show w-85 d-flex justify-content-center align-items-center`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
    </div>}
    </div>
  )
}

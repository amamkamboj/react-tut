import React, { useState } from "react";

const Form = ()=>{
    let uname="";
    const [ intName, UpdateInput]=useState();

    const InputChange = (event)=>{
        console.log(event.target.value);
        uname=event.target.value;
        //UpdateInput(event.target.value);
    }
    const SubmitData = ()=>{
        UpdateInput(uname);
        
    }
    return(
        <>
        <div className="form">
            <h1>Hello {intName}</h1>
            <input type="text" placeholder="Enter Your name" onChange={InputChange}/>
            <button onClick={SubmitData}>Click me 👍</button>
        </div>

        </>
    );
}

export default Form;
import React, { useState } from "react";

const Form = ()=>{

    const [ uname, UpdateInput]=useState("");

    const [lname,UpFullName] = useState("");
    const [lastNameNew,SetLastName]=useState();
    const [fullName,SetFullName]=useState(uname);
    const InputChange = (event)=>{
       
        UpdateInput(event.target.value);
    }
    const SubmitData = ()=>{

        SetFullName(uname);
        SetLastName(lname);
    }
    const SetLastNm=(event)=>{
        UpFullName(event.target.value);
    }
    return(
        <>
        <div className="form">
        <br /><br /><br /><br />
        <br /><br /><br /><br />
            <h1>Hello {fullName} {lastNameNew}</h1>
            <input type="text" placeholder="Enter Your name" onChange={InputChange} value={uname}/>
            <br/>
            <input type="text" placeholder="Enter Your last name" onChange={SetLastNm} value={lname}/>
            <br />
            <button onClick={SubmitData}>Click me 👍</button>
        </div>

        </>
    );
}

export default Form;
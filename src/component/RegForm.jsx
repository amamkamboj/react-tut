import React, { useState } from "react";

const RegForm = () => {

    const [ formData, UpFormData ] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        qual:  "",

    });

    const SubmitData = (event)=>{
        event.preventDefault();
    }

    const InputChange= (event)=>{
        console.log(event.target);
        // array destructuring
        const {value,name} = event.target;
        UpFormData((preVal)=>{


            return {
                ...preVal,
                [name]:value,
            }

            // if(name === "fname"){
            //     return{
            //         fname:value,
            //         lname:preVal.fname,
            //         email:preVal.email,
            //         phone:preVal.phone
            //     };
            // }
            // else if(name === "lname"){
            //     return{
            //         fname:preVal.fname,
            //         lname:value,
            //         email:preVal.email,
            //         phone:preVal.phone
            //     };
            // }
            // else if(name === "email"){
            //     return{
            //         fname:preVal.fname,
            //         lname:preVal.lname,
            //         email:value,
            //         phone:preVal.phone
            //     };
            // }
            // else if(name === "phone"){
            //     return{
            //         fname:preVal.fname,
            //         lname:preVal.lname,
            //         email:preVal.email,
            //         phone:value
            //     };
            // }
        })
    }
    return(
        <>
        <h1>Login here {formData.fname} {formData.lname}</h1>
        <p> {formData.email} </p>
        <p> {formData.phone} </p>
        <p> {formData.qual} </p>
        <form>
            <input type="text" name="fname" onChange={InputChange} placeholder="Enter name" vlaue={formData.fname} />
            <br />
            <input type="text" name="lname" onChange={InputChange} vlaue={formData.lname} placeholder="Enter last name" />
            <br />
            <input type="email" name="email"  onChange={InputChange} vlaue={formData.email} placeholder="Enter email"/>
            <br />
            <input type="number" name="phone" onChange={InputChange} vlaue={formData.phone} placeholder="Enter phone number" />
            <br />
            <input type="text" name="qual" onChange={InputChange} vlaue={formData.qual} placeholder="Enter your qualification" />
            <br />
            <input type="submit" value="Regsiter" onSubmit={SubmitData} />
        </form>            
        </>
    );
}

export default RegForm;
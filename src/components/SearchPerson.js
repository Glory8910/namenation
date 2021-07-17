import React, { useState } from "react"
import "./searchPerson.css"


export default function SearchPerson(props) {

    let initialState = {
        name: "",
       
    }

    let [data,setData]=useState(initialState)

    let handeleChange=(e)=>{
        console.log(e.target.value,e.target)
        setData({[e.target.name]:e.target.value})
    }

    let handleSubmithere=(e)=>{
        e.preventDefault();
        console.log(data)
        props.handleSubmit(data);
        setData(initialState)
    }

    return (
        <>
     
            <form className="formdata col-md-10" onSubmit={handleSubmithere}>
                <div className="mb-3 col-6 box">
                    <label htmlFor="person-name" className="form-label">Enter Name</label>
                    <input type="text" required className="form-control" name="name" value={data.name} id="person-name" aria-describedby="emailHelp" onChange={handeleChange}/>

                </div>

                <button type="submit" className="btn btn-info subtn">Submit</button>
            </form>
        </>
    )
}
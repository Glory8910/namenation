import React, { useState } from "react"
import "./showarea.css"

export default function ShowArea(props) {



    const [countryname, setCountryname] = useState()

    const [countryflag, setCountryflag] = useState()



    let url2 = `https://restcountries.eu/rest/v2/alpha/${props.country_id}`

    fetch(url2).then(res => res.json()).then(result => {

        console.log(result.name, result.flag)

        setCountryname(result.name)

        setCountryflag(result.flag)



    }
    )

    console.log(countryname, countryflag)



    return (
        <>

            <div className="col-6 bordering"> 
                

                    <div className="card col-6 cardsplay" style={{backgroundColor: props.color}}>
                        <img className="card-img-top imgg" src={countryflag} alt={`flag of ${countryname}`} />
                        <div className="card-body">
                            <h5 className="card-title">{countryname}</h5>
                          
                        </div>
                        <div>
                            <div className=" cent"> Country Id - {props.country_id}</div>
                            <div className=" cent">Probabily - {props.probability}</div>
                        </div>

                    </div>
                </div>
 
        </>
    )
}
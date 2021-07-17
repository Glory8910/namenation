import React, { useState } from "react"
import SearchPerson from "./SearchPerson"
import ShowArea from "./ShowArea"
import "./mainholder.css"

export default function MainHolder() {




    let initial = {
        name: "",
        data: []

    }

    const [dataset, setDataset] = useState(initial)



    let handleSubmit = async (namecomp) => {


        console.log(namecomp)

        let PersonName = namecomp.name

        console.log(PersonName)

        let url = `https://api.nationalize.io/?name=${PersonName}`

        try {
            await fetch(url).then(res => res.json()).then(dataval => {

                setDataset({ name: dataval.name, data: dataval.country })
                console.log(dataval)

            })
        } catch (error) {
            alert(error)
        }




    }



    return (
        <>
            <div className="container">

                <SearchPerson handleSubmit={handleSubmit} />
                <h1>{dataset.name}</h1>

                <div className="row">
                    {

                        dataset.data.length <= 0 ? <div>No data Found</div> :
                            dataset.data.map((el, ind) => {
                                if (ind < 2) {

                                    let color = ind > 0 ? "rgb(237, 247, 248)" : "rgb(241, 197, 245)"

                                    return <ShowArea key={ind} color={color} name={dataset.name} country_id={el.country_id} probability={el.probability} />
                                }


                            })

                    }
                </div>
            </div>
        </>
    )
}


import React from "react"
import Feed from "./Feed"

export default function FoodList(props){
    const {foods} = props
    return (
        <div>
            {foods.map(food => <Feed {...food} key={food._id} />)}
        </div>
    )
}
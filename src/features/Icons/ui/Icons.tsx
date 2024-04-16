import React from "react";
import Apple from "../../../shared/Icons/apple/ui/apple";
import Google from "../../../shared/Icons/google/ui/google";
import Facebook from "../../../shared/Icons/Facebook/ui/Facebook";

export default function Icons(){
    const iconlist = [
    <Apple/>,
    <Google/>,
    <Facebook/>
    ]

    return(
        <ul className="flex justify-content gap-[30px]">
            {iconlist.map((iconlist,index)=>(
                <li key={index}>{iconlist}</li>
            ))}
        </ul>
    )
}
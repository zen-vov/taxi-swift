import React from "react";
import Apple from "../../../shared/Icons/apple/ui/apple";
import Google from "../../../shared/Icons/google/ui/google";
import Facebook from "../../../shared/Icons/Facebook/ui/Facebook";
import "./style.css";

export default function Icons(){
    const iconlist = [
        <Apple/>,
        <Google/>,
        <Facebook/>
    ];

    return (
        <ul className="flex items-center justify-center pr-[35px]">
            {iconlist.map((icon, index) => (
                <li className="item relative ml-[40px]" key={index}>
                    {icon}
                    <span className="circle"></span>
                </li>
            ))}
        </ul>
    );
}
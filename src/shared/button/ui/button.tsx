import React from "react";
import cn from "classnames";

interface ButtonProps{
    className?:string;
    title : string;
}

export default function Button({className, title}:ButtonProps){
    return(
        <button className={cn(className)}> 
            {title}
        </button>
    );
}
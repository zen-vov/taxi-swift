import React from "react";

export default function Loading(){
    return(
        <div className="relative bg-primary flex justify-center items-center">
            <p className="text-3xl">
                Swift
            </p>
            <img className="absolute" src="/cars/auto-row.png" alt="" />
        </div>
    );
}
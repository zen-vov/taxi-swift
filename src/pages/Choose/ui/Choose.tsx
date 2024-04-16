import React from "react";
import Button from "../../../shared/button/ui/button";

export default function Choose(){
    return(
        <div className="flex flex-col items-center justify-center bg-primary" >
            <h1 className="pt-[107px] mb-[37px] text-3xl text-white font-semibold">
                Swift
            </h1>
            <img  className="w-[295px] h-[170px] mb-[190px]" src="./cars/default-car.png" alt="" />
           <Button 
            className="w-[325px] h-[56px] bg-white mb-[30px] rounded-[20px]"
            title="Driver"
           />
           <Button 
            className="w-[325px] h-[56px] bg-white mb-[30px] rounded-[20px]"
            title="Passenger"
           />   
        </div>
    );
}
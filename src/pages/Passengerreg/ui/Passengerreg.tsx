import React from "react";
import Button from "../../../shared/button/ui/button";
import Icons from "../../../features/Icons/ui/Icons";
import { Link } from "react-router-dom";

export default function PassengerReg(){
    const text = [
        "Name",
        "Phone number",
        "Create password"
        ];
        return(
            <div className="relative h-[828px]">
                    <img className=" h-[232px] rounded-b-[20px]"src="/bg-images/Large-swiftbg.png" alt="" />
                    <div className="absolute left-[23px] top-[140px] flex flex-col justify-center items-center mb-[30px]">
                        <p className="text-[30px] text-white mb-[17px]">Sign Up</p>
                        {text.map((item,index) =>(
                            <input key={index} className=" bg-input text-input font-medium w-[330px] h-[60px] rounded-[20px] 
                            pl-[25px] mb-[20px]" type="text" placeholder={item} />
                        ))}
                        <Button
                            className="w-[330px] h-[60px] bg-primary text-white mb-[30px] rounded-[20px] mb-[60px] mt-[30px]"
                            title="Next"
                        />
                        <div className="flex justify-center gap-[5px] mb-[60px] text-[14px]">
                            <p className="text-primary"> Do you have an account?</p>
                            <Link to="/app/loginPass" className="text-green font-mediums">Log in</Link>
                        </div>
                        <Icons/>
                    </div>  
                </div>
        );
}
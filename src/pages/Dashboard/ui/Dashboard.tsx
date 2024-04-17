import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  const[buttonConsist,setButtonConsist] = React.useState(false);

  const buttonClicked = ()=>{
    setButtonConsist(!buttonConsist);
  }

  return (
    <div className=" relative bg-primary h-[840px]">
      <div className="absolute bottom-[0px]">
        <div className="rounded-t-[20px] bg-white w-[415px] h-[34px] flex justify-center items-center" onClick={buttonClicked}>
          <div className="w-[30px] h-[5px] bg-decorate rounded-[5px]">
          </div>
        </div>
        {buttonConsist ? 
        <div className="flex flex-col items-center bg-white w-[415px] h-[388px]">
          <input className=" bg-input text-input font-medium w-[345px] h-[60px] rounded-[20px] 
          pl-[25px] mb-[20px] ml-[6px]" type="text" placeholder="Place from order" disabled/>
          <input className=" bg-input text-input font-medium w-[345px] h-[60px] rounded-[20px] 
          pl-[25px] mb-[20px] ml-[6px]" type="text" placeholder="Where to?" />
        </div> :
        <></>}
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../shared/button/ui/button";

function Dashboard() {
  const[buttonConsist,setButtonConsist] = React.useState(false);

  const buttonClicked = ()=>{
    setButtonConsist(!buttonConsist);
  }

  return (
    <div className=" relative bg-primary h-[840px] flex justify-center">
      <div className="absolute bottom-[0px]">
        <div className="rounded-t-[20px] bg-white w-[415px] h-[34px] flex justify-center items-center" onClick={buttonClicked}>
          <div className="w-[30px] h-[5px] bg-decorate rounded-[5px]">
          </div>
        </div>
        {buttonConsist ? 
        <div className="flex flex-col items-center bg-white w-[415px] h-[388px]">
          <input className=" bg-input text-input font-medium w-[345px] h-[60px] rounded-[20px] 
          pl-[25px] mb-[13px] ml-[6px]" type="text" placeholder="Place from order" disabled/>
          <input className=" bg-input text-input font-medium w-[345px] h-[60px] rounded-[20px] 
          pl-[25px] mb-[20px] ml-[6px]" type="text" placeholder="Where to?" />

          <ul className="flex gap-[5px]">
            <li>
              <div className=" relative text-[12px] w-[120px] h-[74px] rounded-[20px] bg-input flex justify-center px-[12px] py-[12px]">
                <svg className="absolute left-[10px]" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <circle cx="9" cy="9" r="6.75" stroke="#706FDE" stroke-width="1.5"/>
                  <path d="M12.375 9H9.25C9.11193 9 9 8.88807 9 8.75V6.375" stroke="#706FDE" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                <p className="mt-[20px] w-[100px] h-[30px]">
                  Satpaev Street, 50
                </p>
              </div>
            </li>
            <li>
            <div className="relative text-[12px] w-[120px] h-[74px] rounded-[20px] bg-input flex justify-center px-[12px] py-[12px]">
            <svg className="absolute left-[10px]" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M4.16663 9.56966C4.16663 8.55134 4.16663 8.04218 4.39534 7.59463C4.62406 7.14707 5.0536 6.81572 5.91267 6.15301L6.746 5.51015C8.29877 4.3123 9.07515 3.71338 9.99996 3.71338C10.9248 3.71338 11.7012 4.3123 13.2539 5.51015L14.0873 6.15301C14.9463 6.81572 15.3759 7.14707 15.6046 7.59463C15.8333 8.04218 15.8333 8.55134 15.8333 9.56966V12.75C15.8333 14.1642 15.8333 14.8713 15.3451 15.3106C14.857 15.75 14.0713 15.75 12.5 15.75H7.49996C5.92861 15.75 5.14294 15.75 4.65478 15.3106C4.16663 14.8713 4.16663 14.1642 4.16663 12.75V9.56966Z" stroke="#706FDE"/>
              <path d="M12.0833 15.75V12.25C12.0833 11.6977 11.6356 11.25 11.0833 11.25H8.91663C8.36434 11.25 7.91663 11.6977 7.91663 12.25V15.75" stroke="#706FDE" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
              <p className="mt-[20px] w-[100px] h-[30px]">
                Kabanbay Batyr Avenue, 8
              </p>
            </div>
            </li>
            <li>
            <div className="relative text-[12px] w-[120px] h-[74px] rounded-[20px] bg-input flex justify-center px-[12px] py-[12px]">
              <svg className="absolute left-[10px]" xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                <circle cx="12.5555" cy="11.1111" r="1.44444" fill="#706FDE"/>
                <circle cx="5.33336" cy="9.66661" r="1.44444" fill="#706FDE"/>
                <path d="M12.5555 11.4722V11.4722C12.5555 12.8682 11.4237 14 10.0277 14H7.49992C5.69436 14 5.33325 13.4222 5.33325 11.1111" stroke="#706FDE" stroke-linecap="round"/>
                <path d="M5.33325 8.22222C8.76807 8.22222 9.65044 5.18359 9.66636 2.11704C9.66664 2.06417 9.63874 2.01517 9.59331 1.98813L7.93325 1" stroke="#706FDE" stroke-linecap="round"/>
                <path d="M5.33325 8.22222C1.89843 8.22222 1.01606 5.18359 1.00014 2.11704C0.999865 2.06417 1.02776 2.01517 1.0732 1.98813L2.73325 1" stroke="#706FDE" stroke-linecap="round"/>
              </svg>
              <p className="mt-[20px] w-[100px] h-[30px]">
                  Tole bi Street, 99
              </p>
            </div>
            </li>
          </ul>
          <ul className="mt-[20px] w-[370px] mb-[20px]">
            <div className="flex gap-[5px] justify-start">
              <li>
              <div className=" relative text-[12px] w-[120px] h-[74px] rounded-[20px] bg-input px-[12px] py-[12px]">
                <div className="absolute flex">
                  <p className="text-[8px]">
                    2 min
                  </p>
                  <img src="/cars/normal-car.png" alt="" />
                </div>
              <p className="mt-[40px] w-[54px] h-[15px]">
                  Standart
              </p>
              </div>
              </li>
              <li>
              <div className=" relative text-[12px] w-[120px] h-[74px] rounded-[20px] bg-input px-[12px] py-[12px]">
                <div className="absolute flex">
                  <p className="text-[8px]">
                    2 min
                  </p>
                  <img src="/cars/invalid-car.png" alt="" />
                </div>
              <p className="mt-[40px] w-[54px] h-[15px]">
                  NoLegs
              </p>
              </div>
              </li>
            </div>
          </ul>

          <Button
          className="w-[210px] h-[50px] rounded-[20px] bg-primary text-white mb-[20px]"
          title="Request Swift"
          />

        </div> :
        <></>}
      </div>
    </div>
  );
}

export default Dashboard;

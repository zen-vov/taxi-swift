import React from "react";
import Button from "../../../shared/button/ui/button";
import Arrow from "../../../shared/Icons/arrow/ui/arrow";
import DriveReg from "../../driverreg/ui/Drivereg";

export default function Choose() {
  const [RoleChange, setRoleChange] = React.useState<string>("");

  const RoleChanging = (prop: string) => {
    setRoleChange(prop);
  };
  if (RoleChange === "Driver") {
    return <DriveReg />;
  } else if (RoleChange === "Passenger") {
    return (
      <div className="flex justify-center">
        <button
          className="absolute left-[20px] top-[20px]"
          onClick={() => RoleChanging("")}
        >
          <Arrow />
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center justify-center bg-primary h-[828px]">
        <h1 className="pt-[107px] mb-[37px] text-3xl text-white font-semibold">
          Swift
        </h1>
        <img
          className="w-[295px] h-[170px] mb-[190px]"
          src="./cars/default-car.png"
          alt=""
        />
        {/* <slider...coming soon> */}
        <Button
          onClick={() => RoleChanging("Driver")}
          className="w-[330px] h-[60px] bg-white mb-[30px] rounded-[20px]"
          title="Driver"
        />
        <Button
          onClick={() => RoleChanging("Passenger")}
          className="w-[330px] h-[60px] bg-white mb-[30px] rounded-[20px]"
          title="Passenger"
        />
      </div>
    );
  }
}

import Button from "../../../shared/button/ui/button";
import { Link } from "react-router-dom";

export default function ChoosePage() {
  return (
    <div className="flex flex-col items-center justify-center bg-primary h-full">
      <div className="container">
        <h1 className="mt-[107px] mb-[37px] text-3xl text-center text-white font-semibold">
          Swift
        </h1>
        <div className="flex flex-col items-center gap-[150px]">
          <img
            className="w-[295px]  h-[170px]"
            src="./cars/default-car.png"
            alt="car"
          />
          <div className="flex flex-col items-center">
            <Link to={"/app/auth"}>
              <Button
                className="w-80 h-12 bg-white mb-[30px] rounded-[20px]"
                title="Driver"
              />
            </Link>
            <Button
              className="w-80 h-12 bg-white mb-8 rounded-[20px]"
              title="Passenger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

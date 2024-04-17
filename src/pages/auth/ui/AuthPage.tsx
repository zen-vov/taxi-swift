import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/button/ui/button";
import Arrow from "../../../shared/Icons/arrow/ui/arrow";
import Loading from "../../Loading/ui/loading";

export default function AuthPage() {
  const text = ["Phone number", "Create password"];

  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    console.log("LOGIN SUBMIT");

    setTimeout(() => {
      setLoading(false);
      navigate("/app/dashboard", { replace: true });
    }, 1500);
  };

  return (
    <div className="flex justify-center">
      <div className="relative h-[840px] w-[413px] ">
        <img
          className=" w-[413px] h-[232px] rounded-b-[20px]"
          src="/bg-images/Large-swiftbg.png"
          alt=""
        />
        <div className="flex justify-center">
          <Link to="/" className="absolute left-[20px] top-[20px]">
            <Arrow />
          </Link>
        </div>
        <div className="absolute left-[33px] top-[140px] flex flex-col justify-center items-center mb-[30px]">
          <p className="text-[30px] text-white mb-[17px]">Sign In</p>
          <form className="w-[330px]" onSubmit={onSubmit}>
            {text.map((item, index) => (
              <input
                key={index}
                className="bg-input text-input font-medium w-[330px] h-[60px] rounded-[20px] pl-[25px] mb-[20px] ml-[6px]"
                type="text"
                placeholder={item}
              />
            ))}
            <p className=" text-base text-right pr-[10px]">
              <a className="text-primary font-medium" href="">
                Forget password
              </a>
            </p>
            {loading ? (
              <div>
                <Loading />
              </div>
            ) : (
              <Button
                className="w-[330px] h-[60px] bg-primary text-white mb-[30px] rounded-[20px] mb-[60px] mt-[24px]"
                title="Sign in"
              />
            )}
            <div className="flex justify-center mb-[90px] gap-[5px] text-[14px]">
              <p className="text-primary">Don't you have an account?</p>
              <Link to="/app/driverreg" className="text-green font-mediums">
                Register
              </Link>
            </div>
          </form>
        </div>
        <img className="pt-[400px]" src="/cars/left-car.png" alt="" />
      </div>
    </div>
  );
}

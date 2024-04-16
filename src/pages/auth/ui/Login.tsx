import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    console.log("SUBMIT");

    setTimeout(() => {
      setLoading(false);
      navigate("/app/dashboard", { replace: true });
    }, 1500);
  };

  return (
    <main className="">
      <h2 className="text-red">Login</h2>
      <form className="" onSubmit={onSubmit}>
        <div>
          <label>Email:</label>
          <input className="border" type="text" />
        </div>
        <div>
          <label>Password:</label>
          <input className="border" type="password" />
        </div>

        {loading ? <div>Loading...</div> : <button type="submit">Login</button>}
      </form>
    </main>
  );
}

export default Login;

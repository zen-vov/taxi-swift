import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="m-[1rem]">
      <h1>Zen</h1>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

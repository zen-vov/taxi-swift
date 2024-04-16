import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="m-[1rem]">
      <Outlet></Outlet>
    </div>
  );
}

export default App;

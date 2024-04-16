import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="flex justify-center">
      <Outlet></Outlet>
    </div>
  );
}

export default App;

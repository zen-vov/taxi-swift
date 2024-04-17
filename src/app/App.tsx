import { Outlet } from "react-router-dom";
import "./styles/App.css";

function App() {
  return (
    <div className="App h-screen">
      <Outlet></Outlet>
    </div>
  );
}

export default App;

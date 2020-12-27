import "./App.css";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { useSelector } from "react-redux";
import { selectUser } from "./redux/slice";

function App() {
  const user = useSelector(selectUser);
  return <>{user ? <Logout /> : <Login />}</>;
}

export default App;

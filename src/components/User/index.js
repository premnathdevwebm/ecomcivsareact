import { useState, useContext } from "react";
import Login from "./login";
import Register from "./register";
import Dashboard from "./profile";
import { Context } from "../../utils/context";
const User = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(Context);
  return (
    <div>
      {!user?.user && (login ? <Login setLogin={setLogin} /> : <Register setLogin={setLogin} />)}
      {!!user?.user && <Dashboard />}
    </div>
  );
};

export default User;

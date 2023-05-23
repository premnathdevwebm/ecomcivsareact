import { useState, useContext } from "react";
import Login from "./login";
import Register from "./register";
import Dashboard from "./profile";
import { Context } from "../../utils/context";
import "./Index.scss"
const User = () => {
  const [login, setLogin] = useState(false);
  const { user } = useContext(Context);
  return (
    <div className={!user?.user ? "containert": "noback"}>
      {!user?.user &&
        (login ? (
          <Login setLogin={setLogin} />
        ) : (
          <Register setLogin={setLogin} />
        ))}
      {!!user?.user && <Dashboard />}
    </div>
  );
};

export default User;

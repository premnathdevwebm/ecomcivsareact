import React, { useState, useContext } from "react";
import "./Login.scss";
import { makeRequest } from "../../utils/api";
import { setToken } from "../../utils/helpers";
import { Context } from "../../utils/context";

const Login = ({ setLogin }) => {
  const { handleUser } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await makeRequest.post("/auth/local", {
      identifier: email,
      password: password,
    });
    handleUser({ user: { ...response.data.user }, loading: false });
    setToken(response.data.jwt);
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="login-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <div>
        Dont have an account?
        <button onClick={() => setLogin(() => false)} className="logBtn">
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;

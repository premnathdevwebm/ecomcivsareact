import { useState, useContext } from "react";
import "./Register.scss";
import { makeRequest } from "../../utils/api";
import { setToken } from "../../utils/helpers";
import { Context } from "../../utils/context";

const Register = ({ setLogin }) => {
  const { handleUser } = useContext(Context);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [zipcode, setZipcode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await makeRequest.post("auth/local/register", {
        ...{
          username,
          email,
          password,
          phone,
          address1,
          address2,
          city,
          state,
          country,
          zipcode,
        },
        confirmed: true,
        blocked: false,
      });
      handleUser({ user: { ...response.data.user }, loading: false });
      setToken(response.data.jwt);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username" className="register-label">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="register-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email" className="register-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="register-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password" className="register-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="register-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label htmlFor="phone" className="register-label">
          Phone:
        </label>
        <input
          type="tel"
          id="phone"
          className="register-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <label htmlFor="address1" className="register-label">
          Address 1:
        </label>
        <input
          type="text"
          id="address1"
          className="register-input"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          required
        />
        <label htmlFor="address2" className="register-label">
          Address 2:
        </label>
        <input
          type="text"
          id="address2"
          className="register-input"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
        />
        <label htmlFor="city" className="register-label">
          City/Town:
        </label>
        <input
          type="text"
          id="city"
          className="register-input"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <label htmlFor="state" className="register-label">
          State:
        </label>
        <input
          type="text"
          id="state"
          className="register-input"
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        />
        <label htmlFor="country" className="register-label">
          Country:
        </label>
        <input
          type="text"
          id="country"
          className="register-input"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
        />
        <label htmlFor="zipcode" className="register-label">
          Zip Code:
        </label>
        <input
          type="text"
          id="zipcode"
          className="register-input"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          required
        />
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
      <div>
        Already have an account?
        <button onClick={() => setLogin(() => true)} className="logBtn">
          Login
        </button>
      </div>
    </div>
  );
};
export default Register;

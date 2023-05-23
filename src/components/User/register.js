import { useState, useContext } from "react";
import "./User.scss";
import { makeRequest } from "../../utils/api";
import { setToken } from "../../utils/helpers";
import { Context } from "../../utils/context";


const Register = ({ setLogin }) => {
  const { handleUser } =
    useContext(Context);
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "",
    zipcode: "",
  });
  async function registerUser(event) {
    event.preventDefault();
    try {
       const response = await makeRequest.post('auth/local/register', { ...loggedUser, confirmed: true, blocked: false })
       handleUser({user: {...response.data.user}, loading: false})
       setToken(response.data.jwt)
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="container1">
        <div className="illustration">
          <img className="rectangleIcon" alt="" src="/rectangle@2x.png" />
          <div className="turnYourIdeas">
            Empowering Lives, Embracing Wellness.
          </div>
          <img className="illustrationChild2" alt="" src="/group-2.svg" />
        </div>
      </div>
      <div className="contentWrapper">
        <div className="frameParent">
          <form>
            <label htmlFor="username">UserName</label>
            <input
              id="username"
              name="username"
              value={loggedUser.username}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, username: event.target.value }))
              }
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={loggedUser.email}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, email: event.target.value }))
              }
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              value={loggedUser.password}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, password: event.target.value }))
              }
            />
            <br />
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              value={loggedUser.phone}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, phone: event.target.value }))
              }
            />
            <br />
            <label htmlFor="address1">Address1</label>
            <input
              id="address1"
              name="address1"
              value={loggedUser.address1}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, address1: event.target.value }))
              }
            />
            <br />
            <label htmlFor="address">Address2</label>
            <input
              id="address2"
              name="address2"
              value={loggedUser.address2}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, address2: event.target.value }))
              }
            />
            <br />
            <label htmlFor="city">City/Town</label>
            <input
              id="city"
              name="city"
              value={loggedUser.city}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, city: event.target.value }))
              }
            />
            <br />
            <label htmlFor="state">State</label>
            <input
              id="state"
              name="state"
              value={loggedUser.state}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, state: event.target.value }))
              }
            />
            <br />
            <label htmlFor="country">Country</label>
            <input
              id="country"
              name="country"
              value={loggedUser.country}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, country: event.target.value }))
              }
            />
            <br />
            <label htmlFor="zip">ZIP</label>
            <input
              id="zip"
              name="zip"
              value={loggedUser.zipcode}
              onChange={(event) =>
                setLoggedUser((e) => ({ ...e, zipcode: event.target.value }))
              }
            />
            <br />
            <button onClick={registerUser} className="submitBtn" type="submit">
              Register
            </button>
          </form>
          <div>
            Already have an account?
            <button onClick={() => setLogin(() => true)} className="logBtn">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

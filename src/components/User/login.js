import { useState, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import "./User.scss";
import { makeRequest } from "../../utils/api";
import { setToken } from "../../utils/helpers";
import { Context } from "../../utils/context";

const Login = ({ setLogin }) => {
  const { handleUser } =
    useContext(Context);

  const handleSuccess = (response) => {
    console.log('Successful sign-in:', response);
  };

  const handleFailure = (error) => {
    console.error('Sign-in failure:', error);
  };

  const signIn = useGoogleLogin({
    redirectUri: 'https://ecommerce2-2usx.onrender.com/api/connect/google/callback',
    onSignInSuccess: handleSuccess,
    onSignInError: handleFailure,
  });

  const handleSignIn = () => {
    console.log(signIn);;
  };

  const [loggedUser, setLoggedUser] = useState({
    email: "",
    password: "",
  });
  async function loginUser(event) {
    event.preventDefault();
    try {
       const response = await makeRequest.post('/auth/local', { identifier: loggedUser.email,password: loggedUser.password  })
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
            <button onClick={loginUser} className="submitBtn" type="submit">
              Login
            </button>
          </form>
          <button onClick={handleSignIn}>Google</button>
          <div>
            Dont have an account?
            <button onClick={() => setLogin(() => false)} className="logBtn">
              Register
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

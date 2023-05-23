import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.scss";
import App from "./App";


ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="304396240424-kmhb7ps7md65te398e3uvc5um3eavcb0.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);

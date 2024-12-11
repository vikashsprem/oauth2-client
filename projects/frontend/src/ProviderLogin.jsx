import React from "react";
import axios from "axios";

const ProviderLogin = () => {
  async function handleLogin() {
    const response = await axios.get("http://localhost:3000/login");
    console.log(response);
  }
  return (
    <div className="login-container">
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Login with Oauth2.0</button>
    </div>
  );
};

export default ProviderLogin;

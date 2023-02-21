import React, { useState } from "react";

const LoginFormat = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    });

    const data = await response.json();

    if (data.success) {
      setIsLoggedIn(true);
    } else {
      alert(data.error);
    }
  };

  if (isLoggedIn) {
    return <div>You are logged in!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginFormat;

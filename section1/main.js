const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (submitClass === "login-button")
      alert(JSON.stringify({ username, password }));
    if (submitClass === "disabled") alert("Username or password is too short");

    setUsername("");
    setPassword("");
    return;
  }

  const submitClass =
    username.length <= 4 || password.length <= 4 ? "disabled" : "login-button";
  const usernameClass = username.length <= 4 ? "input-error" : "form-input";
  const passwordClass = password.length <= 4 ? "input-error" : "form-input";

  return (
    <main className="login-card">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          className={usernameClass}
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Password:</label>
        <input
          className={passwordClass}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className={submitClass}>
          Login
        </button>
      </form>
    </main>
  );
}

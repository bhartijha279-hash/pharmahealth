import { useState } from "react";

function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-image">
          <div className="brand">
            <div className="brand-icon">✚</div>
            <h1>PharmaHealth</h1>
            <p>SAFE MEDICINES • BETTER LIVES</p>
          </div>

          <div className="medicine-decoration">💊</div>
        </div>

        <div className="login-section">
          <div className="login-box">

            <h2>Admin Login</h2>

            <p className="login-subtitle">
              Sign in to manage your pharmacy
              inventory, sales and customers.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Username</label>

                <div className="input-box">
                  <span>♙</span>

                  <input
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Password</label>

                <div className="input-box">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <span className="eye">◉</span>
                </div>
              </div>

              <button type="submit" className="login-btn">
                Login <span>→</span>
              </button>

            </form>

            <a href="#" className="forgot">
              Forgot password?
            </a>

            <div className="login-footer">
              <span>♢</span>
              Secure Admin Access
              <span>|</span>
              PharmaHealth v1.0
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default AdminLogin;
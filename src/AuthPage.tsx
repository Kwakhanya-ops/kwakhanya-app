import React, { useState } from "react"
import "./AuthPage.css"

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [role, setRole] = useState("student")

  return (
    <div className="auth-container">
      <h1>Welcome to Kwakhanya</h1>

      <div className="tabs">
        <button onClick={() => setIsLogin(true)} className={isLogin ? "active" : ""}>
          Login
        </button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? "active" : ""}>
          Register
        </button>
      </div>

      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        {!isLogin && (
          <>
            <label>
              Name
              <input type="text" placeholder="Your name" required />
            </label>
          </>
        )}

        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>

        <label>
          Password
          <input type="password" placeholder="Enter password" required />
        </label>

        {!isLogin && (
          <>
            <label>
              Confirm Password
              <input type="password" placeholder="Re-enter password" required />
            </label>

            <label>
              Role
              <select value={role} onChange={(e) => setRole(e.target.value)}>
                <option value="student">Student</option>
                <option value="school">School Owner</option>
              </select>
            </label>
          </>
        )}

        <button type="submit" className="submit-btn">
          {isLogin ? "Login" : "Register"}
        </button>
      </form>
    </div>
  )
}

export default AuthPage

import { useState } from "react";
import Navbar from "./Navbar";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  // Auth isn't implemented yet; keep the form from reloading the page.
  const onSubmit = (e) => e.preventDefault();

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-box">
        <span className="eyebrow">{isLogin ? "Log in" : "Sign up"}</span>
        <h1>{isLogin ? "Welcome back." : "Join ClubX."}</h1>
        <p className="login-box__lead">
          {isLogin ? "Log in to your ClubX account." : "Create an account to join clubs and events."}
        </p>

        <form onSubmit={onSubmit}>
          {!isLogin && (
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" type="text" placeholder="Your full name" autoComplete="name" />
            </div>
          )}
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="you@university.edu" autoComplete="email" />
          </div>
          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="Enter your password" autoComplete={isLogin ? "current-password" : "new-password"} />
          </div>
          {!isLogin && (
            <div className="field">
              <label htmlFor="confirm">Confirm password</label>
              <input id="confirm" type="password" placeholder="Confirm your password" autoComplete="new-password" />
            </div>
          )}
          <button type="submit" className="btn btn--primary">{isLogin ? "Log in" : "Sign up"}</button>
        </form>

        <p className="signup-text">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button type="button" className="link-btn" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;

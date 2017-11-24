import React from 'react';

const Login = () => (
  <div className="login-page">
    <div className="form">
      <div className="login-form">
        <a href="/auth/google">
          <button className="loginBtn loginBtn--google">
            Login with Google
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default Login;

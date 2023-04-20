import { Button } from "@mui/material";
import "./sign-in.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <div className="right-side" />
      <div className="left-side" />
      <b className="board">Board.</b>
      <form className="login-form">
        <div className="card">
          <div className="card1" />
        </div>
        <div className="input-field">
          <input className="input-field1" type="email" readOnly />
        </div>
        <input className="input" type="password" readOnly />
        <div className="div">••••••••</div>
        <div className="login-form-child" />
        <Button
          className="button-sign-in"
          sx={{ width: 325 }}
          variant="contained"
          color="primary"
          href="/dashboard"
        >
          Sign In
        </Button>
        <div className="email-address">Email address</div>
        <div className="priyanshurai5853gmailcom">
          priyanshurai5853@gmail.com
        </div>
        <div className="password">Password</div>
        <div className="forgot-password">Forgot password?</div>
        <div className="dont-have-an-container">
          <span className="dont-have-an">{`Don’t have an account? `}</span>
          <span className="register-here">Register here</span>
        </div>
      </form>
      <Button
        className="google-sign-in"
        sx={{ width: 180 }}
        variant="contained"
        color="primary"
        href="/dashboard"
      >
        Sign in with Google
      </Button>
      <Button
        className="apple-sign-in"
        sx={{ width: 180 }}
        variant="contained"
        color="primary"
        href="/dashboard"
      >
        Sign in with Apple
      </Button>
      <b className="sign-in1">Sign In</b>
      <div className="sign-in-to">Sign in to your account</div>
    </div>
  );
};

export default SignIn;

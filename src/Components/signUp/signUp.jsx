import React, { useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [cnfpasswordValid, setCnfPasswordValid] = useState(false);

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isCnfPasswordFocused, setIsCnfPasswordFocused] = useState(false);

  const validateEmail = (value) => {
    console.log(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setEmailValid(emailRegex.test(value));
  };

  const validatePassword = (value) => {
    setPasswordValid(value.length >= 8);
  };
  const validateCnfPassword = (value) => {
    setCnfPasswordValid(value === password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailValid && passwordValid && cnfpasswordValid) {
      alert("Form submitted successfully!");
    } else {
      alert("Form cannot be submitted!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="email-div">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
            style={{
              border: isEmailFocused
                ? "2px solid blue"
                : emailValid
                ? "2px solid green"
                : "2px solid red",
              
            }}
          />

          {!emailValid && <p style={{ color: "red" }}>Invalid email format</p>}
        </div>

        <div className="pass-div">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validatePassword(e.target.value);
            }}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
            style={{
              border: isPasswordFocused
                ? "2px solid blue"
                : passwordValid
                ? "2px solid green"
                : "2px solid red",
              
            }}
          />
          {!passwordValid && (
            <p style={{ color: "red" }}>
              Password must be at least 8 characters
            </p>
          )}
        </div>

        <div className="cnf-pass-div">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={cnfPassword}
            onChange={(e) => {
              setCnfPassword(e.target.value);
              validateCnfPassword(e.target.value);
            }} 
            onFocus={() => setIsCnfPasswordFocused(true)}
            onBlur={() => setIsCnfPasswordFocused(false)}
            style={{
              border: isCnfPasswordFocused
                ? "2px solid blue"
                : cnfpasswordValid
                ? "2px solid green"
                : "2px solid red",
              
            }}
           
          />
          {!cnfpasswordValid && (
            <p style={{ color: "red" }}>Passwords do not match</p>
          )}
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

import { useState, useRef} from "react";

import classes from "./AuthForm.module.css";

const AuthForm = () => {
  //const history = useHistory();
  //console.log("Entered");
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    let Url;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log(enteredEmail);
  }

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <div className={classes.divIcon}>
         
            <input
              type="email"
              id="email"
              placeholder="Email"
              required
              ref={emailInputRef}
              autoComplete="off"
            />
          </div>
          
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <div className={classes.divIcon}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              ref={passwordInputRef}
              autoComplete="off"
            />
          </div>
          
        </div>
          
          
        <div className={classes.actions}>
          <button>Login</button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;

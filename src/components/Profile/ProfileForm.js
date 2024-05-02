import React, { useContext, useState } from "react";
import classes from "./ProfileForm.module.css";
import { AuthContext } from "../../store/Auth-context";

const ProfileForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbtBrLaYdQSC7H3DI7eo2o0w5hm_kfDFU",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Context-Type": "application/json",
        },
      }
    ).then((response) => {
      //....
    });
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input
          type="password"
          id="new-password"
          minLength="7"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;

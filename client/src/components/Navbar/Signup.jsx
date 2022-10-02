import React from "react";
import axios from "axios";
import { useState } from "react";

function SignUp() {
  // const [showForm, setShowForm] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    img: "",
    password: "",
    confirmPassword: "",
  });
  const sendData = () => {
    if (
      userData.name &&
      userData.email &&
      userData.img &&
      userData.password &&
      userData.confirmPassword
    ) {
      if (userData.password === userData.confirmPassword) {
        axios.post("/api/v1/users/signup", userData).then((res) => {
          if (res.data.msg) {
            swal({
              title: "",
              text: res.data.msg,
              icon: "warning",
              button: "OK",
            });
          } else window.location.href = "/";
        });
      } else {
        swal({
          title: "",
          text: "Password and Confirm Password have to be matching",
          icon: "warning",
          button: "OK",
        });
      }
    } else {
      swal({
        title: "",
        text: "You have to fill all Inputs to sign Up",
        icon: "warning",
        button: "OK",
      });
    }
  };
  return (
    <div className="login-form signup">
      <form action="">
        <h3 className="title">Sign Up Form</h3>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope" />
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Name"
            type="text"
            name="name"
            value={userData.name}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
          <i className="fa fa-envelope" />
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Email"
            type="email"
            name="email"
            value={userData.email}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
            <i className="fa fa-envelope" />
          </span>
          <input
            className="form-control"
            placeholder="Enter Your image"
            type="text"
            name="image"
            value={userData.img}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, img: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
          <i className="fa fa-key" />
          </span>
          <input
            className="form-control"
            placeholder="Enter Your Password"
            type="password"
            name="password"
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, password: e.target.value }))
            }
          />
        </div>
        <div className="form-group">
          <span className="input-icon">
          <i className="fa fa-key" />
          </span>
          <input
            className="form-control"
            placeholder="Confirm Your Password"
            type="password"
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
        </div>
      </form>

      <button
        className="btn"
        id="loginButton"
        type="submit"
        onClick={(e) => sendData(e)}
      >
        Submit
      </button>
    </div>
  );
}

export default SignUp;

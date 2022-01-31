import React, { useState } from "react";
import swal from "sweetalert";

export default function App() {
  const [name, setName] = useState();
  const [fullName, setFullName] = useState({
    email: "",
    password: "",
  });

  function inputChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);

    const { value, name } = event.target;
    setFullName((preVal) => {
      console.log(preVal);
      return {
        ...preVal,
        [name]: value,
      };
      /*   if (name === "fName") {
        return {
          fname: value,
          lname: preVal.lname,
          email: preVal.email,
          phone: preVal.phone,
        };
      } else if (name === "lName") {
        return {
          fname: preVal.fname,
          lname: value,
          email: preVal.email,
          phone: preVal.phone,
        };
      } else if (name === "email") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: value,
          phone: preVal.phone,
        };
      } else if (name === "phone") {
        return {
          fname: preVal.fname,
          lname: preVal.lname,
          email: preVal.phone,
          phone: value,
        };
      }*/
    });
  }

  function onSubmit(event) {
    //console.log("clicked");
    swal("Good job!", "Form Submitted!", "success");

    event.preventDefault();
    setName(fullName);
    //swal("Good job!", "Form Submitted!", "success");
  }
  return (
    <>
      <div className="main_div">
        <form onSubmit={onSubmit}>
          <div>
            <h1>Login{name} </h1>

            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              onChange={inputChange}
              value={fullName.email}
            />
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              onChange={inputChange}
              value={fullName.password}
            />
            <button onClick={onSubmit}>Login</button>
          </div>
        </form>
      </div>
    </>
  );
}

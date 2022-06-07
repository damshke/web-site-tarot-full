
import { React, useRef, useEffect, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import '../stylesheets/Reg.css'
import pic from '../stylesheets/pic.png'
import Menu from '../components/Menu'
import { useTranslation } from "react-i18next";

export default function RegPage() {

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")))

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  let navigate = useNavigate();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();
  const buttonRef = useRef();

  const { t } = useTranslation();

  const validate = (e) => {
    const name = e.target.name;
    switch (name) {
      case "name":
        nameValidityHandler(e.target);
        break;
      case "password":
        passwordValidityHandler(e.target);
        break;
      case "email":
        emailValidityHandler(e.target);
        break;
      case "password-confirm":
        confirmValidation();
        break;
      default:
        break;
    }
    if (buttonEnabled()) {
      buttonRef.current.disabled = false;
    } else {
      buttonRef.current.disabled = true;
    }
  };

  const nameValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Name field must not be empty");
    } else if (field.validity.tooShort) {
      field.setCustomValidity("Name should be >4 letters");
    } else if (field.validity.tooLong) {
      field.setCustomValidity("Name should be <20 letters");
    } else {
      field.setCustomValidity("");
    }
  };

  const emailValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Email must not be empty");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity("This is not an email address!");
    } else {
      field.setCustomValidity("");
    }
  };

  const confirmValidation = () => {
    if (passwordRef.current.value === confirmRef.current.value) {
      confirmRef.current.setCustomValidity("");
    } else {
      confirmRef.current.setCustomValidity(
        "Passwords should be the same!"
      );
    }
  };

  const passwordValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Password field must not be empty");
    } else if (field.validity.tooShort) {
      field.setCustomValidity("Password should be >8 letters");
    } else if (field.validity.tooLong) {
      field.setCustomValidity("Password should be <25 letters");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity(
        "Password should contain at least 1 letter and 1 number"
      );
    } else {
      field.setCustomValidity("");
    }
    confirmValidation();
  };

  const sendForm = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    let response = await fetch("http://localhost:5000/api/v1/auth/registration",
=======
    let response = await fetch("http://localhost:80/api/v1/auth/register",
>>>>>>> 8cf1e60944159f9b4b7acffacfec47dde76a11db
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          name: nameRef.current.value,
          password: passwordRef.current.value
        })
      });

    if (!response.ok)
      alert("such a user already exists");
    else {
      let userInfo = await response.json();
      sessionStorage.setItem("id", JSON.stringify(userInfo.message));
      alert("Welcome!")
      navigate("/main");
    }
  };

  const buttonEnabled = () => {
    return (
      nameRef.current.validity.valid &&
      emailRef.current.validity.valid &&
      passwordRef.current.validity.valid &&
      confirmRef.current.validity.valid
    );
  };

  if (id === null)
    return (
      <>
        <div className="up">
          <h1>Damshke's Tarot</h1>
        </div>

        <Menu></Menu>

        <img
          src={pic}
          alt="pic"
          className="picture"
        />

        <form className="signin" autoComplete="off"
          onSubmit={(e) => sendForm(e)}
          ref={formRef}
          onInput={(e) => validate(e)}>
          <input type="text" id="name" name="name" placeholder="username"
            required
            minLength={4}
            maxLength={20}
            ref={nameRef} />
          <input type="text" id="email" name="email" placeholder="email"
            required
            pattern="^\S+@\S+\.\S+$"
            ref={emailRef} />
          <input type="password" id="password" name="password" placeholder="password"
            required
            minLength={8}
            maxLength={25}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$"
            ref={passwordRef} />
          <input type="password" id="password" name="password" placeholder="confirm password"
            required
            ref={confirmRef} />
          <input
            disabled={true}
            type="submit"
            value="Register"
            ref={buttonRef}
            className='signinbtn'
          ></input>
          <p className='center'>forgot your password? <a href="#">click here</a></p>
        </form>
      </>
    )
  else
    navigate("/main");
}

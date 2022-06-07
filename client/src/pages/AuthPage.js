import { React, useRef, useEffect, useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import '../stylesheets/AuthPage.css'
import pic from '../stylesheets/pic.png'
import Menu from '../components/Menu'
import { useTranslation } from "react-i18next";


export const AuthPage = () => {

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  const { t } = useTranslation();

  let navigate = useNavigate();
  const passwordRef = useRef();
  const emailRef = useRef();
  const formRef = useRef();

  const validate = (e) => {
    const name = e.target.name;
    switch (name) {
      case "email":
        emailValidityHandler(e.target);
        break;
      case "password":
        passwordValidityHandler(e.target);
        break;
      default:
        break;
    }
  };

  const emailValidityHandler = (field) => {
    if (field.validity.patternMismatch) {
      field.setCustomValidity("Нет такого пользователя");
    } else if (field.validity.valueMissing) {
      field.setCustomValidity("Поле почты не должно быть пустым");
    } else {
      field.setCustomValidity("");
    }
  };

  const passwordValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Пароль не должен быть пустым");
    } else if (field.validity.patternMismatch) {
      field.setCustomValidity("Пароли не совпадают");
    } else {
      field.setCustomValidity("");
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    let response = await fetch("http://localhost:5000/api/v1/auth/login",
=======
    let response = await fetch("http://localhost:80/api/v1/auth/login",
>>>>>>> 8cf1e60944159f9b4b7acffacfec47dde76a11db
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value
        })
      });

    if (!response.ok)
      alert("User not found");
    else {
      let userInfo = await response.json();
      sessionStorage.setItem("id", JSON.stringify(userInfo.message));
      navigate('/main')
    }
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
          <input type="text" id="email" name="email" placeholder="email"
            required
            ref={emailRef} />
          <input type="password" id="password" name="password" placeholder="password"
            required
            minLength={8}
            maxLength={25}
            pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,25}$"
            ref={passwordRef} />
          <input
            type="submit"
            value="log in"
            className='signinbtn'
          ></input>
        </form>
        <div className="center">
          <h2>
            {t('registration_path')}<a href="/registration">{t('ref_reg')}</a>
          </h2>
        </div>
      </>
    )
  else
    return (
      <Navigate replace to="/main" />
  )
}

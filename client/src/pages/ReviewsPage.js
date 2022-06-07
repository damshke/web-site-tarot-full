import { React, useRef, useEffect, useState } from "react"
import pic from '../stylesheets/pic.png';
import Menu from '../components/Menu'
import '../stylesheets/Reviews.css'
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom"
import MenuForAuth from '../components/MenuForAuth'

export const ReviewsPage = () => {

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  const { t } = useTranslation();

  const nameRef = useRef();
  const reviewRef = useRef();
  const formRef = useRef();

  const validate = (e) => {
    const name = e.target.name;
    switch (name) {
      case "name":
        nameValidityHandler(e.target);
        break;
      case "msg":
        reviewValidityHandler(e.target);
        break;
      default:
        break;
    }
  };

  const nameValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Поле не должно быть пустым");
    } else {
      field.setCustomValidity("");
    }
  };

  const reviewValidityHandler = (field) => {
    if (field.validity.valueMissing) {
      field.setCustomValidity("Поле не должно быть пустым");
    } else {
      field.setCustomValidity("");
    }
  };

  const sendForm = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5000/api/v1/auth/sendReviews",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: nameRef.current.value,
          message: reviewRef.current.value
        })
      });

    if (!response.ok)
      alert("Не удалось отправить отзыв!");
    else
      alert("Отзыв успешно отправлен!");
  };

  if (id != null)
    return (
      <>
        <div className="up">
          <h1>Damshke's Tarot</h1>
        </div>

        <MenuForAuth></MenuForAuth>

        <img
          src={pic}
          alt="pic"
          className="picture"
        />
        <h2 className="center">{t('reviews_tarot')}</h2>
        <div class="container" className="center">
          <form name="myForm" id="telegramForm" method="GET" class="contact-form" autocomplete="off"
            onSubmit={(e) => sendForm(e)}
            ref={formRef}
            onInput={(e) => validate(e)}
            enctype="multipart/form-data">
            <p>
              <label for="name"><b>{t('enter_name')} </b></label>
              <input type="text" name="name" id="name" placeholder="username" ref={nameRef} />
            </p>
            <p>
              <label for="msg"><b>{t('enter_review')} </b></label>
              <textarea name="msg" id="msg" placeholder="Введите сообщение" ref={reviewRef}></textarea>
            </p>
            <button id="btn" type="submit" className="reviewsbtn">{t('send')} </button>
          </form>
          <div id="response"></div>
        </div>
      </>
    )
  else
    return (
      <Navigate replace to="/main" />
    )
}
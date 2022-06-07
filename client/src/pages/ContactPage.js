import { React, useEffect, useState } from "react"
import Menu from '../components/Menu'
import MenuForAuth from '../components/MenuForAuth'
import pic from '../stylesheets/pic.png';
import '../stylesheets/Contact.css'
import { useTranslation } from 'react-i18next';

export const ContactPage = () => {

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")))

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);
  const { t } = useTranslation();

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



        <div className="center">
          <h2>{t('stay_with_me')}</h2>
          <div className="box">
            <a href="https://vk.com/littleboar">VK</a>
          </div>
        </div>
      </>
    )
  else return (
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



      <div className="center">
        <h2>{t('stay_with_me')}</h2>
        <div className="box">
          <a href="https://vk.com/littleboar">VK</a>
        </div>
      </div>
    </>
  )
}
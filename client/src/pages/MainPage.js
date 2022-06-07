import { React, useEffect, useState } from "react"
import pic from '../stylesheets/pic.png';
import Menu from '../components/Menu'
import MenuForAuth from '../components/MenuForAuth'
import { useTranslation } from "react-i18next";

export const MainPage = () => {

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
        <h3><strong>{t('welcome')}</strong></h3>
        <span>{t('tarot_name')}</span> {t('description_tarot')}
      </div>



    </>
  )
  else
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
      <div className="center">
        <h3><strong>{t('welcome')}</strong></h3>
        <span>{t('tarot_name')}</span>{t('description_tarot')}
      </div>

    </>
  )
}
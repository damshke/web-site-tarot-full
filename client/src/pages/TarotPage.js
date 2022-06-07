import { React, useRef, useEffect, useState } from "react"
import Menu from '../components/Menu'
import pic from '../stylesheets/pic.png';
import '../stylesheets/Tarot.css'
import Tarot from '../components/Tarot'
import MenuForAuth from '../components/MenuForAuth'
import { useTranslation } from "react-i18next";

export const TarotPage = () => {

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

      <Tarot></Tarot>

      <div className="center">
        <h5>{t('little_bit')}</h5>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=641340803194347113" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=375417318947026883" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=354095589462085066" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=179651472627196052" height="445" width="345" frameBorder="0" scrolling="no">
        </iframe>
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

      <Tarot></Tarot>

      <div className="center">
        <h5>{t('little_bit')} </h5>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=641340803194347113" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=375417318947026883" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=354095589462085066" height="714" width="345" frameBorder="0" scrolling="no"></iframe>
        <iframe src="https://assets.pinterest.com/ext/embed.html?id=179651472627196052" height="445" width="345" frameBorder="0" scrolling="no">
        </iframe>
      </div>
    </>
  )

}
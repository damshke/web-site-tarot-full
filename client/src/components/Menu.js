import React from 'react';
import '../stylesheets/Menu.css'
import { useTranslation } from "react-i18next";
import LanguageFlags from './LanguageFlags';

export default function Menu() {

  const { t } = useTranslation();

  return (
    <>
    <LanguageFlags />
    <div className="menu">
        <nav>
          <ul>
            <li><a href="/main">{t('about')}</a></li>
            <li><a href='#'>{t('blog')}</a>
              <ul>
                <li><a href='/story'>{t('story')}</a></li>
                <li><a href='/views'>{t('views')}</a></li>
                <li><a href='/useful'>{t('useful')}</a></li>
              </ul>
            </li>
            <li><a href="/tarot">{t('layouts')}</a></li>
            <li><a href="/reviews">{t('reviews')}</a></li>
            <li><a href="/contact">{t('contact')}</a></li>
            <li><a href='/auth'>{t('auth')}</a></li>
          </ul>
        </nav>
      </div>
      </>
  );
}
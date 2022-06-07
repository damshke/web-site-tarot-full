import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icons.min.css'

//Localisaton
i18n
.use(initReactI18next) // passes i18n down to react-i18next
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['en','ru'],
  fallbackLng: "ru",
  detection: {
    order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ['cookie']
  },
  backend: {
   loadPath: '/assets/locales/{{lng}}/translation.json',
  },
  

});

const container = document.getElementById('root');
const root = createRoot(container);
const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

root.render(app);

reportWebVitals();
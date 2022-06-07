import { Routes, Route } from "react-router-dom";
import React from "react";
import {AuthPage} from './pages/AuthPage'
import {MainPage} from './pages/MainPage'
import {ContactPage} from './pages/ContactPage'
import RegPage from './pages/RegPage'
import {ReviewsPage} from './pages/ReviewsPage'
import {TarotPage} from './pages/TarotPage' 
import { StoryPage } from "./pages/StoryPage";
import { UsefulPage } from "./pages/Useful";
import { ViewsPage } from "./pages/ViewsPage";
function App() {
    return (
        <Routes>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/registration" element={<RegPage/>}/>
          <Route path="/reviews" element={<ReviewsPage/>}/>
          <Route path="/tarot" element={<TarotPage/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/story" element={<StoryPage/>}/>
          <Route path="/useful" element={<UsefulPage/>}/>
          <Route path="/views" element={<ViewsPage/>}/>
        </Routes>
    );
  }
  
export default App;
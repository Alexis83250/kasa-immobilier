import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Propos from './pages/Propos'
import Logement from './pages/Logement'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'
import '../src/styles/Body.scss'

//import Banner from '../../components/Banner'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/"  exact element={<Home />} />
        <Route path="/A-Propos" element={<Propos />} />
        <Route path="/Fiche-Logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


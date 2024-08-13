import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.scss';
import { App } from './App';
import { HomePage } from './components/HomePage';
import { SupportUs } from './components/SupportUs';
import { OurTeam } from './components/OurTeam';
import { Price } from './components/Price';
import { News } from './components/News';
import { Contacts } from './components/Contacts';
// import { HomePage } from './components/HomePage';

// createRoot(document.getElementById('root') as HTMLDivElement).render(<App />);

createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />}></Route>
        <Route path="support-us" element={<SupportUs />}></Route>
        <Route path="team" element={<OurTeam />}></Route>
        <Route path="price" element={<Price />}></Route>
        <Route path="news" element={<News />}></Route>
        <Route path="сontacts" element={<Contacts />}></Route>
        {/* <Route path="phones">
          <Route index element={<PhonesPage />}></Route>
          <Route
            path=":itemId"
            element={<ProductDetailsPage productPage="Phones" />}
          ></Route>
        </Route>
        <Route path="tablets">
          <Route index element={<TabletsPage />}></Route>
          <Route
            path=":itemId"
            element={<ProductDetailsPage productPage="Tablets" />}
          ></Route>
        </Route>
        <Route path="accessories">
          <Route index element={<AccessoriesPage />}></Route>
          <Route
            path=":itemId"
            element={<ProductDetailsPage productPage="Accessories" />}
          ></Route>
        </Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="favorites" element={<Favorites />}></Route> */}
      </Route>

      <Route
        path="*"
        element={
          <h3 style={{ padding: 30 }} className="title">
            Page not found
          </h3>
        }
      ></Route>
    </Routes>
  </HashRouter>,
);

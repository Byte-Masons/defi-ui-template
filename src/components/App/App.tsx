import React from 'react';
import styles from './App.module.css';
import Footer from '../layout/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import Home from '../screens/Home/Home';
import NavHeader from '../nav/NavHeader/NavHeader';
import Page1 from '../screens/Page1/Page1';
import PageWithParams from './PageWithParams';

const PlaceHolderPage = () => (
  <div>
    <h3>
      Theres nothing here. We just have the links so our nav-bar/menu looks full. You like a full
      nav-bar/menu, don't you?
    </h3>
  </div>
);

/**
 Our root component
 */
const App = () => {
  // do any global setup here

  return (
    <div className={styles.container}>
      <NavHeader />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page1/:word" element={<PageWithParams />} />
          <Route path="/page2" element={<PlaceHolderPage />} />
          <Route path="/page3" element={<PlaceHolderPage />} />
        </Routes>
      </div>
      <Footer>Child</Footer>
    </div>
  );
};

export default App;

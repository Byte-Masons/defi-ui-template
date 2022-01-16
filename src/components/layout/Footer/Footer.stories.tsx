import React from 'react';
import Footer from './Footer';

export default {
  title: 'layout/Footer',
  component: Footer,
};

export const Default = () => (
  <Footer>A Generic Footer. Change colors and size in config.css</Footer>
);

export const WithAClassName = () => (
  <Footer className="bg-blue fg-white">
    A Generic Footer. Change colors and size in config.css
  </Footer>
);

export const WithAStyleDefiend = () => (
  <Footer style={{borderColor: 'green'}}>
    A Generic Footer. Change colors and size in config.css
  </Footer>
);

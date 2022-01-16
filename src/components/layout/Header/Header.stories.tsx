import React from 'react';
import Header from './Header';

export default {
  title: 'layout/Header',
  component: Header,
};

export const Default = () => (
  <Header>A Generic Header. Change colors and size in config.css</Header>
);

export const WithAClassName = () => (
  <Header className="bg-blue fg-white">
    A Generic Header. Change colors and size in config.css
  </Header>
);

export const WithAStyleDefined = () => (
  <Header style={{fontWeight: 200}}>A Generic Header. Change colors and size in config.css</Header>
);

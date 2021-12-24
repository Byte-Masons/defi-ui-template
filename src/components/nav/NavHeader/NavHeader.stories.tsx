import React from 'react';
import NavHeader from './NavHeader';
import {MemoryRouter} from 'react-router-dom';

export default {
  title: 'nav/NavHeader',
  component: NavHeader,
};

// Note requirement of MemoryRouter, as our component uses navigation
export const Default = () => (
  <MemoryRouter>
    <NavHeader />
  </MemoryRouter>
);

export const WithAClassName = () => (
  <MemoryRouter>
    <NavHeader className="bg-blue fg-white" />
  </MemoryRouter>
);

export const WithAStyleDefined = () => (
  <MemoryRouter>
    <NavHeader style={{fontWeight: 200}} />
  </MemoryRouter>
);

import React from 'react';
import {MemoryRouter} from 'react-router-dom';
import SideMenu from './SideMenu';

export default {
  title: 'nav/SideMenu',
  component: SideMenu,
};

// Note requirement of MemoryRouter, as our component uses navigation
export const Default = () => (
  <MemoryRouter>
    <SideMenu>{() => <span>Children Go Here</span>}</SideMenu>
  </MemoryRouter>
);

export const WithAClassName = () => (
  <MemoryRouter>
    <SideMenu className="bg-blue fg-white">{() => <span>Children Go Here</span>}</SideMenu>
  </MemoryRouter>
);

export const WithAStyleDefined = () => (
  <MemoryRouter>
    <SideMenu style={{fontWeight: 200}}>{() => <span>Children Go Here</span>}</SideMenu>
  </MemoryRouter>
);

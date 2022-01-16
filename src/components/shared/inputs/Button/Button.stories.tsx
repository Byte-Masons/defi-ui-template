import React from 'react';
import Button from './Button';
import {BiBitcoin} from 'react-icons/all';

export default {
  title: 'inputs/Button',
  component: Button,
};

export const Default = () => <Button title="A Button" />;

export const InverseColors = () => <Button inverseColors title="A Button" />;

export const WithChildren = () => (
  <Button>
    <BiBitcoin />
    BUY
  </Button>
);

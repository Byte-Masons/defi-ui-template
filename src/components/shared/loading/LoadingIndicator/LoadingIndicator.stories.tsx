import React from 'react';
import LoadingIndicator from './LoadingIndicator';

export default {
  title: 'loading/LoadingIndicator',
  component: LoadingIndicator,
};

export const Default = () => <LoadingIndicator />;
export const Large = () => <LoadingIndicator size={50} />;
export const Blue = () => <LoadingIndicator size={50} style={{color: 'blue'}} />;

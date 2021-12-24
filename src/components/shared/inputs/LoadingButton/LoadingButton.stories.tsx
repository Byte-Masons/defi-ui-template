import React from 'react';
import LoadingButton from './LoadingButton';

export default {
  title: 'inputs/LoadingButton',
  component: LoadingButton,
};

export const Default = () => <LoadingButton title="A LoadingButton" />;
export const Loading = () => <LoadingButton loading title="A LoadingButton" />;

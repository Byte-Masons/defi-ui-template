import React, {useState} from 'react';
import LoadingIndicator from '../../shared/loading/LoadingIndicator/LoadingIndicator';
import Button from '../../shared/inputs/Button/Button';
import {useNavigate} from 'react-router-dom';
import LoadingButton from '../../shared/inputs/LoadingButton/LoadingButton';

/**
 Our Demo Page 1, showcasing some of our inputs
 */
const Page1 = () => {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLoadingButtonClicked = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div
      style={{
        alignItems: 'center',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        textAlign: 'center',
      }}>
      Here is an example of our Loading indicator, Button, and Loading Button (respectively)
      <br />
      The Button will take you to a subroute of Page1, used do demonstrate passing paramaters when
      you nav
      <br />
      <LoadingIndicator size={40} style={{margin: 30}} />
      <Button
        onClick={() => navigate('/page1/schwifty')}
        style={{margin: 30}}
        title="Get Schwifty"
      />
      <LoadingButton
        loading={loading}
        onClick={handleLoadingButtonClicked}
        style={{margin: 30}}
        title="Click this for hours of fun!"
      />
    </div>
  );
};

export default Page1;

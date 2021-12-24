import React from 'react';
import TileContainer from '../../layout/TileContainer/TileContainer';
import Tile from '../../layout/Tile/Tile';
import LoremIpsum from 'react-lorem-ipsum';

/**
 Our HomeScreen.  For an app with only one screen, this is it baby!
 - we demo our Tile + TileContainer here. Swap it out for what you need
 */

const DemoTile = () => (
  <Tile spacing={15}>
    <div style={{maxWidth: 300}}>
      <LoremIpsum p={1} />
    </div>
  </Tile>
);

const Home = () => (
  <TileContainer center>
    <DemoTile />
    <DemoTile />
    <DemoTile />
    <DemoTile />
    <DemoTile />
    <DemoTile />
  </TileContainer>
);

export default Home;

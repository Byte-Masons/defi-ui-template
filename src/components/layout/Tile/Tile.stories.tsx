import React from 'react';
import Tile, {TileProps} from './Tile';
import TileContainer from '../TileContainer/TileContainer';

export default {
  title: 'layout/Tile & TileContainer',
  component: Tile,
};

export const DemoTile = (props: TileProps) => (
  <Tile {...props}>
    <div>A Generic Tile.</div>
    <div>The border color is the main-fg-color from the config.css</div>
    <div>The border radius is also set in config.css</div>
  </Tile>
);

export const Default = () => (
  <TileContainer>
    <DemoTile />
    <DemoTile />
    <DemoTile />
  </TileContainer>
);

export const WithSpacingOnTheTile = () => (
  <TileContainer>
    <DemoTile spacing={10} />
    <DemoTile spacing={10} />
    <DemoTile spacing={10} />
  </TileContainer>
);

export const WithMaxWidthAndSpacingOnTheTile = () => (
  <TileContainer>
    <DemoTile spacing={10} style={{maxWidth: 200}} />
    <DemoTile spacing={10} style={{maxWidth: 200}} />
    <DemoTile spacing={10} style={{maxWidth: 200}} />
  </TileContainer>
);
export const WithVerticalOnTheTileContainer = () => (
  <TileContainer vertical>
    <DemoTile spacing={10} style={{maxWidth: 200}} />
    <DemoTile spacing={10} style={{maxWidth: 200}} />
    <DemoTile spacing={10} style={{maxWidth: 200}} />
  </TileContainer>
);

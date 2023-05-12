/* eslint-disable import/no-cycle */
import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCardGridPtTile from './ProductCardGridPtTile';
import PtTile from '../../serializer/HalfIndentSerializer';
import Illustration from '../Illustration';
import SmartUnorderedList from '../SmartUnorderedList';
import SmartOrderedList from '../SmartOrderedList';
import Video from '../Video';
import ConditionalButton from '../../../buttons/ConditionalButton';
import ClickableImage from '../ClickableImage';
import { mapMuiBtnToProps } from '../../../../lib/mapToProps';

function SmartGrid({ layout, tiles }) {
  // number of tiles desktop/tablet/tablet-mobile/mobile: '6/4/2/1' -> {lg: 2, md: 3, sm: 6, xs: 12}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = {
      lg: 12 / valueArrNum[0],
      md: 12 / valueArrNum[1],
      sm: 12 / valueArrNum[2],
      xs: 12 / valueArrNum[3],
    };
    return colObj;
  };

  const col = colCalculate(layout);

  return (
    <Grid container spacing={3}>
      {tiles &&
        tiles.map((tile) => {
          const { _key, _type } = tile;

          const tileSelector = (key) => {
            switch (true) {
              case key === 'productCardGridPtTile':
                return <ProductCardGridPtTile {...tile} />;
              case key === 'smartGridPtTile':
                return <PtTile blocks={tile.content} />;
              case key === 'illustration':
                return <Illustration illustration={tile} />;
              case key === 'smartOrderedList':
                return <SmartOrderedList {...tile} />;
              case key === 'smartUnorderedList':
                return <SmartUnorderedList {...tile} />;
              case key === 'clickableImage':
                return <ClickableImage {...tile} />;
              case key === 'video':
                return <Video {...tile} />;
              case key === 'btnBlockMui':
                return <ConditionalButton {...mapMuiBtnToProps(tile)} />;
              default:
                return <div> Tile still under development</div>;
            }
          };

          return (
            <Grid item key={_key} {...col}>
              {tileSelector(_type)}
            </Grid>
          );
        })}
    </Grid>
  );
}

export default SmartGrid;

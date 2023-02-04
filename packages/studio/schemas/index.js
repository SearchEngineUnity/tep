/* eslint-disable import/prefer-default-export */
import * as portableTexts from './portableTexts';
import * as blocks from './blocks';
import * as documents from './documents';
import * as formParts from './formParts';
import * as insertables from './insertables';
import * as sections from './sections';
import * as types from './types';

export const schemaTypes = [
  ...Object.values(portableTexts),
  ...Object.values(blocks),
  ...Object.values(documents),
  ...Object.values(formParts),
  ...Object.values(insertables),
  ...Object.values(sections),
  ...Object.values(types),
];

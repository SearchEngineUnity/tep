/* eslint-disable import/prefer-default-export */
const percentToHex = (p) => {
  const percent = Math.max(0, Math.min(100, p)); // bound percent from 0 to 100
  const intValue = Math.round((percent / 100) * 255); // map percent to nearest integer (0 - 255)
  const hexValue = intValue.toString(16); // get hexadecimal representation
  return hexValue.padStart(2, '0').toUpperCase(); // format with leading 0 and upper case characters
};

export const determineColor = (color) => {
  if (!color?.hex) {
    return null;
  }

  const alphaAsHex = percentToHex(color.alpha * 100);

  return color.hex + alphaAsHex;
};

export const lrColCalculator = (value) => {
  switch (value) {
    case 9:
      return {
        xs: 12,
        sm: 6,
        md: 9,
      };
    case 8:
      return {
        xs: 12,
        sm: 6,
        md: 8,
      };
    case 7:
      return {
        xs: 12,
        sm: 6,
        md: 7,
      };
    case 6:
      return {
        xs: 12,
        sm: 6,
        md: 6,
      };
    case 5:
      return {
        xs: 12,
        sm: 6,
        md: 5,
      };
    case 4:
      return {
        xs: 12,
        sm: 6,
        md: 4,
      };
    case 3:
      return {
        xs: 12,
        sm: 6,
        md: 3,
      };
    default:
      console.log('calculator missing');
      return null;
  }
};

export const stackColCalculator = (value) => {
  switch (value) {
    case 12:
      return {
        xs: 12,
      };
    case 10:
      return {
        xs: 12,
        md: 10,
      };
    case 9:
      return {
        xs: 12,
        md: 9,
      };
    case 8:
      return {
        xs: 12,
        md: 8,
      };
    case 7:
      return {
        xs: 12,
        md: 7,
      };
    case 6:
      return {
        xs: 12,
        md: 6,
      };
    case 5:
      return {
        xs: 12,
        md: 5,
      };
    case 4:
      return {
        xs: 12,
        md: 4,
      };
    case 3:
      return {
        xs: 12,
        md: 3,
      };
    case 2:
      return {
        xs: 12,
        md: 2,
      };
    default:
      console.log('calculator missing');
      return null;
  }
};

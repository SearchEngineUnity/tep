/* eslint-disable import/prefer-default-export */
export const determineColor = (color) => {
  const {
    rgb: { r, g, b, a },
  } = color;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

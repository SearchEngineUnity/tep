import React from 'react';
import { deepmerge } from '@mui/utils';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useCustomTheme } from '../useCustomTheme';

export default function TopLayout({ children, theme }) {
  const customTheme = useCustomTheme();

  const mergedTheme = deepmerge(theme, customTheme);

  return (
    <ThemeProvider theme={mergedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

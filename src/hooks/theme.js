import { useContext } from 'react';

import { ThemeContext } from 'styled-components';

export function useColors() {
  const theme = useContext(ThemeContext);
  return theme.colors;
}

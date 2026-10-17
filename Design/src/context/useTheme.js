import { useContext } from 'react';
import { ThemeContext } from './ThemeContextInstance';

export const useTheme = () => useContext(ThemeContext);

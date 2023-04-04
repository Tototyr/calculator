import { useContext } from 'react';
import { ThemeContext } from '../../providers/ThemeProvide';

export const useTheme = () => {
    const value = useContext(ThemeContext);

    return value;
};

import { Palette, styled } from '@mui/material/styles';
import { IconColorType, IconSizeType } from '.';

interface StyledSkyIconProps {
  fontSize?: IconSizeType;
  color?: IconColorType;
}

const mapSizes = {
  small: '20px',
  medium: '40px',
  large: '50px',
  inherit: 'unset',
};

const getMapColors = (palette: Palette): Record<IconColorType, string> => ({
  action: palette.greyAction,
  disabled: palette.action.disabled,
  error: palette.error.main,
  info: palette.status.red,
  inherit: 'inherit',
  primary: palette.primary.main,
  primaryLight: palette.primary.light,
  secondary: palette.secondary.main,
  success: palette.success.main,
  warning: palette.warning.main,
});

export const StyledCardIcon = styled('div')<StyledSkyIconProps>(
  ({ color, fontSize, theme: { palette } }) => {
    const mapColors = getMapColors(palette);

    return {
      width: mapSizes[fontSize || 'small'],
      height: mapSizes[fontSize || 'small'],
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: color ? mapColors[color] : 'white',
    };
  }
);

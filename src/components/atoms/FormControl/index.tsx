import React from 'react';
import FormHelperText from '@mui/material/FormHelperText';
import { StyledFormControl } from './styles';

interface FormControlProps {
  error?: string;
  width?: string;
  minWidth?: string;
  disabled?: boolean;
  children?: React.ReactNode | React.ReactNode[];
}

export const FormControl = ({
  error,
  width,
  minWidth,
  disabled,
  children,
}: FormControlProps) => {
  return (
    <StyledFormControl
      width={width}
      error={!!error}
      minwidth={minWidth}
      data-testid="form-control"
      disabled={disabled}
    >
      {children}
      {!!error && <FormHelperText>{error}</FormHelperText>}
    </StyledFormControl>
  );
};

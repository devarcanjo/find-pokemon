import React from 'react';
import { StyledFormControlLabel } from './styles';
import { FormControl } from '../FormControl';
import { CheckboxControl } from '../CheckboxControl';

export interface CheckBoxProps {
  label: string;
  checked?: boolean;
  labelPlacement: 'start' | 'end';
  size: 'small' | 'medium';
  error?: string;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

export const CheckBox = ({
  label,
  checked,
  labelPlacement,
  size,
  error,
  onChange,
}: CheckBoxProps) => {
  return (
    <FormControl error={error}>
      <StyledFormControlLabel
        control={
          <CheckboxControl
            checked={checked}
            size={size}
            onAction={onChange}
          />
        }
        label={label}
        labelPlacement={labelPlacement}
        data-testid="sky-check-box"
      />
    </FormControl>
  );
};

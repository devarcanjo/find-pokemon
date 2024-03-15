import React from 'react';
import { StyledTableCheckbox } from './styles';

interface CheckboxControlProps {
  indeterminate?: boolean;
  checked?: boolean;
  onAction?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  size?: 'small' | 'medium';
  padding?: 'default' | 'none' | 'table';
}

export const CheckboxControl = ({
  indeterminate,
  checked,
  onAction,
  size = 'small',
  padding = 'default',
}: CheckboxControlProps) => {
  return (
    <StyledTableCheckbox
      indeterminate={indeterminate}
      checked={checked}
      onChange={onAction}
      size={size}
      padding={padding}
      data-testid="sky-checkbox-control"
    />
  );
};

import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';

const paddingByType: { [key: string]: string } = {
  default: '9px',
  none: '0px',
  table: '8px 0 8px 10px',
};

interface CustomCheckboxProps {
  padding: string;
}

export const StyledTableCheckbox = styled(Checkbox)<CustomCheckboxProps>(
  ({ padding }) => ({
    padding: paddingByType[padding],
  })
);

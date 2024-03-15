import { FormControl, styled } from '@mui/material';

interface CustomFormControlProps {
  minwidth?: string;
  width?: string;
}

export const StyledFormControl = styled(FormControl)<CustomFormControlProps>(
  ({ minwidth, width }) => ({
    minWidth: minwidth,
    width,
  })
);

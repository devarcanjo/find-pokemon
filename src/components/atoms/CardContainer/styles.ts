import { Card, styled } from "@mui/material";
import { CardJustify } from ".";

interface CustomCardContainerProps {
  justify: CardJustify;
  height?: string;
  transparent?: boolean;
}

export const StyledCardContainer = styled(Card)<CustomCardContainerProps>(
  ({ height, onClick }) => ({
    width: "100%",
    height,
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "4px",
    boxShadow: "none",
    boxSizing: "border-box",
    display: "flex",
    cursor: onClick ? "pointer" : "default",
  })
);

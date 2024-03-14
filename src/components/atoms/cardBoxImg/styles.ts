import { Card, styled } from "@mui/material";
import { Skyjustify } from ".";

interface CustomCardProps {
  justify: Skyjustify;
  height?: string;
  transparent?: boolean;
}

export const StyledCardBoxImg = styled(Card)<CustomCardProps>(
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

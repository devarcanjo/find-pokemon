import { StyledCardBoxVertical } from "./styles";

export type CardJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-evenly"
  | "space-between";

interface Props {
  content?: React.ReactElement;
  justify?: CardJustify;
  height?: string;
  transparent?: boolean;
  onAction?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardBoxVertical = ({
  justify = "flex-start",
  height,
  transparent = false,
  onAction,
}: Props) => {
  return (
    <StyledCardBoxVertical
      data-testid="card-box-vertical"
      onClick={onAction}
      justify={justify}
      height={height}
      transparent={transparent}
    >
    </StyledCardBoxVertical>
  );
};

import { StyledCardContainer } from "./styles";

export type Skyjustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-evenly"
  | "space-between";

interface Props {
  content?: React.ReactElement;
  justify?: Skyjustify;
  height?: string;
  transparent?: boolean;
  onAction?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardContainer = ({
  justify = "flex-start",
  height,
  transparent = false,
  onAction,
}: Props) => {
  return (
    <StyledCardContainer
      data-testid="card-container"
      onClick={onAction}
      justify={justify}
      height={height}
      transparent={transparent}
    >
    </StyledCardContainer>
  );
};

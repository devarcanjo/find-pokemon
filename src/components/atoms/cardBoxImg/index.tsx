import { StyledCardBoxImg } from "./styles";

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

export const CardBoxImg = ({
  content,
  justify = "flex-start",
  height,
  transparent = false,
  onAction,
}: Props) => {
  return (
    <StyledCardBoxImg
      data-testid="card-box-img"
      onClick={onAction}
      justify={justify}
      height={height}
      transparent={transparent}
    >
      {content}
    </StyledCardBoxImg>
  );
};

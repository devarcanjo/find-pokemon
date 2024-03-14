import { StyledCardBoxImg } from "./styles";

export type Skyjustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-evenly"
  | "space-between";

interface Props {
  header?: React.ReactElement;
  content?: React.ReactElement;
  footer?: React.ReactElement;
  justify?: Skyjustify;
  height?: string;
  transparent?: boolean;
  onAction?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CardBoxImg = ({
  header,
  content,
  footer,
  justify = "flex-start",
  height,
  transparent = false,
  onAction,
}: Props) => {
  return (
    <StyledCardBoxImg
      data-testid="sky-card"
      onClick={onAction}
      justify={justify}
      height={height}
      transparent={transparent}
    >
      {header}
      {content}
      {footer}
    </StyledCardBoxImg>
  );
};

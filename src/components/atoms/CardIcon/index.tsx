import React from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

export type IconType = "arrow-down";

const typeToIcon: Record<IconType, React.ComponentType<Omit<SkyIconProps, "type">>> = {
  ['arrow-down']: () => <KeyboardArrowDown />,
};

const mapIconByType = (type: IconType) => typeToIcon[type];

export type IconColorType =
  | "inherit"
  | "action"
  | "disabled"
  | "primary"
  | "primaryLight"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "success";

export type IconSizeType = "inherit" | "small" | "medium" | "large";

export interface SkyIconProps {
  type: IconType;
  fontSize?: IconSizeType;
  color?: IconColorType;
}

export const CardIcon = ({ type, ...iconProps }: SkyIconProps) => {
  const Icon = mapIconByType(type);

  return <Icon data-testid="sky-icon" {...iconProps} />;
};

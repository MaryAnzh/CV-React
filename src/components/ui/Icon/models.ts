import type { HTMLAttributes } from "react";

import type { IconNameType, SizeChartType } from "~types";

export type IconProps = {
  iconName: IconNameType;
  iconSize?: SizeChartType;
  rotate?: number;
  size?: number;
  width?: number;
} & HTMLAttributes<HTMLOrSVGElement>;

export type IconType = Omit<IconProps, "iconName" | "iconSize">;

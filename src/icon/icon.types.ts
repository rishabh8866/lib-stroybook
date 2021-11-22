import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  icon: IconProp;
  color?: string;
  spin?: boolean;
  size?: SizeProp;
}
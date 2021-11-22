export interface NavItemExtraProps {
  open: boolean;
  list: {label: string, onClick?: any, divider?: boolean; isAnchorTag?: boolean; className?: string;
    isbold?: boolean}[];
  isRight?: boolean;
  forwardRef?: any;
}
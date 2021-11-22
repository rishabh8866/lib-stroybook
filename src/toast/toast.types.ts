export interface ToastProps {
  open: boolean;
  subTitle?: string;
  title?: string;
  isStack?: boolean;
  img?: string;
  timeOut?: number;
  bgColor?: "primary" |"secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"
  onClose?: any;
  position?: "bottom-right" | "bottom-left" |  "top-right" | "top-left" |  "top-center" | "bottom-center" |
    "center-left" | "center-center" | "center-right"
}
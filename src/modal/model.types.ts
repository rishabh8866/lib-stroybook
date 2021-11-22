export interface ModalProps  {
  open: boolean;
  hideClose?: boolean;
  title: string;
  size?: string;
  onClose?: () => void;
  buttons?: {label: string, onClick: any, className: string}[]
}
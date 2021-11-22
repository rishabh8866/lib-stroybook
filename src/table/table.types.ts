export interface ModalProps  {
  className?: string
  rowData: any;
  colummns: {key: string, headerValue: string,  sort?: boolean}[],
  perPage?: number;
  search?: boolean
}
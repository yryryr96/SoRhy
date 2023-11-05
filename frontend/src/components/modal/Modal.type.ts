export interface ModalType {
  isOpen?: boolean;
  onClose?: () => void;
  bigtext: string;
  smalltext?: string;
  cancel?: string;
  confirm?: string;

  contenttype?: string;
  surveyid?: string;

  onConfirmClick?: () => void;
  onDelete?: () => void;

  imgsrc?: string;
}

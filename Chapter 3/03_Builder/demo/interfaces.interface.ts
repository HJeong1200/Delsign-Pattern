import { IModalBuilder } from "./builder";

export interface IModal {
  title?: string;
  content?: string;
  footer?: any;
}

export interface IDirector {
  builder: IModalBuilder;

  buildMessageModal(content: string): void;
  buildAlertModal(content: string): void;
  buildInputModal(title: string, content: string): void;
  buildConfirmModal(content: string): void;
}

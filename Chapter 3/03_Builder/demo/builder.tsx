import { IModal } from "./interfaces.interface";

/**
 * Builder class
 * Concrete Builder에 필요한 메서드 정의
 */
export interface IModalBuilder {
  reset(): void;
  setTitle(title: string): void;
  setContent(content: string): void;
  setFooter(footer: any): void;
  getResult(): () => JSX.Element;
}

/**
 * Concrete Builder class
 * IModalBuilder를 구현하는 클래스
 * 실제 객체를 생성하는 로직 구현
 */
export class ModalBuilder implements IModalBuilder {
  private modal: IModal;

  reset(): void {
    this.modal = {};
  }

  setTitle(title: string): void {
    this.modal.title = title;
  }

  setContent(content: string): void {
    this.modal.content = content;
  }

  setFooter(footer: any): void {
    this.modal.footer = footer;
  }

  getResult(): () => JSX.Element {
    return () => (
      <div>
        <h1>{this.modal.title}</h1>
        <p>{this.modal.content}</p>
        <div>{this.modal.footer}</div>
      </div>
    );
  }
}

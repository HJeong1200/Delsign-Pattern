import { IModalBuilder } from "./builder";
import { IDirector } from "./interfaces.interface";

/**
 * Director class
 * Builder를 사용하여 객체를 생성하는 메서드를 정의
 */
export class Director implements IDirector {
  builder: IModalBuilder;

  constructor(builder: IModalBuilder) {
    this.builder = builder;
  }

  buildMessageModal(content: string) {
    this.builder.reset();
    this.builder.setContent(content);
    this.builder.setFooter(<CloseButton />);
  }

  buildAlertModal(content: string) {
    this.builder.reset();
    this.builder.setTitle("Alert");
    this.builder.setContent(content);
  }

  buildInputModal(title: string, content: string) {
    this.builder.reset();
    this.builder.setTitle(title);
    this.builder.setContent(
      <>
        <div>{content}</div>
        <input />
      </>
    );
    this.builder.setFooter(<SubmitButton />);
  }

  buildConfirmModal(content: string) {
    this.builder.reset();
    this.builder.setTitle("Confirm");
    this.builder.setContent(content);
    this.builder.setFooter(
      <>
        <CancelButton />
        <ConfirmButton />
      </>
    );
  }
}

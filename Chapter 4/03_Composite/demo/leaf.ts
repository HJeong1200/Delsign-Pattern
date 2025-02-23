import { IComponent } from "./component";

// Leaf 추상 클래스 정의
abstract class Leaf<T> implements IComponent {
  content: T;

  createDate: Date;

  modifiedDate: Date;

  type: string;

  name: string;

  constructor(name: string, type: string, content: T) {
    this.content = content;
    this.createDate = new Date();
    this.modifiedDate = new Date();
    this.type = type;
    this.name = name;
  }

  update(newContent: T) {
    this.content = newContent;
    this.modifiedDate = new Date();
  }

  open() {
    return this.content;
  }
}

// Leaf 클래스를 상속받은 구체적인 클래스 정의
export class TextFile extends Leaf<string> {
  constructor(name: string, content: string) {
    super(name, "txt", content);
  }
}

export class IconFile extends Leaf<SVGElement> {
  constructor(name: string, content: SVGElement) {
    super(name, "svg", content);
  }
}

import { IComponent } from "./component";

// Composite 추상 클래스 정의
abstract class Composite implements IComponent {
  children: IComponent[];

  createDate: Date;

  modifiedDate: Date;

  type: string;

  name: string;

  constructor(name: string) {
    this.name = name;
    this.children = [];
    this.createDate = new Date();
    this.modifiedDate = new Date();
  }

  abstract add(c: IComponent): void;

  abstract open(): IComponent[];

  abstract remove(c: IComponent): void;
}

// Composite 클래스를 상속받은 Directory 클래스 정의
// Directory는 다른 Directory를 자식으로 가질 수도 있으며, Leaf를 자식으로 가질 수도 있음
export class Directory extends Composite {
  constructor(name: string) {
    super(name);

    this.type = "directory";
  }

  add(c: IComponent) {
    this.children.push(c);
  }

  open() {
    return this.children;
  }

  remove(c: IComponent) {
    this.children = this.children.filter((child) => child !== c);
  }
}

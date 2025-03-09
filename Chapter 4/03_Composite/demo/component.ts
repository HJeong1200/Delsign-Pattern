// Leaf, Composite에 공통적으로 포함되는 인터페이스를 정의
// 개별 파일과 디렉토리는 생성일, 수정일, 타입, 이름을 가질 수 있으며, open 메서드로 열 수 있음
export interface IComponent {
  createDate: Date;
  modifiedDate: Date;
  type: string;
  name: string;
  open(): void;
}

# Factory

## 의도

- 객체를 생성하는 인터페이스를 제공하되, 어떤 클래스의 인스턴스를 생성할지에 대한 결정은 서브클래스에게 위임

## 동기

- 어떠한 서브클래스를 생성하는지에 대한 정보를 팩토리 메서드에 캡슐화
- 팩토리 메서드는 객체를 생성하는 역할만 담당

## 활용성

- 부모 클래스가 본인이 생성해야 하는 객체의 클래스를 에측하지 못하는 경우
- 부모 클래스가 특정한 헬퍼 서브클래스에게 객체 생성을 위임하고, 어떠한 헬퍼 클래스에게 위임하는지의 여부를 캡슐화고자 하는 경우

## 구조

TODO: Add Image

## 참여자

- Product
  - Factory 메서드가 생성하는 객체의 인터페이스 정의
- ConcreteProduct
  - Product 인터페이스를 실제로 구현
- Creator
  - Product 타입의 객체를 반환하는 Factory 메서드 선언
  - Default ConcreteProject를 반환하는 Factory 메서드 정의 가능
- ConcreteCreator
  - Factory 메서드를 override하여 ConcreteProduct 인스턴스 반환

## 결과

### 장점

- 특정 어플리케이션에 종속된 클래스를 생성하는 코드를 제거
  - Factory 메서드는 Product 인터페이스에만 의존하기 때문에 이를 만족하는 어떠한 ConcreteProduct 클래스도 반환할 수 있음
- Single Responsibility Principle 준수
  - Product 생성 코드를 별도의 클래스/메서드로 분리
- Open/Closed Principle 준수
  - 기존의 클라이언트 코드를 변경하지 않고 새로운 Product를 도입할 수 있음
- 하나의 클래스의 서브클래스가 만들어질 떄 대응되는 클래스의 서브클래스를 반드시 생성해야 하는 경우 두 서브클래스를 연결 가능

### 단점

- 특정한 ConcreteProduct를 생성하기 위한 용도로만 Creator 클래스를 서브클래스화하는 경우 코드의 복잡성 증가

## 구현

- Creator는 추상 클래스일 수도 있고, 기본적인 구현을 가진 구체 클래스일 수도 있음
- Factory 메서드에 파라미터를 전달하여 여러 종류의 Product를 생성할 수 있음

## 실제 구현 코드 데모

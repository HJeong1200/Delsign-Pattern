# Bridge

## 의도

- 추상화된 인터페이스와 실제 구현부를 분리하여, 서로 독립적으로 변형될 수 있도록 함

## 동기

- 추상화된 구현부가 여러 구현체를 가지는 경우 일반적으로 상쇽을 통해 구현체 생성
- 상속을 통해 구현체를 생성하는 경우, 추상화된 구현부와 실제 구현부가 강하게 결합되어 수정, 확장, 재사용이 어려워지는 문제가 발생
  - 새로운 구현체를 추가하기 위해서는 상속을 통해 새로운 클래스를 생성해야 함
  - 클라이언트 코드가 해당 구현체에 의존하게 됨
- Bridge 패턴을 사용하여 추상화와 구현체를 별도의 클래스 계층으로 분리

## 활용성

- 추상화된 구현부와 실제 구현의 결합을 원하지 않는 경우
  - 구현부가 런타임에 선택되어어야 하거나 런타임에 변경될 수 있는 케이스
- 추상화된 구현부와 실제 구현 모두 서브클래스를 통한 확장이 필요한 경우
- 구현체의 변경이 클라이언트에 영향을 미치지 않아야 하는 경우
- 구현부를 여러 객체에서 사용하고자 하는 경우

## 구조

<img width="1063" alt="image" src="https://github.com/user-attachments/assets/329ecc1d-7b99-461f-a2d9-08c46727e892" />


## 참여자

- Abstraction
  - 추상화된 인터페이스 정의
  - Implementor 타입의 객체에 대한 참조 유지
- RefinedAbstraction
  - Abstraction에서 정의된 인터페이스 확장
- Implementor
  - 구현 클래스에 대한 인터페이스 정의
    - Implementor의 인터페이스가 Abstraction의 인터페이스와 동일하지 않아도 무방함
    - 일반적으로 Implementor의 인터페이스는 간단한 동작만 제공하며, Abtraction은 Implementor의 동작을 기반으로 더 복잡한 동작을 제공
- ConcreteImplementor
  - Implementor 인터페이스를 실제로 구현

## 협력 방식

- Abstraction이 클라이언트의 요청 사항을 Implementor 객체에게 전달

## 결과

### 장점

- 인터페이스와 구현부를 분리하여 런타임에 구성 혹은 변경 가능
- Abstraction과 Implementor를 각각 확장 가능
- 클라이언트는 Abstraction과 Implementor만 알면 됨

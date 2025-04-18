# Decorator

## 의도

- 객체에 동적으로 추가적인 책임을 부가할 수 있도록 함
- 기능을 추가하는 방식으로 서브클래싱의 대안으로 활용 가능

## 동기

- 전체 클래스가 아닌 개별 객체에만 기능을 추가하고자 하는 경우
- 기능을 추가하는 객체(Decorator)로 기능을 추가하고자 하는 객체(Component)를 감싸는 방식으로 구현
- 데코레이터는 요청을 컴포넌트에게 전달하며, 요청을 전달하기 전/후에 추가적인 행동을 수행할 수 있음
- 여러 데코레이터를 중첩하여 사용 가능
- 클라이언트는 데코레이터가 컴포넌트인지, 데코레이터인지 알 수 없음

## 활용성

- 다른 객체에 영향을 주지 않으면서 개별 객체에 책임을 추가하고자 하는 경우 사용
- 책임을 자유롭게 추가하고 제거하고자 하는 경우 사용
- 서브클래싱을 사용하기에는 가능한 기능 조합이 너무 많거나, 클래스 정의를 할 수 없는 경우 사용

## 구조

<img width="1095" alt="image" src="https://github.com/user-attachments/assets/43c87c88-4289-46b6-92ef-e069fc9bebd0" />

## 참여자

- Component
  - 기능이 추가될 수 있는 객체의 인터페이스 정의
- ConcreteComponent
  - 기능이 추가될 수 있는 객체
- Decorator
  - Component 객체를 참조하며 Component의 인터페이스에 부합하는 인터페이스 정의
- ConcreteDecorator
  - Component 객체에 책임 추가

## 협력 방식

- Decorator는 Component 객체에 요청을 전달하며, 필요한 경우 추가적인 행동을 수행할 수 있음

## 결과

### 장점

- 상속보다 유연하게 책임 추가 가능
  - 런타임에 책임의 추가 및 제거 가능
  - 여러 책임을 섞어서 사용할 수 있음
- 거대한 기능을 가진 클래스를 피할 수 있음
  - 하나의 작은 클래스를 생성하고 Decorator 객체를 통해 기능을 점진적으로 추가 가능
  - Decorator 객체를 개별적으로 생성하여 다양한 클래스에 적용 가능

### 단점

- Decorator와 컴포넌트는 동일하지 않음
  - Decorator가 적용된 컴포넌트와 적용되지 않은 컴포넌트는 동일하지 않음
- 수많은 작은 객체가 생성될 수 있음
  - 비슷한 모양의 작은 객체들이 많이 생성될 수 있어 새롭게 시스템을 접하는 사람에게 어려움을 줄 수 있으며, 디버깅이 어려울 수 있음

## 구현

- Decorator는 Component의 인터페이스를 구현해야 함
- 하나의 책임만 추가하고자 할 때에는 추상 Decorator 클래스를 구현하지 않아도 무방함
- 컴포넌트와 Decorator는 동일한 Component 클래스에서 상속되어야 하기 때문에 공통의 클래스를 가볍게 만드는 것이 중요함

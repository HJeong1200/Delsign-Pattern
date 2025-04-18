# Flyweight

## 의도

- 많은 양의 객체를 효율적으로 사용하기 위해 상태를 공유

## 동기

- flyweight은 다양한 컨텍스트에서 동시에 사용할 수 있는 공유 가능한 객체임
- 내부의 상태와 외부의 상태를 구분
  - 내부의 상태: flyweight 내부에 저장되며, flyweight이 사용되는 컨텍스트에 구애받지 않는 공유 가능한 정보
  - 외부의 상태: flyweight이 사용되는 컨텍스트에 따라 달라져서 공유될 수 없는 정보이며, 클라이언트의 객체가 flyweight에게 상태를 전달할 책임을 짐
- 각각의 객체로 표현하기에는 너무 많은 양의 객체가 존재하는 경우 사용할 수 있음

## 활용성

- flyweight의 유용성은 언제, 어떻게 사용하는지에 크게 영향을 받음
- 아래의 모든 조건에 해당하는 경우에 사용할 수 있음
  - 어플리케이션이 많은 양의 객체를 사용함
  - 많은 객체를 저장하는 비용이 굉장히 큰 상태임
  - 대부분의 객체의 상태가 외부로 공유될 수 있음
  - 외부의 상태를 제거하는 경우 많은 객체의 그룹을 소수의 공유된 객체로 바꿀 수 있음
  - 어플리케이션이 객체의 고유성에 영항을 받지 않음

## 구조

<img width="625" alt="image" src="https://github.com/user-attachments/assets/f81aa7bc-d7bc-43c3-95b0-2613985049fd" />

## 참여자

- Flyweight
  - flyweight 객체의 인터페이스를 정의
- ConcreteFlyweight
  - Flyweight의 인터페이스를 구현하고 내부의 상태에 대한 저장 공간을 제공
  - ConcreteFlyweight 객체는 공유 가능해야 하며, 저장하는 상태는 사용되는 컨텍스트와 상관 없이 독립적이어야 함
- UnsharedConcreteFlyweight
  - 공유되지 않는 Flyweight의 서브클래스
- FlyweightFactory
  - Flyweight 객체를 생성하고 관리
- Client
  - Flyweight에 대한 참조를 관리
  - Flyweight의 외부 상태를 저장하거나 계산

## 협력 방식

- Flyweight의 상태는 내부의 상태 혹은 외부의 상태로 구분되어야 함
  - 내부의 상태는 ConcreteFlyweight 객체에 저장되어야 함
  - 외부의 상태는 클라이언트 객체에 저장되어야 하며, flyweight에게 전달되어야 함
- 클라이언트는 ConcreteFlyweight을 직접적으로 인스턴스화해서는 안되며, FlyweightFactory 객체를 통해서만 생성해야 함

## 결과

### 장점

- 더 많은 수의 flyweight 객체가 공유될수록 각각의 객체 상태 저장에 필요한 비용이 줄어듦

### 단점

- 외부 상태를 찾거나 계산하는 비용이 추가됨

## 구현

- 외부 상태 제거
  - Flyweight은 객체의 외부 상태를 얼마나 많이 제거할 수 있는지의 여부에 따라 활용도가 달라질 수 있음
- 공유된 객체 관리
  - 객체가 공유되기 때문에 클라이언트는 flyweight 객체를 직접적으로 인스턴스화해서는 안되며, FlyweightFactory에 책임을 넘겨야 함

# Iterator

## 의도

- 구현을 노출하지 않고 객체 모음 내의 각각의 요소에 순서대로 접근하는 방법을 제공

## 동기

- 별도의 Iterator 객체에 순회에 대한 책임을 분리
  - 내부의 구조를 드러내지 않은 상태에서 각각의 요소에 접근하는 방법을 제공할 수 있음
  - 하나 이상의 방법으로 리스트를 순회하고자 하는 요구 사항 충족 가능
  - 리스트 인터페이스에 각각의 순회 메서드를 포함하지 않는 방법
- Iterator 클래스는 리스트의 요소에 접근하는 인터페이스를 정의하며, Iterator 객체는 현재 방문 중인 요소와 지금까지 순회한 요소에 대한 정보를 기억하는 책임을 가짐
- 순회 메커니즘을 별도의 클래스로 분리함으로써 다양한 순회 규칙을 리스트 인터페이스에서 분리 가능
- 다형적 순회(Polymorphic iteration)를 지원함으로써 특정한 클래스에 종속되지 않은 순회 방식을 구현할 수 있음
  - 지원하고자 하는 리스트들에 대한 공통된 인터페이스를 AbstractList 클래스 및 AbstractIterator 클래스로 정의하고 각각의 서브클래스에서 구체화
  - 각각의 List 객체가 Iterator을 생성하는 책임을 가지도록 하며, 이 때 Factory 메서드 사용하여 적절한 iterator 선택할 수 있음

## 활용성

- 내부의 구조를 드러내지 않으면서 객체 모음의 요소에 접근하는 방법을 제공
- 객체 모음에 대해 다양한 순회 방식을 제공
- 다양한 객체 모음 구조에 대해 동일한 순회 방식 제공

## 구조

TODO: Add Image

## 참여자

- Iterator
  - 각 요소에 접근 및 순회하는 인터페이스 정의
- ConcreteIterator
  - Iterator 인터페이스 구현
  - 순회 중 현재 위치 참조
- Aggregate
  - Iterator 객체를 생성하는 인터페이스 정의
- ConcreteAggregate
  - 적절한 Iterator를 반환할 수 있는 로직 구현

## 협력 방식

- ConcreteIterator는 순회 중인 객체 모음 안의 현재 요소를 기억하고 다음으로 순회할 객체를 계산

## 결과

### 장점

- 리스트를 순회하는 다양한 방식을 제공할 수 있음
- 순회 방식을 Iterator로 분리하여 Aggregate의 인터페이스 단순화 가능
- 하나의 Aggregate에 여러 개의 순회가 동시에 실행될 수 있음

## 구현

- Client가 순회 과정을 담당하는 경우 external iterator라고 하며, Iterator가 순회 과정을 담당하는 경우 internal iterato라고 함
  - external iterator는 internal iterator보다 유연하고, 서로 다른 두 collection을 비교하기 쉽다는 장점이 있음
  - internal iterator는 사용이 쉽다는 장점이 있음
- Aggregate이 순회 알고리즘을 정의하고 iterator는 순회 중인 상태를 저장하기만 하는 경우 iterator를 cursor라고 부름
- Robust iterator를 구현함으로써 aggregate를 순회하면서 수정 사항이 생기는 경우 수정된 내용을 현재 순회에 영향을 주지 않으면서 안전하게 저장할 수 있음
- Iterator를 구현하는 최소한의 동작은 First, Next, IsDone, CurrentItem이며, Previous, SkipTo 등의 추가적인 동작을 구현하면 유용한 경우가 있음
- 다양한 리스트에 대한 순회 방식을 제공할 필요가 있는 경우에만 polymorphic iterator를 사용하고, 대부분의 경우에는 각각의 concrete iterator를 사용하는 것이 좋음
- Composite에 대한 Iterator를 만드는 경우 internal iterator만 구현하는 것이 용이함
  - Composite의 노드에 다른 노드로 이동하는 인터페이스가 정의되어 있는 경우 cursor iterator가 대안이 될 수 있음
  - Composite은 대개 하나 이상의 순회 방식을 지원해야 하며, 다른 종류의 Iterator 클래스를 정의하여 지원 가능
- NullIterator는 IsDone이 항상 참인 클래스임
  - Tree 구조의 leaf 요소에 대한 순회를 지원하는 데 유용하게 사용 가능

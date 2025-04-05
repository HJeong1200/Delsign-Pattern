# Structural Patterns

## 구조 패턴이란?

### 구조 패턴의 정의

- 클래스나 객체를 조합해 더 큰 구조를 만드는 패턴

### 구조 패턴의 분류

- Structural Class Patterns
  - 상속을 통해 인터페이스나 구현을 생성
  - 독립적으로 개발된 라이브러리를 통합해서 사용 가능
  - ex. Adapter
- Structural Object Patterns
  - 런타임에 객체를 합성하여 새로운 기능을 추가 가능
  - ex. Composite, Proxy, Flyweight, Facade, Bridge, Decorator

## 구조 패턴 정리

- class-based 패턴은 상속에 의존하며, object-based 패턴은 객체 합성에 의존한다는 공통점이 있음
- 하지만 설계의 의도에 따라 다른 패턴을 사용하게 됨

### Adapter vs Bridge

- Adapter는 설계 이후 단계에서 이미 존재하는 인터페이스 간의 호환성에만 관심을 가짐
- Bridge는 설계 단계에서 추상과 구현 간 안정적인 인터페이스 제공

### Composite vs Decorator vs Proxy

- Decorator는 subclassing을 하지 않고도 객체에 책임을 추가하는 용도로 사용
- Composite은 다양한 연관된 객체들이 동일하게 취급될 수 있도록 클래스를 구조화하는 용도로 사용
  - Composite와 Decorator는 동시에 사용되기도 함
- Proxy는 목표한 객체의 대체물을 제공하기 위해 사용

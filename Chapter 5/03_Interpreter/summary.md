# Interpreter

## 의도

- 어떠한 언어에 대하여 문법 표현과 함께 해당 언어로 이루어진 문을 번역하는 해석자를 제공

## 동기

- 특정한 문제가 충분히 자주 발생한다면 해당 문제를 문장으로 만들고 문장을 해석하는 해석자를 만들어서 해결하는 방식을 적용할 수 있음
  - 특정 패턴과 일치하는 스트링을 찾는 문제의 경우 별도의 알고리즘을 만들기보다 정규표현식을 해석하는 방법을 사용
- Interpreter 패턴은 각각의 규칙을 클래스를 사용하여 표현하고, 클래스는 Interpret 메서드를 통해서 해석

## 활용성

- 특정 언어를 해석해야 하며, 언어의 문을 추상 문법 트리로 표현할 수 있는 경우 사용
- 문법이 간단한 경우 Interpreter 패턴을 사용 가능하며, 문법이 복잡한 경우 parser generator와 같은 툴을 사용하는 것이 나을 수도 있음
- 효율성이 중요한 요소가 아닌 경우 사용

## 구조

TODO: Add Image

## 참여자

- AbstractExpression
  - 추상 구문 트리 안의 모든 노드에 공통적으로 적용되는 추상 Interpret 메서드 정의
- TerminalExpression
  - Interpret 메서드 구현
  - 문장의 터미널 심볼 당 하나의 인스턴스 필요
- NonterminalExpression
  - 문법의 모든 규칙에 필요한 하나의 클래스
  - 각각의 심볼에 대하여 AbstractExpression 인스턴스 변수 참조
- Context
  - Interpreter에 전역적으로 필요한 정보 참조
- Client
  - 특정 문장에 대한 추상 구문 트리를 만들고 Interpret 실행

## 협력 방식

- Client는 문장을 NonterminalExpression과 TerminalExpression으로 구성된 추상 구문 트리로 만들고 Interpret 메서드 실행
- Interpret 동작은 context에 상태를 저장하고 접근

## 결과

### 장점

- 문법 추가 및 변경 용이
  - 상속을 통해 새로운 규칙을 생성하거나 변경 가능
- 문법 적용 용이
- 새로운 방식으로 표현식을 해석하기 용이

### 단점

- 복잡한 문법은 유지보수가 어려움

## 구현

- Interpreter 패턴은 추상 구문 트리를 구현하는 방식에 대해서는 다루지 않음
- Interpret 메서드는 Visitor 패턴을 통해 별도의 방문자 객체를 생성하는 방식을 주로 사용
- 터미널 심볼은 Flyweight 패턴을 사용하여 공유 가능

# Abtract Factory

## 의도

- 상세화된 서브클래스를 정의하지 않고도 서로 관련성이 있거나 독립적인 여러 객체의 군을 생성하기 위한 인터페이스 제공

## 동기

- 서로 다른 룩앤필 표준에 대한 지원

## 활용성

- 객체가 생성되거나 표현되는 방식과 무관하게 시스템의 독립성을 유지하고자 하는 경우
- 여러 제품군 중 하나를 선택해서 시스템을 설정해야 하며, 한번 구성한 제품을 다른 것으로 대체할 수 있는 경우
- 관련된 제품 객체들이 함께 사용되도록 설계되었으며 이 부분에 대한 제약을 지키고자 하는 경우
- 제품에 대한 구현이 아닌 인터페이스를 노출하고자 하는 경우

## 구조

<img width="690" alt="image" src="https://github.com/user-attachments/assets/586a226c-7b5a-4b4a-afa6-f2790cd6076d" />

## 참여자

- Client
  - AbstractFactory와 AbstractProduct 클래스에 선언된 인터페이스 사용
- Abstract Factory
  - 개념적 제품에 대한 객체를 생성하는 인터페이스 정의
- Concrete Factory
  - 구체적인 제품에 대한 객체를 생성하는 연산 구현
- Abstract Product
  - 개념적 제품 객체에 대한 인터페이스 정의
- Concrete Product
  - 구체적으로 팩토리가 생성할 객체를 정의
  - AbstractProduct가 정의한 인터페이스 구현

## 결과

### 장점

- 구체적인 클래스 분리
- 제품군 대체 가능
- 제품 사이의 일관성 증진

### 단점

- 새로운 종류의 제품 추가 불리

## 구현

1. 팩토리를 단일체로 정의
2. 각 제품을 위한 팩토리 메서드 정의
3. 확장 가능한 팩토리 정의

## 실제 구현 코드 데모

- Demo 디렉토리의 코드에 대한 실제 예시는 아래 링크에서 확인 가능합니다.
  - https://stackblitz.com/edit/vitejs-vite-rstbp6gz

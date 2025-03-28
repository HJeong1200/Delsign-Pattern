# Adapter

## 의도

- 한 클래스의 인터페이스를 클라이언트에 호환 가능한 인터페이스로 변환

## 동기

- 특정 도메인에 종속된 인터페이스로 인해 해당 클래스의 재사용이 불가능한 경우
  1. 기존의 인터페이스를 상속받아 사용하고자 하는 클래스의 메서드를 구현
  2. 어댑터 객체를 만들어서 사용하고자 하는 객체를 합성
- 어댑터는 감싸진 클래스가 제공하지 않지만 클라이언트가 필요로 하는 인터페이스르 제공해야 함

## 활용성

- 기존에 존재하는 클래스를 사용하고 싶지만 필요한 인터페이스를 제공하지 않는 경우
- 관련이 없거나 특정되지 않는 클래스와 함께 사용해야 하는 경우
- 여러 개의 서브클래스를 사용해야 하지만 모든 서브클래스를 상속받을 수 없는 경우

## 구조

- 클래스 어댑터는 다양한 인터페이스를 호환시키기 위해 여러 클래스를 상속받음
<img width="1060" alt="image" src="https://github.com/user-attachments/assets/355b6859-7495-4828-826c-557f17411e48" />

- 객체 어댑터는 객체 합성을 사용해서 인터페이스를 호환시킴
<img width="1062" alt="image" src="https://github.com/user-attachments/assets/e4a7643f-6c33-40eb-9181-be2369db0440" />

## 참여자

- Target
  - Client가 사용하는 구체적인 인터페이스를 정의
- Client
  - Target 인터페이스가 구현된 객체를 사용
- Adaptee
  - 호환이 필요한 인터페이스를 지닌 클래스 혹은 객체
- Adapter
  - Adaptee의 인터페이스를 Target 인터페이스에 맞게 변환

## 협력 방식

- Client는 Adapter 객체를 호출하며, Adapter 객체는 Adaptee 객체를 호출하여 필요한 작업 진행

## 결과

### 장점

- Class Adapter
  - Adaptee의 메서드를 override할 수 있음
  - 단 하나의 객체만 생성하게 됨
- Object Adapter
  - 하나의 Adapter가 다양한 Adaptee에 호환

### 단점

- Class Adapter
  - Adaptee의 subclass의 동작을 추가할 수 없음
- Object Adapter
  - Adaptee의 메서드를 override하기 힘듬

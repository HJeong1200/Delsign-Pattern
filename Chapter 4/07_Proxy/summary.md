# Proxy

## 의도

- 특정 객체에 대한 접근을 제어하기 위해 해당 객체를 대체하는 다른 객체를 제공

## 동기

- 객체의 생성에 많은 비용이 드는 경우 이를 실제로 생성해야 하는 시점이 올 때까지 지연시키기 위해 사용
  - Proxy는 이러한 객체와 동일한 인터페이스를 가지며 필요한 경우 객체를 인스턴스화하는 역할을 담당

## 활용성

- Remote Proxy
  - 다른 장소에 있는 객체에 대한 로컬 대리인 역할을 수행
- Virtual Proxy
  - 요청에 의해서 생성 비용이 큰 객체를 생성
- Protection Proxy
  - 원본 객체의 접근을 제어
- Smart Reference
  - 객체에 접근할 때 추가적인 역할을 수행

## 구조

TODO: Add Image

## 참여자

- Proxy
  - Proxy의 대상에 대한 참조 유지
  - Proxy가 Proxy의 대상과 대체될 수 있도록 동일한 인터페이스 제공
  - Proxy의 대상에 대한 생성과 제거 등의 역할 수행
  - Proxy의 종류에 따라 추가적인 책임이 부여됨
    - Remote Proxy는 외부에 위치한 대상에 요청을 전달하는 역할 수행
    - Virtual Proxy는 대상에 대한 추가적인 정보를 캐싱
    - Protection Proxy는 유효한 권한을 가지고 있는지의 여부를 확인하는 역할을 수행
- Subject
  - RealSubject와 Proxy에 대한 공통된 인터페이스 정의
- RealSubject
  - Proxy가 표현하는 대상

## 협력 방식

- Proxy는 RealSubject에 요청을 전달

## 결과

### 장점

- Proxy는 특정 객체에 대한 간접 참조를 제공하여 Proxy의 종류에 따라 다른 역할을 수행할 수 있도록 함

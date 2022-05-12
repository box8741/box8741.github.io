---
date: '2022-05-12'
title: 'RESR API란?'
categories: ['API']
summary: 'REST API(RESTful API)란 REST 아키텍처의 제약 조건을 준수한다는 애플리케이션 프로그래밍 인터페이스(API)를 뜻합니다.'
thumbnail: './rest-api.png'
---

# 요약

API는 **애플리케이션 프로그래밍 인터페이스** 라는 뜻으로 응용 프로그램에서 사용할 수 있도록 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있도록 만든 인터페이스를 뜻한다.

REST API(RESTful API)란 REST 아키텍처의 제약 조건을 준수한다는 애플리케이션 프로그래밍 인터페이스(API)를 뜻합니다.

쉽게 말해 REST API는 애플리케이션을 서로 연결하여 통신할 수 있도록 하는 것인데 이때
그냥 만들어서 사용하기에는 사람마다 작성 방식이 다르기 때문에 특정 규칙을 두고 만든 것이 REST API라고 할 수 있습니다.

# REST 규칙이란

HTTP URL(Uniform Resource Identifier)을 통해 자원(Resource)을 명시하고, HTTP Method(POST, GET, PUT, DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미한다.

#### CRUD Operation

- Create : 생성(POST)
- Read : 조회(GET)
- UPdate : 수정(PUT)
- Delete : 삭제(DELETE)
- HEAD : header 정보 조회(HEAD)

# REST의 장단점

#### 장점

- HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구출할 필요가 없다.

- HTTP 프로토콜의 표준을 최대한 활용하여 여러 추가적인 장점을 함께 가져갈 수 있게 해 준다.

- HTTP 표준 프로토콜에 따르는 모든 플랫폼에서 사용이 가능하다.

- REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있다.

- 여러 가지 서비스 디자인에서 생길 수 있는 문제를 최소화한다.

- 서버와 클라이언트의 역할을 명확하게 분리한다.

#### 단점

- 표준이 자체가 존재하지 않는다.

- 사용할 수 있는 메소드가 4가지로 제한적이다.

- 브라우저를 통해 테스트할 일이 많은 서비스라면 쉽게 고칠 수 있는 URL보다 Header 정보의 값을 처리해야 하므로 전문성이 요구된다.

- 구형 브라우저에서 호환이 되지 않아 지원해주지 못하는 기능이 존재한다.

# 참고 자료

- [REST API(RESTful API, 레스트풀 API)란? 구현 및 사용법](https://www.redhat.com/ko/topics/api/what-is-a-rest-api)
- [API란 무엇일까? API 쉽게 이해하기](https://brunch.co.kr/@operator/65)
- [REST API란? REST, RESTful이란?](https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80)

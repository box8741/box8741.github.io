---
date: '2022-05-13'
title: '자바스크립트의 이벤트 루프(Event Loop)란?'
categories: ['JavaScript']
summary: '이벤트 루프(Event Loop)를 설명하기 앞서 JavaScript의 특징부터 알고 가야 합니다.

JavaScript는 싱글쓰레드 언어라고 많이 알려져 있습니다. 싱글쓰레드라고 한다면 여러 개의 작업이 있더라도 한 번에 하나의 작업만 수행할 수 있습니다. 하지만 JavaScript를 사용해 보면 멀티쓰레드처럼 동시에 여러 작업을 수행할 수 있다는 것을 알 수 있습니다. 그렇다면 JavaScript는 정말 싱글쓰레드 언어가 맞을까요?'
thumbnail: './event-loop.png'
---

`이벤트 루프(Event Loop)`를 설명하기 앞서 `JavaScript`의 특징부터 알고 가야 합니다.

`JavaScript`는 싱글쓰레드 언어라고 많이 알려져 있습니다. 싱글쓰레드라고 한다면 여러 개의 작업이 있더라도 한 번에 하나의 작업만 수행할 수 있습니다. 하지만 `JavaScript`를 사용해 보면 멀티쓰레드처럼 동시에 여러 작업을 수행할 수 있다는 것을 알 수 있습니다. 그렇다면 `JavaScript`는 정말 싱글쓰레드 언어가 맞을까요?

# JavaScript는 싱글 쓰레드언어가 맞을까?

결론부터 말씀드리자면 맞습니다. 그 이유는 JavaScript의 메인쓰레드인 **이벤트 루프**가 싱글 쓰레드이기 때문입니다. 하지만 **이벤트 루프**만 독립적으로 실행되는것이 아닌 웹 브라우저나 NodeJS 같은 멀티쓰레드 환경에서 실행되고 이를 적절하게 사용함으로써 멀티쓰레드처럼 사용이 가능한 것입니다.

# JavaScript 동작 과정

![event loop img2](./event-loop2.png)

출처 : [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-JavaScript-actually-work-part-1-b0bacc073cf)

사진만 봤을 때는 이해가 잘 가지 않습니다 하나씩 정리해가며 알아보도록 하겠습니다.

## JS Engine

![event loop img3](./event-loop3.png)

출처 : [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-JavaScript-actually-work-part-1-b0bacc073cf)

JavaScript 엔진은 코드를 이해하고 실행을 도와주는 역할을 합니다. 그중에서도 가장 대표적인 엔진으로는 Google의 V8 엔진입니다. 이외에도 각 브라우저 별로 여러 가지 엔진들이 존재하지만 JavaScript 엔진은 크게 `Memory Heap`과 `Call Stack`으로 이루어져 있습니다.

- Memory Heap : 메모리 할당이 일어나는 장소
- Call Stack : 코드가 실행될 경우 하나씩 stack의 형태로 쌓이는 장소

## Memory Heap & Call Stack

먼저 `Memory Heap`에 있는 사용자가 작성한 코드들은 `Call Stack`에서 `Stack` 방식으로 쌓이며 코드를 실행하게 되는데 이때 동기 함수들은 그대로 실행하게 되고 비동기 함수들은 `Web API`로 처리하게 되며 일을 분배합니다.

- Stack : 후입선출(LIFO)로 마지막에 들어간 것이 먼저 나가는 방식

## Web API

Javscript를 사용하면서 우리가 많이 사용하는 API 들은 사실 JavaScript에서 지원하는 것이 아닌 웹 브라우저에서 제공하는 API로 `DOM` ,`AJAX`, `Timeout` 등이 있습니다.

`Call Stack`에서 실행된 비동기 함수는 `Web API`에서 처리를 하게 되고 그동안에 `Call Stack`은 나머지 동기 함수들을 처리하게 됩니다.

`Web API`는 비동기 함수들을 처리하며 작업이 완료된 비동기 함수들을 `Callback Queue`로 넘겨주게 됩니다.

## Callback Queue

`Callback Queue`는 비동기 함수들을 보관하는 장소로 `Event Loop`에서 비동기 함수를 꺼내기 전까지는 계속 `Queue`방식으로 보관하게 됩니다.

- Queue : 선입선출(FIFO)로 먼저 들어간 것이 먼저 나가는 방식

## Event Loop

`Event Loop`는 `Call Stack`과 `Callback Queue`를 상태를 계속 감시하며 `Call Stack`에 함수들이 존재하지 않는다면 `Callback Queue`에 있는 비동기 함수들을 `Call Stack`에 밀어 넣게 됩니다. 그 후 `Call Stack`에서 비동기 함수를 실행시키게 됩니다.

## 참고 영상

<iframe width="640" height="360" src="https://www.youtube.com/embed/8aGhZQkoFbQ" frameborder="0" gesture="media" allowfullscreen=""></iframe>

# 참고 자료

- [자바스크립트는 왜 싱글 쓰레드일까?](https://chanyeong.com/blog/post/44)
- [진짜 ! 쉽게 알아보는 자바스크립트 동작 원리](https://blog.toycrane.xyz/%EC%A7%84%EC%A7%9C-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EB%B3%B4%EB%8A%94-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-c7fbdc44cc97)
- [Event Loop (이벤트 루프)](https://velog.io/@thms200/Event-Loop-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84)
- [How JavaScript works: an overview of the engine, the runtime, and the call stack](https://blog.sessionstack.com/how-does-JavaScript-actually-work-part-1-b0bacc073cf)

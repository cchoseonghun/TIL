미니프로젝트 - 팀 소개 웹페이지
=======

> 진행기간: 11/14 ~ 11/18

진행상황
------
* 11/14 - 팀 자기소개 및 S.A 의견 종합, 개인 소개 페이지 작업 시작
  * S.A (Starting Assignments) - [링크](https://4sii.tistory.com/74)   


* 11/15 - 개인 소개 페이지 방명록 (DB 활용) 기능 추가
  * MongoDB local에서 MongoDB Atlas로 변경 중 ServerSelectionTimeoutError 에러 발견 및 해결 - [링크](https://4sii.tistory.com/78)
  * GET method로 data 받는 도중 기존 POST, request.form으로는 안받아지는 현상 발견 및 해결 - [링크](https://4sii.tistory.com/79)
  * 노션 멤버카드 크롤링으로 긁어와지는지 테스트 예정


* 11/16 - 
  * DB 하나로 통합 -> 각자 개인 소개 페이지 잘 동작하는지 확인
  * 메인 페이지 역할 분담 (팀 소개, 팀 방명록, 멤버 목록)
  * 메인 -> 개인 소개 페이지 이동되게

사용된 패키지
-----
|목적|패키지|
|-|-|
|서버세팅|Flask, pymongo, dnspython|
|DB연결 에러해결|certifi|
|크롤링|requests, bs4|

미니프로젝트 - 팀 소개 웹페이지
=======

|진행기간|11/14 ~ 11/18|
|-|-|
|서비스목표|사전캠프 기간동안 웹개발 종합반 강의를 들으며 배운걸 바탕으로 얼만큼 활용할 수 있는지 증명하는 페이지를 만드는 것|


# 진행상황
* 11/14 - 팀 자기소개 및 S.A 의견 종합, 개인 소개 페이지 작업 시작
  * S.A (Starting Assignments) - [링크](https://4sii.tistory.com/74)   

* 11/15 - 개인 소개 페이지 방명록 (DB 활용) 기능 추가
  * 노션 멤버카드 크롤링으로 긁어와지는지 테스트 -> 로그인이 필요해 크롤링은 다음 기회에 적용하는걸로

* 11/16 - 개인 소개 페이지 통합 및 메인 페이지 작업 & 라우팅
  * (완료) DB 하나로 통합 -> 각자 개인 소개 페이지 잘 동작하는지 확인
  * (완료) 메인 페이지 역할 분담 (팀 소개, 멤버 목록, 팀 방명록)
  * (완료) 메인 -> 개인 소개 페이지 이동되게

* 11/17 - 각 기능 merge하며 메인페이지 리뉴얼
  * 전날 작업물 결과 보고
  * (완료) 메인페이지 디자인 리뉴얼
  * (완료) 프로젝트 완성

* 11/18 - 마무리 작업 및 발표 준비
  * (예정) 클라우드 서비스에 서버 올리기
  * (예정) git에 저장하기

  
# 사용된 패키지
|목적|패키지|
|-|-|
|서버세팅|Flask, pymongo, dnspython|
|DB연결 에러해결|certifi|
  
  
# 역할
#### 공통
- (완료) 개인 소개 페이지(html, css, js) 
- (완료) 개인 방명록 기능

#### 조성훈
- 팀 리딩 및 보완

#### 김승일
- (완료) 메인페이지 html, css 구성
- (완료) 팀 소개 항목 DB 이용해서 구현하기
- (완료) merge 담당. 합친 후 qa까지 진행
- (완료) 메인페이지 디자인

#### 권병석
- (완료) 각 개인 페이지 종합 후 메인페이지에서의 라우팅
- (완료) 라우팅한 페이지에서 각자 구현한 방명록 기능을 작동되게 하기
- (완료) 메인페이지 디자인

#### 이효원
- (완료) 개인 페이지 자기소개, 방명록 구현


# 피드백 & 반영사항
#### * DB 스키마를 정의 한 후 프로젝트를 시작했어야
> 각자의 DB 활용 능력을 모르는 상태라 먼저 각자의 mongodb atlas를 이용해 구현 후   
> DB 통합하는 과정에서 스키마 정의 완료된 DB를 사용 및 활용하게끔 단계를 밟음.

#### * 팀 소개 항목도 방명록 기능을 써서 구현했는데 이미 개인 페이지에서 구현한 기능을 또 구현하는거보단 방명록에 다른 기능을 추가하는게 낫지 않았을까
> 각 팀원에게 비슷한 양, 기능을 분배하자는 생각 때문에 그렇게 진행하게 되었는데   
> 한번 구현한 기능을 비슷하게 다시 구현하기보단 앞으로 기존 기능을 보완하는 식으로의 방법을 강구하겠음.

#### * 개인 방명록에서 html에 하드코딩된 방명록에 있는 삭제 버튼 누르면 안없어지는 부분
> (완료) 리뷰 이후 모두 찾아 수정. 더불어 ajax 사용하여 데이터 수정 후 새로고침 해야 보이는 부분 새로고침 없이도 작동되게 변경

#### * 하드코딩 말고 /member/{member_id}/guestbooks 같은 형태를 활용할 것
> (완료) route에 <string:name>을 사용하여 URI parameter를 받는 법을 찾아 문제 해결 - [링크](https://stackoverflow.com/questions/24892035/how-can-i-get-the-named-parameters-from-a-url-using-flask)   
> 이로인해 200줄이 넘던 app.py의 코드를 4분의 1인 50줄 가량으로 줄일 수 있었다.   
> 더불어 확장성과 가독성도 추가로 증가하였다.

#### * 디자인에 수정이 필요할듯
> (before)   
<img src="/sparta/1114~/before1.png" width="60%" title="before1.png"></img>
<img src="/sparta/1114~/before2.png" width="60%" title="before2.png"></img>   
> (after)   
<img src="/sparta/1114~/after1.png" width="60%" title="after1.png"></img>
<img src="/sparta/1114~/after2.png" width="60%" title="after2.png"></img>   


# 문제 해결 & 추가 개선사항
#### * MongoDB local에서 MongoDB Atlas로 변경 중 ServerSelectionTimeoutError 에러 발견 
> certifi 패키지를 사용하여 문제 해결 - [링크](https://4sii.tistory.com/78)

#### * GET method로 data 받는 도중 기존 POST, request.form으로는 안받아지는 현상 발견
> requeset.form이 아닌 request.args를 쓰면 해결 가능 (하지만 GET 요청 시 URI parameter를 쓰게 바뀌어 )- [링크](https://4sii.tistory.com/79)

#### * 방명록 등록하면 위에서부터 추가되게
> .find().sort()를 통해 해결 - [링크](https://stackoverflow.com/questions/8109122/how-to-sort-mongodb-with-pymongo)

#### * jQuery 쓰는 팀원의 js파일에서 jQuery를 못찾는 현상
> js파일을 불러올 때 defer 옵션을 추가해서 해결 - [링크](https://4sii.tistory.com/65)


# API
<img src="/sparta/1114~/API명세.png" width="60%" title="API명세"></img>

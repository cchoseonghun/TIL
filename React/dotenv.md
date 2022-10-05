dotenv
======

React 환경에서 back-end로 요청을 보낼 때, 개발환경이다보니 똑같은 /list GET 요청임에도 
* 구동하는 컴퓨터일 경우엔   
localhost:8080/list   

* 개발 및 구동은 노트북으로 하면서 데스크탑으로 페이지 확인만 하는경우   
노트북ip:8080/list   

* build 해서 볼 경우엔 그냥   
/list   

이런식으로 다 달라지는데 /list 만 아니라 /login 등등 아직 페이지가 몇개 없어서 그렇지   
그때그때 수정해줘야하는 곳이 있어서 워낙 귀찮다는 느낌을 받았다.   

여러방법을 찾아봤는데 concurrently를 쓰는 방법은 아닌거같고   
예전 회사에서 했었듯이 env 파일에 개발환경, 테스트환경, 배포환경마다의 서버주소를 다르게 세팅할까 했는데   
찾아보니 dotenv를 통해 훨씬 쉽게 사용하는 방법이 있었다.
 
- - -

일단 nodejs 와는 다르게 CRA 에선 dotenv 를 설치할 필요가 없다.   
이미 패키지에 포함되어있기 때문

1. react 폴더내 package.json 과 같은 위치에 .env 파일 생성
2. 환경변수 이름은 앞에 REACT_APP 을 붙여야함 ex) REACT_APP_IP_ADDRESS="1234"
3. 사용은 별도의 세팅없이 process.env.REACT_APP_IP_ADDRESS 로 불러서 쓰면된다. 
4. 실행환경에 따라 env 파일명을 다르게 해야한다. 
5. 개발, 테스트, 배포 환경의 env 파일 맨 뒤 local 을 또 붙이면 각각의 .env.*을 덮어쓴다고한다. 

|환경종류|실행커맨드|파일명|
|------|---|---|
|개발환경|npm start|.env.development|
|테스트환경|npm run test|.env.test|
|배포환경|npm run build|.env.production|
		
		
		
 

#### .env.development.local
```
REACT_APP_SERVER_ADDRESS="http://localhost:8080"
```
#### .env.test.local
```
REACT_APP_SERVER_ADDRESS="http://192.168.219.103:8080"
```
#### .env.production.local
```
REACT_APP_SERVER_ADDRESS=""
```

> http://localhost:8080/list 인 경로가 배포환경에서는 단순히 /list 면 되기 때문에 위와같이 세팅하였다.   
> 실행해보면 잘되는걸 확인할 수 있음   
> 이제 테스트할때마다 경로를 찾아 바꿀 필요가 없어졌다.   
> 
> 대신 nodejs 와 따로 각각 env 파일을 관리해야하고,   
> gitignore 에 위 세가지 파일 다 예외명단으로 올려야한다는것만 지키도록 하자.

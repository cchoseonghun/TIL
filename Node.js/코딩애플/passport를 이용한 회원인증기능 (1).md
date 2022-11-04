준비1. 일단 로그인 & 세션생성을 도와줄 라이브러리 설치가 필요합니다. 

 

npm install passport passport-local express-session

을 터미널에 입력해서 설치하도록 합시다. 

저렇게 띄어쓰기로 동시에 3개 라이브러리를 설치하시면 됩니다. 

로그인, 로그인 검증, 세션생성을 도와주는 라이브러리 들입니다. 

(실제 서비스시 express-session 말고 MongoDB에 세션데이터를 저장해주는 라이브러리를 이용하시면 좋습니다.)

 

 

 

준비2. server.js 상단에 설치한 라이브러리를 require 해줍니다. 

 

그래야 설치한 것들을 사용할 수 있으니깐요. (라이브러리 사용법에 이렇게 나와있는거 그대로 작성한 것입니다)

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');

app.use(session({secret : '비밀코드', resave : true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session()); 
이렇게 6줄이 필요합니다. 대소문자 틀리면 코딩인생이 끝날 수 있기 때문에 대소문자 잘 구분하십시오. 

 

 

잠깐 문법설명을 하나 드리자면 app.use() 어쩌구 부분은 '미들웨어를 쓰겠다'라는 뜻입니다. 

미들웨어가 뭐냐면..

서버는 요청을 받으면 응답을 해주는 기계랬죠?

그런데 요청과 응답 사이에 뭔가 실행시키는 코드들이 바로 미들웨어입니다. 

뭐.. 요청이 적법한지 검사하는 그런 기능들을 미들웨어에 많이 담습니다.

 

미들웨어를 어떻게 쓰냐면.. app.use 안에 담는 코드들은 전부 미들웨어 역할을 할 수 있습니다. 

그러니깐 위에 있는 코드 중에 passport.initialize() 그리고 passport.session() 이런 코드들이

모든 요청과 응답 중간에 실행된다는 뜻입니다. 

 

 

나중에 미들웨어를 직접 하나 만들고 싶다면 그것도 가능합니다.

그냥 app.use() 안에 집어넣어주시면 되겠습니다. 

 

 

 

 

 

이제 어떤 흐름으로 개발할 것이냐면..

어떤 사람이 로그인을 해주면 일단 그 사람의 아이디와 비번이 DB에 있는 아이디와 비번이 맞는지 검사해야합니다. 

그리고 검사 결과가 맞으면 세션을 하나 생성해주고 성공페이지로 이동시키기,

실패하면 실패페이지로 이동시키기 입니다. 

 

 

 

 

개발1. 로그인페이지를 만들고 라우팅을 해줍시다.

 

로그인할 페이지를 ejs로 만들고 /login 방문시 보여주도록 합시다. 

로그인 페이지는 login.ejs 파일을 하나 생성해주면 될 것 같군요. 

(login.ejs)

write.ejs에 있는 내용 그대로 복붙
write.ejs 처럼 input이 두개 있으면 좋을 것 같아서 그대로 복붙해서 만들었습니다.

그리고 1. input의 이름만 조금 바꿔주시고 2. action="" 속성 경로를 살짝 수정해줍니다.

 

(login.ejs) 

<div class="container mt-4"> 
  <form action="/login" method="POST"> 
    <div class="form-group"> 
      <label>아이디</label> 
      <input type="text" class="form-control" name="id"> 
    </div> 
    <div class="form-group"> 
      <label>비번</label> 
      <input type="text" class="form-control" name="pw"> 
    </div> 
    <button type="submit" class="btn btn-danger">로그인</button> 
  </form> 
</div> 
두개의 input태그의 name 속성을 하나는 id, 하나는 pw라고 바꿔주시면 되겠습니다. 

name 속성은 별건 아니고 서버에서 input 데이터를 찾기 쉬우려고 달아주는 것입니다. 

login 페이지 제작 끝!

 

 

 

 

그럼 누군가가 /login으로 접속시 login.ejs 페이지를 보여주도록 합시다. 

서버 코드를 어떻게 짜면 되겠습니까.

app.get('/login', function(요청, 응답){
  응답.render('login.ejs')
});
이제 이런거 짜는데 10초도 안걸릴 것 같습니다.

 

 

 

 

 

 

Q. 그런데 지금 로그인할 아이디랑 비번이 없는데요?

DB에 테스트용 아이디와 비번을 하나 만들어주시면 됩니다. 



▲위처럼 login 이라는 새로운 콜렉션을 만드신 후에

안에 id 는 test, pw는 test인 하나의 자료를 집어넣어주시면 됩니다. 

(자료 강제로 넣는건 insert document 버튼, 콜렉션 생성은 + 버튼 누르면 됩니다)

 

 

 

 

 

 

개발2. 로그인 페이지에서 로그인을 하면 아이디, 비번을 검사해야합니다. 

 

누군가 로그인폼에서 POST 요청을 하면 ~~를 실행해주세요 라는 코드는 어떻게 짭니까.

app.post('/login', function(요청, 응답){
  응답.redirect('/')
});
누군가 /login 경로로 POST 요청을 하면 (폼전송을 하면)

특정 코드를 실행시켜주는 코드입니다. 빨리 server.js에 추가합시다. 

그리고 응답.redirect()라고 쓰시면 다른 페이지로 이동시켜줄 수 있습니다. 

홈으로 이동시키는 것입니다. 

 

 

그런데 로그인시 그냥 홈으로 이동시키기만 하면 되는게 아니라 중간에 검사를 해야합니다. 

아이디랑 비번이 맞나요? 이렇게 물어보시면 됩니다. 

그런 코드는 어떻게 짜냐면 

 

app.post('/login', passport.authenticate('local', {failureRedirect : '/fail'}), function(요청, 응답){
  응답.redirect('/')
});
post() 라는 함수 두번째 파라미터로 뭐 이상한걸 추가해주시면 요청과 응답 사이에 특정 기능을 실행할 수 있습니다. 

이상한 코드는 passport 라는 라이브러리가 제공하는 '아이디 비번 인증도와주는 코드'입니다. 

응답해주기 전에 local 방식으로 아이디 비번을 인증해주세요 라는 뜻으로 해석하시면 되겠습니다.

(failureRedirect라는 부분은 로그인 인증 실패시 이동시켜줄 경로를 적으시면 됩니다. 위의 코드는 실패시 /fail 경로로 유저를 이동시켜줍니다.)

 

 

 

 

 

 

 

개발3. 어떻게 인증할건지 세부 코드를 작성해야합니다. 

 

그냥 저렇게만 냅두면 자동으로 인증해주진 않습니다. 

세부사항을 잘 정의해주셔야합니다. 

그건 다행히 passport 라이브러리 예제코드를 복붙하시면 됩니다.  

 

(server.js 하단에 복붙)

passport.use(new LocalStrategy({
  usernameField: 'id',
  passwordField: 'pw',
  session: true,
  passReqToCallback: false,
}, function (입력한아이디, 입력한비번, done) {
  //console.log(입력한아이디, 입력한비번);
  db.collection('login').findOne({ id: 입력한아이디 }, function (에러, 결과) {
    if (에러) return done(에러)

    if (!결과) return done(null, false, { message: '존재하지않는 아이디요' })
    if (입력한비번 == 결과.pw) {
      return done(null, 결과)
    } else {
      return done(null, false, { message: '비번틀렸어요' })
    }
  })
}));
이것이 여러분의 아이디/ 비번을 검사해주는 코드입니다. 

직접 창조해서 작성하기 어려우니 그냥 복사붙여넣기를 해주시고 원하는 부분 수정하는 식으로 접근하면 충분합니다. 

 

 

LocalStrategy() 라고 부르는 이상한 코드가 있습니다. 이게 여러분 local 방식으로 아이디/비번 검사를 어떻게 할지 도와주는 부분이라고 보시면 됩니다. 

그리고 그 안에 세부설정을 해주시면 됩니다. 

LocalStrategy( { 설정 }, function(){ 아이디비번 검사하는 코드 } )

이런 흐름으로 되어있습니다. 

 

 

일단 오늘은 {설정}부분 설명만 드리겠습니다. 

 

 

설정은 여러가지가 가능한데 그중 필수로 해야하는 것들만 적었는데

상세히 무슨 뜻인지 설명해드리자면 

 

passport.use( new LocalStrategy({ 
    usernameField: 'id', (요기는 사용자가 제출한 아이디가 어디 적혔는지) 
    passwordField: 'pw', (요기는 사용자가 제출한 비번이 어디 적혔는지) 
    session: true, (요기는 세션을 만들건지) 
    passReqToCallback: false, (요기는 아이디/비번말고 다른 정보검사가 필요한지) 
}); 
 

옆에 하나씩 한글을 적은 것만 읽어도 충분하겠군요. 

usernameField는 사용자가 제출한 아이디가 어떤 <input>인지 <input>의 name 속성값을 적어주시면 됩니다. 

passwordField도 마찬가지입니다. 

session : true는 세션을 하나 만들어줄건지 입니다. 만들어줘야 나중에 다시 로그인 안해도 되겠죠?

passReqToCallback 부분은 사용자의 아이디/비번 말고도 다른 정보를 검사해야할 경우 true로 바꿔주시면 됩니다.

그러면 옆에 있는 콜백함수의 첫번째 파라미터로 기타 정보들이 들어가는데 파라미터.body 이런 식으로 출력해보시면 알 수 있습니다.

아직은 쓸 일이 없기 때문에 쓸일 있으시면 그 때 구글에 사용법을 찾아서 쓰도록 합시다. 

 

 

그러면 이제 아이디 비밀번호를 검사할 준비가 끝났습니다. 

다음 시간엔 사용자의 아이디, 비번을 실제 DB에 저장된 데이터와 한번 비교해보도록 합시다. 

그리고 이거 코드 길다고 무서워할 필요가 없습니다. 

어짜피 다른사람이 만든 라이브러리 갖다 쓰는건데 외우거나 전부 이해할 필요 전혀 없습니다.

그저 웹을 만들고 싶다면 그냥 복붙잘하고 사용법만 익히면 끝입니다. 

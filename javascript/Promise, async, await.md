Promise, async, await
=====================

Promise
-------
> readFile() 함수를 쓸 때 자체적으로 Promise 를 결과값으로 줌
```
const fs = require('fs').promises;
```
> Promise 는 약속이라는 의미로   
> Promise 가 수행하는 동작이 끝남과 동시에 상태를 알려주기 때문에   
> 비동기 처리에 아주 효과적이다.
```
console.log(fs.readFile(./src/databases/users.json'));
console.log(UserStorage.getUserInfo(client.id));
```
> 위 코드 둘 다 Promise 를 반환하는 함수를 콘솔에 찍는중인데, 실행해보면   
```
Promise { <pending> }   
```
> pending 을 반환한다. 여기서 위 pending 의 의미는 데이터를 전부 받아오지 못했다. 라는 의미   
> 비동기적으로 동작하기 때문에 생기는 현상임.   
> 즉, 해당 함수의 결과를 리턴하기 전에 console.log() 로 찍히고 있어서 pending 이 찍히는 것이다.

await
-----
> 이 때, await 을 써서 기다리게 할 수 있다.
```
console.log(await UserStorage.getUserInfo(client.id));
```
> but, 이대로 저장하면 에러가 나는데   
> await 은 분명 Promise 를 반환하는 애한테 주는 옵션이지만   
> 아무데서나 쓸 수 없고 async 함수 안에서만 사용이 가능하다.
  
async
-----
```
async login() {
    console.log(await UserStorage.getUserInfo(client.id));
    // ... 생략
```
> 위와 같은 형태로 사용하면 된다. await 과 async 는 세트!   
> async await 함수는 자체적으로 Promise 를 반환하도록 되어있다.   
> 따라서 await 을 적용해줄 수 있는 것!
> 
> Promise 를 반환한다면 then(), catch() 메서드로 접근이 가능하다. 

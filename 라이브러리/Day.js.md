Day.js
======

> javascript 자체의 date()가 구려서 지금껏 moment.js를 많이 써왔다고 알고 있었는데   
> 그마저도 작년을 기준으로 지원을 종료한다고 발표됨   
> 그래서 찾아보니 moment.js와도 대부분 호환되고 더 가벼운 Day.js가 있는걸 발견   
> Day.js에 대해 알아보자


* github: <https://github.com/iamkun/dayjs/blob/dev/docs/ko/README-ko.md>
* 공식사이트: <https://day.js.org>

```
npm install dayjs
```

```
import dayjs from 'dayjs'
let test = dayjs().format('YYYY-MM-DD');  // 2022-10-02
let test2 = dayjs().format('MMM D');      // Oct 2

```

어쩌구.d.ts 파일
- 타입 정의 보관용 파일
- 다른 ts파일에서 import 가능

ex)
// test.d.ts
export type Age = number;
export interface Person { name : string }
// index.ts
import {Age} from './test.d';
let age :Age


ts 파일에 타입정의가 너무 길면 d.ts 파일 만들어서 쓰기도 함
import / export 할게 많으면 
namespace 쓰던가
import * as 어쩌구로 한번에 다 import 하는거 쓰셈


모든 타입을 정리해놓은 레퍼런스용으로 d.ts 파일 쓰기
// tsconfig.json
"declaration": true, 

d.ts 자동생성되는 경우 d.ts 파일 수정 ㄴㄴ


d.ts 파일 용도
1. 타입 정의 따로 보관할 파일이 필요하면
2. 타입 레퍼런스 생성하고 싶으면

그냥 ts파일은 기본이 글로벌 모듈이지만 
d.ts 파일은 자동으로 글로벌 모듈 아님

d.ts 파일 글로벌 모듈로 만드는 법
// tsconfig.json
"typeRoots": ["./types"]

-> 웬만해선 import export 해서 쓰자


외부라이브러리 쓸 때 타입정의 안되어있다면 
1. Definitely Typed github 
위 repo 갖다 쓰거나
2. 타입스크립트 공홈에서 Tool -> Type Search 에서 검색
검색 후 설치하면
node_modules/@types 폴더 만들어짐. 라이브러리의 타입들 보관함
이 폴더 안에 있는 타입들은 글로벌 모듈
but, typeRoots 따로 설정해놓으면 자동으로 @types 포함 안해줌. 추가하거나 위에서 typeRoots 설정한거 지우셈

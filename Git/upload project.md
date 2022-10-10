Upload Project
==============

github에서 repo를 만들 때 readme.md 파일을 같이 생성했을 경우   

upload 할 프로젝트에서   
```
git init
git remote add origin {repo주소}
git fetch --all  // readme.md 파일 생성한 이력을 먼저 받아줌
git add .
git status  // 업로드할 파일을 확인
git commit -m 'message'

git push -u origin main
```

> (error: src refspec main does not match any) 에러가 날 경우
```
git branch // 현재 branch 확인. main이어야 하는데 master일 경우 아래 과정을 통해 main으로 바꿔준다.

git branch -m master main
git fetch origin
git branch -u origin/main main
```

> 다시 git push -u origin main 을 진행했으나 아래 에러가 날 경우
```
 ! [rejected]        main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/cchoseonghun/Node.js_Vue_starter.git'hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
데이터 유실 등의 문제가 있을 수 있어 git에서 처리되지 않도록 에러를 띄우는 것이라고 한다.   
근본적인 원인을 찾아 해결할 수 있지만 임시방편으로 '+'를 이용하여 해결 가능   
```
git push -u origin +main
```

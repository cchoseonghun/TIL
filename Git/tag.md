Git Tag
=======
> 올릴 버전에 대한 데이터를 모두 git push 까지 마친 후 라고 가정한 상황.   
> tag_name 은 임의로 v0.1.0 에 덧붙일 메시지까지 v0.1.0-msg 라고 지었다.
### tag 생성
```
git tag v0.1.0-msg
git tag // tag 확인
git log --oneline // tag 확인 2
git push origin v0.1.0-notDB
```
### tag 삭제
```
git push origin :v0.1.0-notDB // remote 에서 삭제
git tag -d v0.1.0-notDB // local 에서 삭제
```

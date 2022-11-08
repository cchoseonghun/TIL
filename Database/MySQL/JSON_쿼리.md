JSON_쿼리
========

MySQL JSON SELECT INSERT UPDATE 방법 정리 - [출처](https://wakestand.tistory.com/738)
----

```
-- JSON 조회
SELECT ID, JSON_UNQUOTE(JSON_EXTRACT(JSON_VAL, '$.col1')) AS JSON_VAL
  FROM JSON_TB;
  
-- JSON 조회 (배열일 경우)
SELECT ID, JSON_UNQUOTE(JSON_EXTRACT(JSON_VAL, '$[0].col1')) AS JSON_VAL
  FROM JSON_TB;   

-- JSON 조건 추가한 조회
SELECT *
  FROM JSON_TB
 WHERE JSON_UNQUOTE(JSON_EXTRACT(JSON_VAL, '$.col1')) = 'val1';

-- JSON INSERT
INSERT INTO JSON_TB VALUES('ID1', JSON_OBJECT("col1", "valA", "col2", "valB"));

-- JSON UPDATE 
UPDATE JSON_TB 
   SET JSON_VAL = JSON_SET(JSON_VAL, '$.col2', 'val21')
 WHERE ID = 'ID1'
```

> MySQL 에서 JSON을 사용하려는 경우 사용방법을 정리해 놨는데   
> 먼저 조회를 할 경우에는   
```
JSON_EXTRACT(컬럼명, '$.key명')
```
> 이렇게 사용을 하는데 값이 배열로 들어왔을 경우에는
```
'$[배열번호].key' 
```
> 로 변경해 사용하면 된다.   
> 이후 위처럼 조회를 할 경우에는 "value" 이런 값을 얻을 수 있게 되고   
> 쌍따옴표를 제외하고 싶으면   
```
JSON_UNQUOTE(JSON_EXTRACT(컬럼명, '$.key명'))
```
> 이런 식으로 사용해주면 쌍따옴표를 제외한 value 를 얻을 수 있게 된다.   
> WHERE 절에서도 위와 같은 방식으로 JSON 객체 내의 값을 넣어줄 수 있다.   
> 다음으로 테이블에 INSERT를 할 경우에는   
```
JSON_OBJECT("Key명", "Value"...);
```
> 이런 식으로 사용해주면 되고   
> JSON 객체 내의 Key의 Value 값을 UPDATE 해줄 경우에는   
```
컬럼명 = JSON_SET(컬럼명, '$.변경할_컬럼명', 변경할_값)
```
> 이런 식으로 사용해주면 된다.

n 이하의 모든 소수 반환
=====

```
def find_prime_list_under_number(number):
    arr = []
    for a in range(2, number+1):  # 1은 소수가 아니기 때문에 2부터 체크한다. 
        if check_prime(a):
            arr.append(a)
    return arr


# 소수 판별 함수
def check_prime(num):
    sum = 0
    for e in range(1, num+1):  # ex) num = 5 -> 1 ~ 5
        if num % e == 0:  # 자신과 나눠서 나머지가 0이 나오는 공약수의 개수가 2여야 소수니까 
            sum += 1
            if sum > 2:  # 2를 초과하게 되면 소수가 아니다
                return False
    if sum == 2:
        return True
    else:  # num이 1인 경우도 생각
        return False



input = 20

result = find_prime_list_under_number(input)
print(result)
```

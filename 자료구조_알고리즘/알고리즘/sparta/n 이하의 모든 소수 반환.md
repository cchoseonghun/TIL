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
    # sum = 0
    # for e in range(1, num+1):
    #     if num % e == 0:
    #         sum += 1
    #         if sum > 2:
    #             return False
    # if sum == 2:
    #     return True
    # else:
    #     return False

    for e in range(2, num):             # 애초에 1과 자기 자신 값을 제외하면 그 사이의 값으로 나눌 때 0으로 떨어지는 순간 소수가 아니게 된다.
        if num % e == 0:                # 때문에 sum을 만들어 뭔가를 할 필요가 없는 것
            return False
    else:
        return True



input = 20

result = find_prime_list_under_number(input)
print(result)
```

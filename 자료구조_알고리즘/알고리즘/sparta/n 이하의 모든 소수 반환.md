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

> 여기서 추가로 [링크](https://school.programmers.co.kr/questions/21359)에 따라 코드를 더 좋게 만드는 법을 적용했다.
```
input = 20
def find_prime_list_under_number(number):
    prime_arr = []
    for a in range(2, number+1):
        for i in prime_arr:                 # 1보다 큰 모든 자연수는 소수의 곱으로 이루어져 있기 때문에 소수로 나눠서 0이 되는지를 체크
            if a % i == 0:
                break
            if i > a**(1/2):                # 다만 대상 n의 제곱근보다 작은 모든 소수들로 나누어 떨어지지 않으면 n은 소수이기에
                prime_arr.append(a)         # 소수 리스트에 넣고
                break                       # 다음 a로 넘어간다.
        else:
            prime_arr.append(a)
    return prime_arr
    
    
result = find_prime_list_under_number(input)
print(result)
```

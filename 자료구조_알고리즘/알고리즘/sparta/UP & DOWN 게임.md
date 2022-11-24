UP & DOWN 게임
====

## 2진 탐색 활용 예시 문제
> 1부터 16까지의 array가 있을 때   
> target을 몇번만에 찾을 수 있는지 알아보자

```
finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):

    count = 1
    while count < 10:
        half_index = len(array) // 2
        # print(f'array: {array}')
        # print(f'half_index: {half_index}, value: {array[half_index]}')
        if array[half_index] == target:
            return count
        elif array[half_index] > target:
            print('DOWN')
            array = array[:half_index]
        else:
            print('UP')
            array = array[half_index:]
        count += 1
    return False


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
```
> 직접 푼 코드. 검증해보면 답은 잘 나오지만 UP & DOWN 후 다시 만든 array에 finding_target value가 들어가 있는걸 볼 수 있다.

```
finding_target = 14
finding_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]


def is_existing_target_number_binary(target, array):
    count = 1
    arr_min = 0
    arr_max = len(array)-1
    target_guess = (arr_min + arr_max) // 2
    print(arr_min, arr_max)
    while arr_min <= arr_max:
        # print(f'min: {arr_min}, max: {arr_max}')
        # print(f'target_guess: {target_guess}')
        if array[target_guess] == target:
            return {'result': True, 'count': count}
        elif array[target_guess] > target:
            print('DOWN')
            arr_max = target_guess - 1
        else:
            print('UP')
            arr_min = target_guess + 1
        target_guess = (arr_min + arr_max) // 2
        count += 1
    return {'result': False, 'count': count}


result = is_existing_target_number_binary(finding_target, finding_numbers)
print(result)
```
> 강의를 참고해 만든 코드. array에 변화를 주지 않고 검색할 시작 index와 끝 index에 변화를 주는 방식을 택했다.   
> finding_target index는 두 수의 합의 // 2.   
> 이 경우 위 처럼 UP & DOWN 후 찍었던 값을 제외한 후 찾을 수 있게 되어 실제로 검색 횟수가 1 줄은걸 볼 수 있다.

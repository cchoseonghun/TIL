let numbers 
= [1,2,3,4,6,7,8,0];
// = [5,8,4,0,6,7,9];

function solution(numbers){
    var answer = 0;

    numbers = numbers.sort();
    // console.log(numbers);

    for(let x=0;x<10;x++){
        if(!numbers.includes(x)){
            answer += x;
        }
    }
    // console.log(answer)

    return answer;
}

console.log(solution(numbers));
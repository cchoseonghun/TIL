let s 
// = "one4seveneight";
// = "23four5six7";
// = "2three45sixseven";
= "123";

function solution(s){
    var answer = '';

    let obj = {
        'zero': 0, 
        'one': 1,
        'two': 2,
        'three': 3, 
        'four': 4, 
        'five': 5, 
        'six': 6, 
        'seven': 7, 
        'eight': 8,
        'nine': 9
    }

    let temp = '';
    [...s].forEach((a)=>{
        if(/[0-9]/.test(a)){
            answer += a;
        } else {
            temp += a;
            if(obj[temp] != undefined){
                answer += obj[temp];
                temp = '';
            }
        }
    })

    return parseInt(answer);
}

console.log(solution(s));
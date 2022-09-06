let absolutes 
= [4, 7, 12];
// = [1, 2, 3];

let signs 
= [true,false,true];
// = [false,false,true];

function solution(absolutes, signs){
    var answer = 0;

    for(let x=0;x<absolutes.length;x++){
        if(signs[x]){
            answer += absolutes[x];
        } else {
            answer -= absolutes[x];
        }
    }
    return answer;
}

console.log(solution(absolutes, signs));
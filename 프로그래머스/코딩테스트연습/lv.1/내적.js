let a 
// = [1,2,3,4];
= [-1,0,1];

let b
// = [-3,-1,0,2];
= [1,0,-1];

function solution(a, b){
    let answer = 0;

    for(let x=0;x<a.length;x++){
        answer += a[x]*b[x]
    }

    return answer;
}

console.log(solution(a, b));
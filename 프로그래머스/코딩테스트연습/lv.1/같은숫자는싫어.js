let arr 
= [1, 1, 3, 3, 0, 1, 1];
// = [4, 4, 4, 3, 3];

function solution(arr){
    var answer = [];
    // arr.reduce((acc, cur, i)=>{
    //     console.log(acc, cur, i);

    //     if(acc == cur){
    //         answer.push(cur);
    //         acc = 0;
    //     }

    //     return acc + cur;
    // }, 0)


    arr.forEach((a)=>{
        if(answer[answer.length-1] != a){
            answer.push(a);
        }
    })
    console.log(answer)

    return answer;
}

solution(arr);
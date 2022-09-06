let sizes 
// = [[60, 50], [30, 70], [60, 30], [80, 40]];
// = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
= [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

function solution(sizes){
    let bigA = 0;
    let bigB = 0;
    sizes.forEach((arr)=>{
        if(arr[0] < arr[1]){
            check(arr[1], arr[0]);
        } else {
            check(arr[0], arr[1]);
        }
    })

    function check(a, b){
        if(bigA < a){
            bigA = a;
        }
        if(bigB < b){
            bigB = b;
        }
    }

    return bigA * bigB;
}

console.log(solution(sizes));
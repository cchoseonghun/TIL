let numbers 
//  = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
//  = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let hand 
// = "right";
// = "left";
= "right";

function solution(numbers, hand){
    var answer = '';

    let cur_left = 10;
    let cur_right = 12;

    let arr_left = [1, 4, 7];
    let arr_right = [3, 6, 9];

    numbers.forEach((a)=>{
        // let str = cur_left + '      ' + cur_right + '      ' + a + '      ';

        if(arr_left.includes(a)){
            answer += 'L';
            cur_left = a;
        } else if(arr_right.includes(a)){
            answer += 'R';
            cur_right = a;
        } else {
            if(a == 0) a = 11;
            let distance_left = getDistance(a, cur_left);
            let distance_right = getDistance(a, cur_right);

            if( distance_left < distance_right ){
                answer += 'L';
                cur_left = a;
            } else if( distance_left > distance_right ){
                answer += 'R';
                cur_right = a;
            } else {
                if(hand == 'left'){
                    answer += 'L';
                    cur_left = a;
                } else if(hand == 'right'){
                    answer += 'R';
                    cur_right = a;
                }
            }
        }
        // str += answer.slice(answer.length-1);
        // console.log(str);
    })
    
    function getDistance(target, cur){
        return parseInt(Math.abs(target - cur)/3) + Math.abs(target - cur)%3;
    }

    return answer;
}

// console.log(solution(numbers, hand));
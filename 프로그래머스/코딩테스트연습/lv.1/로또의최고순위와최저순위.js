let lottos 
// = [44, 1, 0, 0, 31, 25];
// = [0, 0, 0, 0, 0, 0];
// = [45, 4, 35, 20, 3, 9];
= [2, 5, 8, 34, 44, 19];

let win_nums 
// = [31, 10, 45, 1, 6, 19];
// = [38, 19, 20, 40, 15, 25];
= [20, 9, 3, 45, 4, 35];

function solution(lottos, win_nums){
    var answer = [];
    let high = 1;
    let low = 7;

    lottos = lottos.sort((a,b)=>a-b);
    win_nums = win_nums.sort((a,b)=>a-b);

    a:for(let x=win_nums.length-1;x>-1;x--){
        for(let y=0;y<lottos.length;y++){
            if(win_nums[x] == lottos[y]){
                win_nums.splice(x, 1);
                lottos.splice(y, 1);
                low -= 1;
                continue a;
            }
        }
    }

    lottos.forEach((elem)=>{
        if(elem != 0){
            high += 1;
        }
    })

    if(high == 7) high -= 1;
    if(low == 7) low -= 1;
    answer = [high, low];

    console.log(answer)

    return answer;
}

solution(lottos, win_nums);
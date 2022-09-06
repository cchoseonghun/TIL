let board 
= [
    [0,0,0,0,0],
    [0,0,1,0,3],
    [0,2,5,0,1],
    [4,2,4,4,2],
    [3,5,1,3,1]
];

let moves
= [1,5,3,5,1,2,1,4];

function solution(board, moves){
    var answer = 0;
    let result_arr = [];

    // 1. 바구니에 인형 넣기
    a:for(let x=0;x<moves.length;x++){
        let move = moves[x];
        // console.log(board);
        for(let y=0;y<board.length;y++){
            let board_one = board[y];
            if(board_one[move-1] != 0){
                // console.log(move, board_one, board_one[move-1]);
                result_arr.push(board_one[move-1]);
                board_one.splice(move-1, 1, 0);
                continue a;
            }
        }
    }
    // console.log(result_arr);

    // 2. 바구니에 들어간 인형 중 연속된 인형 터뜨리기
    let breaker = 0;
    while(breaker == 0){
        let a = 0;
        result_arr.reduce((acc, cur, i)=>{
            // console.log(acc, cur, i);
            if(acc == cur){
                result_arr.splice(i-1, 2);
                answer += 1;
                a += 1;
                return 0;
            }
            return cur;
        }, 0)
        if(a == 0) breaker = 1;
    }

    // console.log(answer, result_arr);

    return answer*2;  // 없어진 횟수 x2가 없어진 인형의 개수
}

console.log(solution(board, moves));
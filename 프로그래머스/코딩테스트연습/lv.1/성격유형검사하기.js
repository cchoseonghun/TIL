let survey 
= ["AN", "CF", "MJ", "RT", "NA"];
// = ["TR", "RT", "TR"];

let choices 
= [5, 3, 2, 7, 5];
// = [7, 1, 3];

function test(survey_one, choice_one){
    let selected_char = '';
    let selected_score = 0
    if(choice_one > 4){
        selected_score = choice_one - 4;
        selected_char = survey_one.charAt(1);
    } else if(choice_one < 4){
        selected_score = 4 - choice_one;
        selected_char = survey_one.charAt(0);
    } else {
        selected_score = 0;
        selected_char = getABC(survey_one);
    }
    return {'str': selected_char, 'score': selected_score};
}

function getABC(str){
    return [...str].sort().join('').charAt(0);
}

function solution(survey, choices){
    let score_obj = {
        'R': 0, 
        'T': 0, 
        'C': 0, 
        'F': 0, 
        'J': 0, 
        'M': 0, 
        'A': 0, 
        'N': 0, 
    }
    for(let i=0;i<survey.length;i++){
        let result = test(survey[i], choices[i]);
        score_obj[result.str] += result.score;
    }
    // console.log(score_obj);

    
    var answer = '';
    if(score_obj.R < score_obj.T){
        answer += 'T';
    } else {
        answer += 'R';
    }
    if(score_obj.C < score_obj.F){
        answer += 'F';
    } else {
        answer += 'C';
    }
    if(score_obj.J < score_obj.M){
        answer += 'M';
    } else {
        answer += 'J';
    }
    if(score_obj.A < score_obj.N){
        answer += 'N';
    } else {
        answer += 'A';
    }
    // console.log(answer)

    return answer;
}

solution(survey, choices);
let id_list = [
    "muzi", "frodo", "apeach", "neo"
    // "con", "ryan"
]
let report = [
    "muzi frodo", 
    "apeach frodo", 
    "frodo neo", 
    "muzi neo", 
    "apeach muzi"
    // "ryan con", "ryan con", "ryan con", "ryan con"
]
let k = 2
// let k = 3;

function solution(id_list, report, k){
    // var answer = [];
    let reported_obj = {};      // { 피신고자 : 신고당한횟수 }
    let reportedBy_obj = {};    // { 피신고자 : {신고자들} }
    let answer_obj = {};        // { 신고자 : 연락받을횟수 }
    let report_set = new Set(report);

    id_list.forEach((a)=>{
        reported_obj[a] = 0;
        reportedBy_obj[a] = [];
        answer_obj[a] = 0;
    })

    report_set.forEach((a)=>{
        let [id, reported] = a.split(' ');
        reported_obj[reported] += 1;
        reportedBy_obj[reported].push(id);
    })

    // console.log('reported_obj: ');
    // console.log(reported_obj);
    // console.log('reportedBy_obj: ');
    // console.log(reportedBy_obj);

    for(let reported in reported_obj){
        if(reported_obj[reported] >= k){
            reportedBy_obj[reported].forEach((id)=>{
                answer_obj[id] += 1;
            })
        }
    }

    // console.log(answer_obj);

    // return answer;
    return id_list.map((id)=>{
        return answer_obj[id]
    })
}

console.log(solution(id_list, report, k));
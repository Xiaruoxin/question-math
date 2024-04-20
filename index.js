function submitAnswer() {
    let answer = document.querySelector('input[name="answer"]:checked').value;
    let resultDiv = document.querySelector('.result');
    let correctAnswer = 'C'; // 根据题目设置正确答案
    
    if (answer === correctAnswer) {
        resultDiv.textContent = '回答正确，小朋友很棒';
        resultDiv.style.display = 'block';
    } else {
        resultDiv.textContent = '不对呀，小朋友再仔细想想';
        resultDiv.style.display = 'block';
    }
    
}
// function twosubmitAnswer(){
//     let answer = document.querySelector('input[name="twoanswer"]:checked').value;
//     let resultDiv = document.querySelector('.tworesult');
//     let twocorrectAnswer = 'A';

//     if (answer === twocorrectAnswer) {
//         resultDiv.textContent = '回答正确，小朋友很棒';
//         resultDiv.style.display = 'block';
//     } else {
//         resultDiv.textContent = '不对呀，小朋友再仔细想想';
//         resultDiv.style.display = 'block';
//     }
// }
// function threesubmitAnswer(){
//     let answer = document.querySelector('input[name="threeanswer"]:checked').value;
//     let resultDiv = document.querySelector('.threeresult');
//     let threecorrectAnswer = 'C';

//     if (answer === threecorrectAnswer) {
//         resultDiv.textContent = '回答正确，小朋友很棒';
//         resultDiv.style.display = 'block';
//     } else {
//         resultDiv.textContent = '不对呀，小朋友再仔细想想';
//         resultDiv.style.display = 'block';
//     }
// }
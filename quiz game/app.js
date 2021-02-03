const quiz = [
    {
        question: 'お酢に卵を殻ごと入れるとどうなるでしょう？',
        answers: [
           '透明になる',
           '鏡みたいに反射する',
           '殻のみ溶ける',
           '割れにくくなる'
        ],
        correct: '透明になる'
    },{
        question: 'リンカーンは大統領前何をしていたでしょう？',
        answers: [
           '野球選手',
           '猟師',
           '教師',
           'レスラー'
        ],
        correct: 'レスラー'
    },{
        question: '飛行機の中でも食べれるよう作られた野菜は？',
        answers: [
           'パプリカ',
           'アボカド',
           'ミニトマト',
           'オクラ'
        ],
        correct: 'ミニトマト'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
      $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
      buttonIndex++;
  }
}
setupQuiz();

const clickHandker = (e) =>{
    if(quiz[quizIndex].correct　===　e.target.textContent){
        window.alert('正解');
        score++;
      } else {
        window.alert('不正解');
      }

      quizIndex++;

      if(quizIndex < quizLength){
        setupQuiz();
      }else {
          window.alert('終了!正解数は'+ score + '/' + quizLength + 'です！お疲れ様でした！');
      }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) =>{
      clickHandker(e);
    });
    handlerIndex++;
}

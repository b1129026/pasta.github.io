import React, { useState } from 'react';
import './startpage.css';
import Qpage2 from './Qpage2';

function Qpage1() {
  const questions = [
    {
      question: "以下四種超能力，你會選擇哪一種?",
      options: ["A. 飛", "B. 瞬間移動", "C. 隱形", "D. 預測未來"],
      grade: [1, 2, 3, 4],
      image: '/question/超能力.png',
    },
    {
      question: "你剛從一個很消耗能量的場合離開，又餓又累，<br />    你會選擇哪一種食物補充你的能量?",
      options: ["A. 鮮奶油草莓蛋糕", "B. 兩份加大鹹酥雞", "C. 地獄拉麵", "D. 以上皆是"],
      grade: [1, 2, 3, 4],
      image: '/question/消夜.png',
    },
    {
      question: "你今天書包很重，有電腦、有平板，還有三本書，<br />    降雨機率90%而且你確定你的朋友一定會帶傘，你會選擇?",
      options: ["A. 帶傘", "B. 不帶傘", "C. 有下再說"],
      grade: [3, 2, 1],
      image: '/question/下雨.png',
    },
    {
      question: "被提醒後才想起今天是朋友生日，你會如何處理?",
      options: ["A. 催眠自己忘記", "B. 通靈祝福他生日外樂", "C. 祝福他", "D. 拉一大群同學花錢祝福他"],
      grade: [1, 2, 3, 4],
      image: '/question/生日.png',
    },
    {
      question: "老師講的我真的聽不懂，你會選擇?",
      options: ["A. 睡到消失", "B. 老師點頭我也點頭", "C. 通靈", "D. 開始埋頭苦幹"],
      grade: [1, 2, 3, 4],
      image: '/question/讀書.png',
    },
    {
      question: "家裡到處都很亂，必須挑一個角落開始整理，你會選擇?",
      options: ["A. 房間", "B. 客廳", "C. 廚房", "D. 浴室", "E. 擺爛"],
      grade: [2, 3, 4, 5, 1],
      image: '/question/掃地.png',
    },
    {
      question: "下輩子可以當一隻狗，你想當哪種狗?",
      options: ["A. 普通的狗", "B. 自由的狗", "C. 陽光的狗", "D. 很貴的狗"],
      grade: [1, 2, 3, 4],
      image: '/question/狗.png',
    },
    {
      question: "針對義大利麵，你有什麼想法?",
      options: ["A. 很棒", "B. 還好", "C. 很爛"],
      grade: [0, 0, 0],
      image: '/question/義大利麵.png',
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setscore] = useState(0);
  const [totalscore, settotalscore] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleSubmit = (grade) => {
    setscore(grade);
    setSubmitted(true);
  };

  const handleNextQuestion = () => {
    settotalscore(totalscore + score);
    if (currentQuestionIndex < questions.length - 1) {
      setSubmitted(false);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <div className="question-container">
      {!quizCompleted ? (
        <>
        {currentQuestion.image && (
            <img src={currentQuestion.image} alt="Question" className="question-image" />
          )}
          <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }}></h2>
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={option}
                className={`option-button`}
                onClick={() => handleSubmit(currentQuestion.grade[index])}
              >
                {option}
              </button>
            ))}
          </div>
          {submitted && (
            <div>
              <button 
              className={`control-button`}
              onClick={handleNextQuestion}>
                {currentQuestionIndex < questions.length - 1 ? '下一個義大利麵題目→' : '見證義大利麵的時刻!→'}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <h2>我們知道你是哪一種義大利麵了!</h2>
          <Qpage2 totalscore={totalscore}/>
        </div>
      )}
    </div>
  );
}

export default Qpage1;

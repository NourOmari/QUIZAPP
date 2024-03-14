import React, { useState, useEffect } from "react";
import { MdOutlineQuiz } from "react-icons/md";
import { quiz } from "../Quiz/Question";
import { Link } from "react-router-dom";

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    const storedAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    if (storedAnswers) {
      setUserAnswers(storedAnswers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userAnswers", JSON.stringify(userAnswers));
  }, [userAnswers]);

  const handleClickNext = () => {
    if (selectedAnswer !== null) {
      setUserAnswers((prevAnswers) => [
        ...prevAnswers,
        { question: currentQuestion, answer: selectedAnswer },
      ]);
    }

    setSelectedAnswer(null);

    if (currentQuestion === quiz.questions.length - 1) {
      setQuizCompleted(true);
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleAnswerSelected = (answer, index) => {
    setSelectedAnswer(index);
  };

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[currentQuestion];
  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div>
      <header className="flex flex-row justify-center gap-4 items-center bg-cyan-600 py-4">
        <MdOutlineQuiz className="text-orange-500 font-bold text-xl" />
        <h1 className="text-xl font-bold text-white">Quiz Time</h1>
      </header>
      <main>
        <div className="quiz-container mt-24">
          {!quizCompleted && (
            <>
              <div className="flex justify-center font-bold text-xl mb-9">
                <span className="active-question-no text-orange-500">
                  {addLeadingZero(currentQuestion + 1)}
                </span>
                <span className="total-question text-black">
                  /{addLeadingZero(questions.length)}
                </span>
              </div>
              <h2 className="flex justify-center ml-4 font-bold text-xl">
                {question}
              </h2>
              <div className="flex justify-center text-sky-600 cursor-pointer">
                <ul>
                  {choices.map((answer, index) => (
                    <li
                      onClick={() => handleAnswerSelected(answer, index)}
                      key={answer}
                      className={
                        selectedAnswer === index ? "selected-answer" : null
                      }
                    >
                      {answer}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <button
                  onClick={handleClickNext}
                  disabled={selectedAnswer === null}
                  className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-orange-50
                      before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-orange-500 hover:text-orange-50 font-bold"
                >
                  {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
                </button>
              </div>
            </>
          )}
        </div>

        {quizCompleted && (
          <div className="flex justify-center mt-20 text-center border rounded-xl mx-w-20">
            <div className="result-container text-orange-600 font-bold">
              <h2>Your Answers</h2>
              <ul>
                {userAnswers.map((item, index) => (
                  <li key={index} className="text-cyan-600">
                    Question {item.question + 1}:{" "}
                    {questions[item.question].question}
                    <br />
                    Your Answer: {questions[item.question].choices[item.answer]}
                    <br />
                    Correct Answer:{questions[item.question].correctAnswer}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {quizCompleted && (
          <div className="flex justify-center mt-7">
            <Link
              to="/HomePage"
              className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-orange-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full before:bg-orange-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-orange-500 hover:text-orange-50 font-bold"
            >
              Try Again
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default QuizPage;

// import React, { useState, useEffect } from "react";
// import { MdOutlineQuiz } from "react-icons/md";
// import { quiz } from "../Quiz/Question";

// function QuizPage() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswer, setSelectedAnswer] = useState([]);
//   const [quizCompleted, setQuizCompleted] = useState(false);
//   // const [answers,setAnswers]
//   // const selectedAnswers = getItem(selectedAnswer);
//   // localStorage.setItem("selectedAnswer");

//   const handleClickNext = () => {
//     setSelectedAnswer(null);
//     if (currentQuestion === questions.length - 1) {
//       setQuizCompleted(true);
//     } else {
//       setCurrentQuestion((prev) => prev + 1);
//     }
//     setResult((prev) =>
//       selectedAnswer
//         ? {
//             ...prev,
//             score: prev.score + 5,
//             correctAnswers: prev.correctAnswers + 1,
//           }
//         : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
//     );
//   };

//   const handleAnswerSelected = (answer, index) => {
//     setSelectedAnswer(index);
//     if (answer === correctAnswer) {
//       setSelectedAnswer(true);
//     } else {
//       setSelectedAnswer(false);
//     }
//   };

//   const { questions } = quiz;
//   const { question, choices, correctAnswer } = questions[currentQuestion];
//   const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

//   return (
//     <div>
//       <header className="flex flex-row justify-center gap-4 items-center bg-cyan-600 py-4">
//         <MdOutlineQuiz className="text-orange-500 font-bold text-xl" />
//         <h1 className="text-xl font-bold text-white">Quiz Time</h1>
//       </header>
//       <main>
//         <div className="quiz-container mt-24">
//           {!quizCompleted && (
//             <>
//               <div className="flex justify-center font-bold text-xl mb-9">
//                 <span className="active-question-no text-orange-500">
//                   {addLeadingZero(currentQuestion + 1)}
//                 </span>
//                 <span className="total-question text-black">
//                   /{addLeadingZero(questions.length)}
//                 </span>
//               </div>
//               <h2 className="flex justify-center ml-4 font-bold text-xl">
//                 {question}
//               </h2>
//               <div className="flex justify-center text-sky-600 cursor-pointer">
//                 {/* <h2>test</h2> */}
//                 <ul>
//                   {choices.map((answer, index) => (
//                     // <input type="checkbox" id="" >
//                     <li
//                       onClick={() => handleAnswerSelected(answer, index)}
//                       key={answer}
//                       className={
//                         selectedAnswer === index
//                           ? selectedAnswer[currentQuestion] === correctAnswer
//                             ? "selected-correct-answer"
//                             : "selected-wrong-answer"
//                           : null
//                       }
//                     >
//                       {answer}
//                     </li>
//                     /* </input> */
//                   ))}
//                 </ul>
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   onClick={handleClickNext}
//                   disabled={selectedAnswer === null}
//                   className="relative  px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-orange-50
//                       before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-orange-500 hover:text-orange-50 font-bold"
//                 >
//                   {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {quizCompleted && (
//           <div className="flex justify-center mt-20 text-center border rounded-xl mx-w-20">
//             <div className="result-container text-cyan-600 font-bold">
//               <h2>Your Answers</h2>
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// }

// export default QuizPage;

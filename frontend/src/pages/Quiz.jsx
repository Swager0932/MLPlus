import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getQuiz } from "../adapters/quiz-adapter.js";



let transcriptTitle = "Transcript"





export default function Quiz() {
  const [errorText, setErrorText] = useState(null);
  const [showFinalResults, setFinalResults] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  
  const { id } = useParams();
    // console.log(id)

  useEffect(() => {
    const loadQuiz = async (id) => {
        const [quizzes, error] = await getQuiz(id);
        setQuestions(quizzes)

    //   setTitle(lesson.title)
    //   setUrl(lesson.url)
    //   setTranscript(lesson.transcript)

      if (error) return setErrorText(error.statusText);
      
    };
  
    loadQuiz(id);
  }, [id]);


//   console.log(id)
const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);
  };

  const optionClicked = (selectedAnswer) => {
    if (currentQuestion < questions.length) {
      const correctAnswer = questions[currentQuestion].answer;

      if (selectedAnswer === correctAnswer) {
        setScore(score + 1);
      } else {
        setSelectedOption(selectedAnswer);
      }

      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setFinalResults(true);
        sendOrUpdateQuizAttemptToBackend();
      }
    }
  };

  const restartQuiz = () => {
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(false);
  };

  const sendOrUpdateQuizAttemptToBackend = async () => {
    const quizAttemptData = {
      userId: currentUser.id,
      quiz_id: quizId,
      percentage: (score / questions.length) * 100,
      score_count: score,
    };

    try {
      // Check if a quiz attempt already exists for the user
      const [existingAttempt] = await updateQuizAttempt(quizAttemptData);

      if (existingAttempt) {
        console.log("Updated quiz attempt:", existingAttempt);
      } else {
        // If no attempt exists, create a new one
        const newAttempt = await createQuizAttempt(quizAttemptData);
        console.log("Created new quiz attempt:", newAttempt);
      }
    } catch (error) {
      console.error("Error sending or updating quiz attempt:", error);
    }
  };

  let shuffledChoices = [];
  if (questions[currentQuestion]) {
    shuffledChoices = shuffleArray([
      questions[currentQuestion]?.answer,
      questions[currentQuestion]?.wrong1,
      questions[currentQuestion]?.wrong2,
      questions[currentQuestion]?.wrong3,
    ]);
  }

  return (
    <test>
      <div id="test-area">
        <h1>Quiz</h1>
        <h2 className="current-score">Score: {score}</h2>
        {showFinalResults ? (
            <div className="final-quiz">
            <h1>Results</h1>
            <h2>
                {score}/{questions.length}  -  {(score / questions.length) * 100}%
            </h2>
            <button id="restart-button" onClick={restartQuiz}>Restart Quiz</button>
            </div>
        ) : (
            <>
            <h2 className="current-question">
                Question {currentQuestion + 1} out of {questions.length}
                </h2>
            <div className="quiz-card">
                <h3 className="question-text">
                {questions[currentQuestion]?.question}
                </h3>
            </div>
            <div className="quiz-choices">
                {shuffledChoices.map((choice, index) => (
                <button
                    className="choices"
                    key={index}
                    onClick={() => optionClicked(choice)}
                >
                    {choice}
                </button>
                ))}
            </div>
            </>
        )}
      </div>
    </test>

  );
}

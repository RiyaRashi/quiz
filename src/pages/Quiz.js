import React, { useState, useEffect } from "react";
import { useTimer } from "react-timer-hook";
import { Link } from "react-router-dom";
//import { useHistory } from "react-router-dom";

import { quiz as quizData } from "../components/quiz/Data";
import '../components/css/main.css';
import '../components/css/quiz.css';

const Quiz = () => {
  // const history = useHistory();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [quiz, setQuiz] = useState(quizData);
  const [score, setScore] = useState({
    correct: 0,
    false: 0,
  });

  const { id, question, options } = quiz[currentIndex];

  const MINUTES = 30 * 60;
  const time = new Date();
  time.setSeconds(time.getSeconds() + MINUTES);

  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp: time,
    onExpire: () => setCurrentIndex(quiz.length - 1),
  });

  const checkScore = () => {
    const questionAnswered = quiz.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) =>
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );
    setScore({
      correct: questionCorrect.length,
      false: quiz.length - questionCorrect.length,
    });
  };

  useEffect(() => {
    checkScore();
  }, [quiz]);

  const nextQuestion = () => {
    if (quiz.length - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      quiz.map((item, index) =>
        index === indexSelected
          ? {
            ...item,
            selected: true,
            options: options.map((item, index) =>
              index === indexOptionSelected
                ? { ...item, selected: true }
                : { ...item, selected: false }
            ),
          }
          : item
      )
    );
  };

  return (
    <div>
      <h2 className="text-center mb-3 mt-3">
        Quiz Screen - Score: {score.correct} - {score.false + score.correct} Timer: {hours}:
        {minutes}:{seconds}
      </h2>
      <div className="card mb-3">
        <div className="card-body design"

        >

          {quiz.map((item, index) => (
            <div
              key={index}
              className="border border-primary font-weight-bold "
              style={{
                display: "flex",
                alignSelf: "center",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                marginRight: 15,
                marginBottom: 10,
                borderRadius: 5,
                cursor: "pointer",
                backgroundColor:
                  index === currentIndex
                    ? "greenyellow "
                    : item?.selected
                      ? "grey"
                      : "transparent",
              }}
              onClick={() => setCurrentIndex(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="card">
        <div
          className="card-header bg-white font-weight-bold"

        >
          {currentIndex + 1}. {question}
        </div>
        <div className="card-body">
          {options.map((item, index) => (
            <div
              className='card-body-div'
              key={index}
            >
              <div
                style={{
                  height: 20,
                  width: 20,
                  borderRadius: 100,
                  backgroundColor: item?.selected ? "blue" : "grey",
                  cursor: "pointer",
                  marginRight: 5,
                }}
                onClick={() => selectOption(currentIndex, index)}
              />
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className='quizdiv'>
        <button
          className="btn btn-info col-sm-2"
          onClick={() => previousQuestion()}
          disabled={currentIndex === 0 ? true : false}
        >
          Previous
        </button>
        {quiz.length - 1 === currentIndex ? (
          <Link
            className="btn btn-success col-sm-2"
            to={{
              pathname: "/summary",
              state: {
                quiz,
                score,
              },
            }}
          >
            Finish
          </Link>
        ) : (
            <button
              className="btn btn-primary col-sm-2"
              onClick={() => nextQuestion()}
            >
              Next
            </button>
          )}
      </div>
    </div>
  );
};

export default Quiz;
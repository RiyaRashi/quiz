import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import '../components/css/main.css';
import '../components/css/quiz.css';

const QuizSummary = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    if (!location.state)
      history.push("/");
  }, []);

  return !location.state ? (
    <h1>Forbidden</h1>
  ) : (
      <div className="mt-3">
        <h1
          className='head'
        >
          Quiz Summary Score:{" "}
          <div className="text-success">{location.state.score.correct}</div>-{" "}
          <div className="text-danger"> {location.state.score.false + location.state.score.correct}</div>
        </h1>
        {location.state.quiz.map((item, index) => (
          <div className="card mb-3" key={index}>
            <div className="card-header bg-white">
              <div className="font-weight-bold">No.{index + 1}</div>{" "}
              {item.question}
            </div>
            <div className="card-body">
              {item.options.map((item, index) => (
                <div className='card-body-div'


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
                  />
                  {item.title}
                </div>
              ))}
            </div>
            <div className="card-footer bg-white">
              {item.options.find(
                (option) => option.correct && option.selected === option.correct
              ) ? (
                  <div className="text-success">
                    Your Answer: {item.options.find((item) => item.correct).title}
                  </div>
                ) : (
                  <>
                    <div className="text-danger">
                      Your Answer :{" "}
                      {item.options.find((item) => item.selected)?.title ??
                        "You don't answer this question"}
                    </div>
                    <div className="text-success">
                      Correct Answer :{" "}
                      {item.options.find((item) => item.correct).title}
                    </div>
                  </>
                )}
            </div>
          </div>
        ))}
      </div>
    );
};

export default QuizSummary;
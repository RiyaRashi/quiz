import React from "react";
import { Link } from "react-router-dom";

const Instructions = () => {
  return <div className="text-center"><h1>Instructions:</h1>
    <br />
    <p>1.You have to complete the quiz in the given time slot.</p><hr />
    <p>2.You can use the Previous button to go on previous question</p><hr />
    <p>3.You can use the Next button to go on next question</p><hr />
    <p>4.Once completed,click on finish to view the result</p><hr />
    <p>5.If times up quiz will automatically take you to the last question and click on finish to view the reult</p>


    <Link
      className="btn btn-success col-sm-2"
      to={{
        pathname: "/quiz",

      }}
    >
      Start
          </Link>
  </div>;
};

export default Instructions;
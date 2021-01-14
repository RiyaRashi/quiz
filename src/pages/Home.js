import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return <div className="text-center">
    <h1 className='text-center home'>Welcome to the quiz site</h1>

    <Link
      className="btn btn-success col-sm-2"
      to={{
        pathname: "/quiz",

      }}
    >
      Play now!
          </Link>
    <br></br>
    <small>It is recommended to read the instructions first!</small>

  </div>;
};

export default About;
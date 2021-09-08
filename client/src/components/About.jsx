import React from "react";

const About = ({ data }) => {
  const { bio } = data;
  return (
    <section id="about">
      <div className="row">
        <div className="twelve columns main-col">
          <h2>About Me</h2>
          <p>{bio}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

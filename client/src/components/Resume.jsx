import React from "react";
import styled, { keyframes } from "styled-components";

const Resume = ({ data }) => {
  const { education, work, skills } = data;

  const educationElement = education.map((education) => {
    return (
      <div key={education.school}>
        <h3>{education.school}</h3>
        <p className="info">
          {education.degree} <span>&bull;</span>
          <em className="date">{education.graduated}</em>
        </p>
        <p>{education.description}</p>
      </div>
    );
  });

  const workElement = work.map((work) => {
    return (
      <div key={work.company}>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>{work.description}</p>
      </div>
    );
  });

  const skillElement = skills.map((skill) => {
    const displayBar = [];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          displayBar.push("start");
          return;
        }
        displayBar.pop("start");
      });
    });
    const className = "barExpand " + skill.name.toLowerCase();

    const moveInLeft = keyframes` 
        0% {
          opacity: 0;
          width: 0%;
        }

        100% {
          opacity: 1;
          width: ${skill.level};
        }
      }`;

    const Span = styled.span`
        position: absolute;
        left: .2em;
        top: .3em;
        box-shadow: 0 0 1rem #1c354db3;
        margin: 0;
        padding-right: 2.4rem;
        background: #313131;
        display: inline-block;
        height: 1.5rem;
        line-height: 4.2rem;
        border-radius: .3rem 0 0 .3rem;
        animation: ${moveInLeft} 1s forwards;
        min-width: 1rem;
        max-width: calc(100% - .1em);
      }`;

    // style={{ width: skills.level }}
    return (
      <li key={skill.name}>
        <Span>
          <span className={className}></span>
        </Span>
        {/* <span className="percentage">{skills.level}</span> */}
        <em>{skill.name}</em>
      </li>
    );
  });
  return (
    <section id="resume">
      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="bars">
            <ul className="skills">{skillElement}</ul>
          </div>
        </div>
      </div>
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{educationElement}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{workElement}</div>
      </div>
    </section>
  );
};

export default Resume;

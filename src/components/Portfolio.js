import React from "react";
import Project from "./Project";

const projects = [
  {
    id: 0,
    title: "Run Buddy",
    languages: "css, html",
    packages: "none",
    image: "/img/project-1.png",
    description: "The best running buddy you never knew you needed!",
    repo: "https://murphyoc1.github.io/run-buddy/",
  },
  {
    id: 1,
    title: "Horisen",
    languages: "html, css",
    packages: "none",
    image: "/img/project-2.png",
    description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
    repo: "https://murphyoc1.github.io/HTML-CSS-Git-Challenge-1.github.io/",
  },
  {
    id: 2,
    title: "Robot Gladiators",
    languages: "html, css, js",
    packages: "none",
    image: "/img/project-3.png",
    description: "Have fun betting against your friends on robots in the robot arena!",
    repo: "https://murphyoc1.github.io/robot-gladiators/",
  },
  {
    id: 3,
    title: "which cocktail are you?",
    languages: "html, css, js",
    image: "/img/project-4.png",
    packages: "none",
    description: "Gives you a recommendation for a cocktail based on answers you give in the quiz.",
    repo: "https://jenn-renken.github.io/team-win-project/",
  },
  {
    id: 4,
    title: "Vacation Package Creator!",
    languages: "html, css, js, Handlebars, mysql",
    packages: "express, json, bcrypt",
    image: "/img/beach.jpeg",
    description: "The best way to plan for a vacation is right here!",
    repo: "https://github.com/akidane23/vacation_packages",
  },
  {
    id: 5,
    title: "nfteez.",
    languages: "html, css, js, Handlebars, mysql",
    packages: "express, json, bcrypt",
    image: "/img/final.png",
    description: "Choose your favorite NFT!",
    repo: "https://radiant-springs-59444.herokuapp.com/",
  }
];

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
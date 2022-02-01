import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Engineer and a Aspiring Web-Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Myself"/>
      <p className="content is-italic mt-4">
        I'm Owen, a engineer and aspiring web-developer.
      </p>
      <p className="content">
        I always thought of myself as more management material, so coding to me has been a fun but difficult challenge. 
      </p>
    </div>
  );
}

export default About;
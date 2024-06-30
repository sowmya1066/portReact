import React from "react";
import "../src/css/experience.css";

export default function Experience() {
  return (
    <section className="experience-section">
      <div className="experience-details">
        <h2>Junior Software Engineer</h2>
        <h4>Indegene, Bengaluru, India</h4>
        <div>
          <ul className="experience-bullets">
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </li>
            <li>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </li>
            <li>
              It has survived not only five centuries, but also the leap into
              electronic typesetting.
            </li>
            <li>Remaining essentially unchanged.</li>
          </ul>
        </div>
      </div>

      <div className="experience-details">
        <h2>Program Analyst Trainee</h2>
        <h4>Cognizant, Bengaluru, India</h4>
        <ul className="experience-bullets">
          <li>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </li>
          <li>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s.
          </li>
          <li>
            It has survived not only five centuries, but also the leap into
            electronic typesetting.
          </li>
          <li>Remaining essentially unchanged.</li>
        </ul>
      </div>
    </section>
  );
}

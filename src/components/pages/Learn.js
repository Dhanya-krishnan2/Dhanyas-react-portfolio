import React from "react";
import ResumePNG from "../../assets/resume.png"



function Learn() {
  return (
    <div className="contact-card">

      <div className="card">
        <h1 className="text-center">Resume</h1>
        <div className="card-content">
          <a href="tel:+61411287645" className="ml-4 mt-4 font-weight-bold">Phone</a>

          <a href="mailto:webmaster@dhanyakunhi@gmail.com" className="ml-4 mt-4 font-weight-bold">Email</a>

          <a href="https://www.linkedin.com/in/dhanya-krishnan-2039051a3/" className="ml-4 mt-4 font-weight-bold">LinkedIn</a>

          <a href="https://github.com/Dhanya-krishnan2" className="ml-4 mt-4 font-weight-bold">GitHub</a>

          <img src={ResumePNG} alt="profile-photo" className="resumePNG"></img>
          <a href="https://docs.google.com/document/d/1npCDbgqnKBpjtT_mFjHpcOZ49K8XuZfhZ5VLetqKgdE/edit?usp=sharing"><h1 className="text-center mt-2">View Here</h1></a>

        </div>
      </div>
    </div >
  );
}

export default Learn;

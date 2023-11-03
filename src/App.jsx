import React, { Fragment, useState } from "react";
import "./App.css";
import html2pdf from "html2pdf.js";
import { AiFillGithub,AiOutlineLinkedin,AiFillProject,AiFillPhone } from "react-icons/ai";
import Footer from "./Footer";


function App() {
  const [theme, setTheme] = useState("dark"); // El tema inicial es "light".

  const downloadAsPDF = () => {
    const element = document.getElementById("cv");

    html2pdf().from(element).save('mi-cv.pdf');
  };

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <Fragment>
      <div className="h-full relative" data-theme={theme}>
        <div className="w-full h-full p-10 ">
        
          <div
            id="cv"
            className="w-full flex justify-center flex-col items-center"
          >
            <div className="flex flex-col w-11/12  border">
              <div className="flex border-4 p-4 w-full group flex-col justify-center items-center">
                <p className="text-primary uppercase tracking-wide text-3xl">
                  Jailer eduardo vega meza
                </p>
                <p className=" mt-2 text-center">Frontend Developer | Colombia | <a
                      href="mailto:jailerwebwork@gmail.com"
                      className=" break-words hover:link hover:text-info"
                    >jailerwebwork@gmail.com</a></p>
              </div>

              <div className="w-full">
                <div className="flex w-full md:flex-row flex-col text-center  items-center">
                  <div className="p-2 w-full md:w-1/4 border-2 border-dotted ">
                    <a
                      href="tel:+57322286188"
                      className=" flex items-center justify-center gap-2 break-words hover:link hover:text-info"
                    >
                      <AiFillPhone/>(+57) 322 286 1882
                    </a>
                  </div>
                  <div className="p-2 w-full md:w-1/4 border-2 border-dotted ">
                    <a
                      href="https://jailerwebdeveloper.github.io/-Jailer-Portfolio/"
                      target="_blank"
                      className="group-hover:animate-pulse flex items-center justify-center gap-2 break-words hover:link hover:text-info"
                    >
                      <AiFillProject/>Portfolio
                    </a>
                  </div>
                  <div className="p-2 w-full md:w-1/4 border-2 border-dotted ">
                    <a
                      href="https://github.com/JailerWebdeveloper"
                      target="_blank"
                      className=" flex items-center justify-center gap-2 break-words hover:link hover:text-info"
                    >
                      <AiFillGithub /> Github
                    </a>
                  </div>
                  <div className="p-2 w-full md:w-1/4  border-2 border-dotted ">
                    <a
                      href="https://github.com/JailerWebdeveloper"
                      target="_blank"
                      className=" place-content-center  flex items-center justify-center gap-2 break-words md:hover:link md:hover:text-info"
                    >
                      <AiOutlineLinkedin /> Linkedln
                    </a>
                  </div>
                </div>
              </div>
              <div className="divider text-xl font-bold">SKILLS</div>
              <div className="p-4">
                <p className="text-lg font-mono mt-2">
                  <span className="font-bold">Front End : </span>HTML5 | CSS3 |
                  Reactjs | ReactNative | Astrojs | Javascript | ES6 | Tailwind
                  | Nodejs | SaSS{" "}
                </p>
                <p className="text-lg font-mono mt-2">
                  <span className="font-bold">Back End : </span>Django | Flask |
                  MongoDB | MySQL | Node | Docker | git | Github | Gitlab | AWS
                </p>
                
                <p className="text-lg font-mono mt-2">
                  I'm a web developer skilled in Front End (
                  <span className="font-semibold">
                    HTML5, CSS3, React.js, React Native
                  </span>
                  ) and Back End (Django, Flask, Node.js) technologies. I create
                  attractive, user-friendly interfaces with a focus on
                  responsive design and attention to detail.
                </p>
                <div className="my-4 divider text-xl font-bold">EXPERIENCE</div>
                <div className="p-4 flex flex-col items-center justify-center gap-5">
                  <div>
                    <p className="text-xl font-semibold">
                      Independent Developer University Project Management
                      Platform | [07/2023-10/2023]
                    </p>
                    <p>
                      I worked as a Front End Developer, designing, programming,
                      and implementing essential components for a university
                      platform for managing graduation projects. I developed the
                      database using MySQL and Django, as well as utilized
                      Docker for its deployment on a Virtual Private Server
                      (VPS).
                    </p>
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Independent Development of Landing Pages ReactJS
                      Self-Learning Project
                    </p>
                    <p>
                      I independently developed landing pages as part of a
                      self-directed project to continually expand my knowledge
                      in ReactJS. This initiative allowed me to explore and
                      enhance my skills in web development and creating engaging
                      interfaces.
                    </p>
                  </div>
                </div>

                <div className="my-4 divider text-xl font-bold">EDUCATION</div>

                <div className="p-4 flex flex-col items-center justify-center gap-5">
                  <div>
                    <p>
                      I am currently in the process of completing my Bachelor's
                      degree in Software Engineering. Alongside my formal
                      education, I have continuously developed my skills as a
                      Front End Developer through self-directed learning. I have
                      engaged in training programs such as Oracle ONE and
                      completed multiple courses relevant to the applications I
                      have challenged myself to create.
                    </p>
                  </div>
                </div>
              
                
              </div>
            </div>
          </div>

          <Footer dowload={downloadAsPDF} toggle={toggleTheme}/>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

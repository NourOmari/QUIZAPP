import React from "react";
import { MdOutlineQuiz } from "react-icons/md";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <header className="flex flex-row justify-center gap-4 items-center bg-cyan-600 py-4">
        <MdOutlineQuiz className="text-orange-500 font-bold text-xl" />
        <h1 className="text-xl font-bold text-white">Quiz Time</h1>
      </header>
      <main>
        <div>
          <h1 className="flex justify-center mt-20 text-xl font-bold animate-slidein">
            WELCOME TO QUIZ TIME !
          </h1>
          <p className="flex justify-center text-xl mt-7 animate-slidein ">
            4 MULTIPLE CHOICE QUESTIONS TO TEST YOUR JAVASCRIPT SKILLS
          </p>
          <p className="flex justify-center text-xl mt-7 animate-slidein">
            CLICK ON START BUTTON TO GET STARTED ....
          </p>
        </div>
        <div className="flex justify-center mt-7">
          <Link
            to="/QuizPage"
            className="relative px-8 py-2 rounded-md bg-white isolation-auto z-10 border-2 border-orange-50
        before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-right-full before:hover:right-0 before:rounded-full  before:bg-orange-500 before:-z-10  before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 text-orange-500 hover:text-orange-50 font-bold"
          >
            START QUIZ
          </Link>
        </div>
      </main>
    </div>
  );
}

export default HomePage;

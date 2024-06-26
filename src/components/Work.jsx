import React from "react";
import ProjectItem from "./ProjectItem";
import foodCommerceim from "../assets/projects/foodCommerce.png";
import cryptoim from "../assets/projects/crypto.png";
import taskmateim from "../assets/projects/taskmate.png";
import nikeim from "../assets/projects/nike.png";
import weatherim from "../assets/projects/weatherApp.png";
import snakeim from "../assets/projects/snakeGame.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
        <ProjectItem
            img={foodCommerceim}
            title="FoodCoomerce"
            live="https://food-co.netlify.app/"
            code="https://github.com/Anzar1015/foodCommerce"
          />
          <ProjectItem
            img={cryptoim}
            title="Cryptocurrency Tracker"
            live="https://anzar-crypto-tracker.netlify.app/"
            code="https://github.com/Anzar1015/crypto-tracker"
          />
          <ProjectItem
            img={nikeim}
            title="Taskate"
            live="https://landing-nike-page.netlify.app/"
            code="https://github.com/Anzar1015/nike_landing_page"
          />
          <ProjectItem
            img={taskmateim}
            title="Taskate"
            live="https://anzar-taskmate.netlify.app/"
            code="https://github.com/Anzar1015/taskmate"
          />
          <ProjectItem
            img={weatherim}
            title="Weather App"
            live="https://anzar-weather-app.netlify.app/"
            code="https://github.com/Anzar1015/weather-app"
          />
          <ProjectItem
            img={snakeim}
            title="Snake Game"
            live="https://anzar-snakegame.netlify.app/"
            code="https://github.com/Anzar1015/Snake-Game"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;

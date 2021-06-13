import React from "react";
import "../../App.css";
import Typewriter from "typewriter-effect";
import MenuIcon from "../../assets/icons/3lines_icon_both.png";

const Title = () => {
  return (
    <div className="TMessage">
      <div className="hi-text-2" data-aos="fade-right">
        Hi,
      </div>

      <div className="titleMessage" data-aos="fade-up">
        <div className="heading">
          <div className="title-border">
            <span className="title-name" data-aos="fade-up">
              <div className="im-text">I'm</div>
              <div className="hi-text">Hi, I'm</div>
              <strong className="title-strong">AARON </strong>
              <strong className="title-strong">ARMSTRONG</strong>
              <div className="sub">
                <Typewriter
                  options={{
                    strings: ["Frontend Developer", "Lifelong Learner"],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                  }}
                />
              </div>
              <div>
                <img className="menu-icon" src={MenuIcon} alt="menu-icon" />
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;

import "./styles/home.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import PopUp from "../reusables/popUp";
import SignUp from "../services/auth/signUp";
import { auth } from "../services/firebase";
const Home = () => {
  const navigate = useNavigate();
  const [popUp, setPopup] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row" id="upper-land-page">
        <div className="col">
          <h2 id="tagline">
            With you, <br /> from fear to cheer.
          </h2>
          <button id="join" onClick={() => setPopup(true)}>
            Join us
          </button>
        </div>
        <PopUp trigger={popUp} setTrigger={setPopup}>
          <SignUp />
        </PopUp>
        <div className="col">
          <img
            src="https://i.postimg.cc/nrh1DVMf/frontpage-removebg-preview-1.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <img
          src="https://i.postimg.cc/sDT4yQbz/Ellipse-5.png"
          className="ellipse"
          id="one"
          alt=""
        />
        <img
          src="https://i.postimg.cc/htjbGLds/Ellipse-6.png"
          className="ellipse"
          id="two"
          alt=""
        />
        <img
          src="https://i.postimg.cc/50MC8L6Z/Ellipse-7.png"
          className="ellipse"
          id="three"
          alt=""
        />
        <img
          src="https://i.postimg.cc/MpMM4dBC/Ellipse-9.png"
          className="ellipse"
          id="four"
          alt=""
        />
        <div className="row" style={{ marginBottom: "4rem" }}>
          <div className="col-4 images">
            <img
              className="features"
              src="https://i.postimg.cc/526knH2L/undraw-Diary-re-4jpc-1.png"
              alt=""
            />{" "}
            <br />
            <img
              className="features"
              src="https://i.postimg.cc/DwkbYH26/undraw-video-game-night-8h8m-1.png"
              alt=""
            />{" "}
            <br />
            <img
              className="features"
              src="https://i.postimg.cc/PxxLwk4X/undraw-video-files-fu10-1.png"
              alt=""
            />{" "}
            <br />
            <img
              className="features"
              src="https://i.postimg.cc/Y0LhdfZT/undraw-Chat-bot-re-e2gj-1.png"
              alt=""
            />{" "}
            <br />
            <img
              className="features"
              src="https://i.postimg.cc/fWVC44NQ/undraw-Doctors-p6aq-1.png"
              alt=""
            />
          </div>
          <div className="col-7 descrip">
            <div className="row">
              <div className="col-10">
                <h3>
                  Daily Journal: Write or record everything that happened and
                  all that you feel in a digital diary or journal and we will
                  depict your whole day in an overall emotion.
                </h3>
              </div>
              <div className="col-1">
                <button onClick={() => navigate("/journal")} className="next">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ marginTop: "5rem", width: "50px", height: "50px" }}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3>
                  Game Zone: Play some really exciting and interactive games to
                  help you feel better. All the games are designed keeping in
                  mind the mental health of people.
                </h3>
              </div>
              <div className="col-1">
                <button className="next">
                  <FontAwesomeIcon
                    onClick={() => navigate("/game")}
                    icon={faAngleRight}
                    style={{ marginTop: "5rem", width: "50px", height: "50px" }}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3>
                  Suggestions: We suggest you with music, podcasts, movies,
                  series and much more according to your mood to impact your
                  mental health positively.
                </h3>
              </div>
              <div className="col-1">
                <button
                  onClick={() => navigate("/suggestion")}
                  className="next"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ marginTop: "5rem", width: "50px", height: "50px" }}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3>
                  Chat Box: With an anonymous identity, feel free to talk to
                  chat bot, people, professionals etc. and share your thoughts
                  without the fear of getting judged and make new friends.
                </h3>
              </div>
              <div className="col-1">
                <button onClick={() => navigate("/chatbox")} className="next">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ marginTop: "5rem", width: "50px", height: "50px" }}
                  />
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-10">
                <h3>
                  Doc Connect: We also help you connect with psychologists near
                  you whenever in need both physically and virtually.
                </h3>
              </div>
              <div className="col-1">
                <button
                  onClick={() => navigate("/docconnect")}
                  className="next"
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ marginTop: "5rem", width: "50px", height: "50px" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container motivation">
          <h1 className="motivation-heading">DAILY MOTIVATION FOR YOU</h1>
          <div className="quotes">
            <h3>“Don't let yesterday take up too much of today.”</h3>
          </div>
          <div className="quotes">
            <h3>“Believe you can and you're halfway there.”</h3>
          </div>
          <div className="quotes">
            <h3>
              “The difference between who you are and who
              <br /> you want to be is what you do.”
            </h3>
          </div>
        </div>
      </div>
      <div className="container" id="about">
        <h1>ABOUT US</h1>
        <div className="about">
          <img
            src="https://i.postimg.cc/kM8wvMYm/image-2.png"
            style={{ width: "100%" }}
            alt=""
          />
          <h3>
            We are a team of individuals aimed at creating and providing all
            possible solutions that would lead to the betterment of the mental
            health of an individual and also the community as a whole. We try to
            look into every new way, ideas can be implemented to make the whole
            process of improving the mental health of a person, a very easy,
            joyful and effective one. We try our level best to make sure every
            individual using our website benefits the most and resides with a
            healthy mental state.
          </h3>
        </div>
      </div>
      <div className="container" id="team">
        <h1>OUR TEAM</h1>
        <div className="row team">
          <div className="col">
            <img src="https://i.postimg.cc/Jn2r7VBr/image-3.png" alt="" />
          </div>
          <div className="col">
            <h2 className="team-names">Nitin Mishra</h2>
            <h2 className="team-names">Anil Kumar Behera</h2>
            <h2 className="team-names">Srusti Swarupini Prusty</h2>
            <h2 className="team-names">Soyam Prabha Mallick</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

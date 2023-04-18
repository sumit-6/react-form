import didi from "../aboutUs/didi.jpeg"
import mastermind from "../aboutUs/mastermind.jpeg";
import dosstheboss from "../aboutUs/dosstheboss.jpeg";
import rahul from "../aboutUs/me.jpeg";
import gmail from "../aboutUs/gmail.svg";
import instagram from "../aboutUs/instagram2.svg"
import linkedIn from "../aboutUs/linkedin-svgrepo-com.svg"
import github from "../aboutUs/icons8-github.svg"
import "../aboutUs/style.css"

function AboutUs() {
    return (
        <>
            <div className="about-section">
                <h1>Your portfolio, Your story, Your success.</h1>
                <p>Highlight your strengths and showcase your work with ease.</p>
                <p>Your work deserves to be seen. Show it off.</p>
            </div>
            <div className="responsive-container-block outer-container">
                <div className="responsive-container-block inner-container">
                <p className="text-blk section-head-text">
                    Meet Our Team
                </p>
                <p className="text-blk section-subhead-text">
                    
                    
                </p>
                <div className="responsive-container-block">
                    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div className="team-card">
                        <div className="img-wrapper">
                        <img className="team-img" src={didi} alt="" />
                        </div>
                        <p className="text-blk name">
                        Devanshi Gupta
                        </p>
                        <p className="text-blk position">
                        React developer
                        </p>
                        <p className="us_p">Hello, 
                        I am Devanshi Gupta. Currently in 3rd year. 
                        I love doing development. I am a MERN developer. 
                        I love problem solving and brainstorming on problems. Always up to talk about Algorithms, tech stuff and Blockchain. 🤓.</p>

                        <div className="flex-container">
                        <a href="mailto:devanshigupta2002@gmail.com" >
                            <img src={gmail} width="30px" alt="" />
                        </a>
                        <a href="https://www.instagram.com/_devanshi.gupta_/" >
                            <img src={instagram} width="30px" />
                        </a>
                        <a href="https://github.com/Devanshi449" >
                            <img src={github} width="30px" />
                        </a>
                        <a href="https://www.linkedin.com/in/devanshi-gupta-29587b214/" >
                            <img src={linkedIn} width="30px" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div className="team-card">
                        <div className="img-wrapper">
                        <img className="team-img" src={mastermind} />
                        </div>
                        <p className="text-blk name">
                        Sumit Verma
                        </p>
                        <p className="text-blk position">
                        Back-end Developer
                        </p>
                        <p className="us_p">
                        I am a third year student seeking to practice development by making some impactful projects.
                        I am also into competitive programming.
                        
                        </p>
                        <div className="flex-container">
                        <a href="mailto:vermasumit923@gmail.com" >
                            <img src={gmail} width="30px" />
                        </a>
                        <a href="https://www.instagram.com/sumitverma7720/" >
                            <img src={instagram} width="30px" />
                        </a>
                        <a href="https://github.com/sumit-6" >
                            <img src={github} width="30px" />
                        </a>
                        <a href="https://www.linkedin.com/in/sumit-verma-7b3a76205/" >
                            <img src={linkedIn} width="30px" />
                        </a>
                        
                        </div>
                    </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div className="team-card">
                        <div className="img-wrapper">
                        <img className="team-img" src={dosstheboss} />
                        </div>
                        <p className="text-blk name">
                        Deepak Dass
                        </p>
                        <p className="text-blk position">
                        Front-end Developer
                        </p>
                        <p className="us_p">
                        I am a CSE undergrad at Delhi Technological University (DTU). I am learning DSA in C++, also have knowledge of Python programming. Web development seems to be interesting, so I am learning Front-end Dev. I also learnt some technologies like Django, NodeJS and made projects on them.
                        </p>
                        <div className="flex-container">
                        <a href="mailto:iamdeepakdass@gmail.com" >
                            <img src={gmail} width="30px" />
                        </a>
                        <a href="https://www.instagram.com/ideepakdd/" >
                            <img src={instagram} width="30px" />
                        </a>
                        <a href="https://github.com/iamdeepakdass" >
                            <img src={github} width="30px" />
                        </a>
                        <a href="https://www.linkedin.com/in/iamdeepakdass/" >
                            <img src={linkedIn} width="30px" />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 team-card-container">
                    <div className="team-card">
                        <div className="img-wrapper">
                        <img className="team-img" src={rahul} />
                        </div>
                        <p className="text-blk name">
                        Rahul Verma
                        </p>
                        <p className="text-blk position">
                        Front-end Developer and Designer
                        </p>
                        <p className="us_p">
                        I am a ECE undergrad at Delhi Technological University (DTU). I am learning data analysis ,DSA in C++, also have knowledge of Python programming. I am aiming to be a full stack developer.
                        </p>
                        <div className="flex-container">
                        <a href="mailto:rrahulverma098@gmail.com" >
                            <img src={gmail}  width="30px" />
                        </a>
                        <a href="https://www.instagram.com/__rahulllll___/" >
                            <img src={instagram} width="30px" />
                        </a>
                        <a href="https://github.com/anonymouse003" >
                            <img src={github} width="30px" />
                        </a>
                        <a href="https://www.linkedin.com/in/rahul-verma-0a752a1b5/" >
                            <img src={linkedIn} width="30px" />
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
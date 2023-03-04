import "./MyProfile.css";
import img1 from "../asset/img/web1.png";
const MyProfile = () => {


    return (
        <div className="abouMe-row" id="About">
            <div
                className="  about-img"

            >
                <img src={img1} alt="" />
            </div>
            <div
                className="about_myinfo"

            >
                <div className="aboutMe_title">
                    <h2>About Me</h2>
                    <h3>Why Hire Me For Your Next Project ?</h3>
                </div>
                <div className="about-description">


                    <p>My name's Kuwar. I'm a web designer and developer based in India.
                        <br></br>
                        <br></br>
                        I bring a unique set of skills and experiences to every project I undertake. My technical expertise is top-notch, with a deep understanding of various programming languages and technologies. I stay up-to-date with the latest industry trends and advancements, ensuring that my skills are always relevant and effective. </p>
                </div>


            </div>
        </div>

    );
};

export default MyProfile;

import React from "react";
// import images ....
import one from "../Images/pexels-moe-magners-7495106 1.png";
import two from "../Images/pexels-thisisengineering-3861964 1.png";
import abouticon from "../Images/Document model 1.png";
import abouticons from "../Images/Bills 1.png";
import abouticone from "../Images/Automate 1.png";
import abouticones from "../Images/Automate 1.png";
import executiveOne from "../Images/Rectangleone.png";
import executivetwo from "../Images/Rectangletwo.png";
import executivethree from "../Images/Rectanglethree.png";
import aboutbanner from "../Images/aboutusbanner.png";

const AboutUs = () => {
  return (
    <div>
      <div className="aboutusbanner">
        <img src={aboutbanner} alt="image" width="100%" />
      </div>
      <div className="centered">
        <h3>About Us</h3>
      </div>

      <div className="container">
        <div
          className=" about-key
        "
        >
          <div className="row">
            <div className="col-lg-6 about-colum">
              <div>
                <h3 className="local-heade">About Key Software Inc.</h3>
                <p className="aboutkey-text">
                  Our strength is our profuse knowledge of the healthcare
                  industry, our people who are with us for more than 10 years
                  and our experience with clients on almost all areas of their
                  IT needs!!!
                </p>
                <p className="aboutkey-text">
                  We build confidence and long lasting relationship with all our
                  clients.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={one} alt="img" />
            </div>
          </div>
        </div>

        {/* ..... */}

        <div className="row mt-5">
          <div className="col-lg-6">
            <img src={two} alt="img" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h3 className="local-heade">
                Clients trust us for our IT services
              </h3>
              <p className="aboutkey-text">
                Over three decades ago, Key Software, Inc. has started as an
                Aerospace consulting firm working on guidance and tracking
                systems for missiles. In early 90s, as healthcare industry was
                getting computerized, we started consulting for MZI and were
                part of the development of EZ-CAP®™. After leaving EZ-CAP®™, we
                started consulting for healthcare companies (MSOs, IPA
                management organizations, TPAs, small healthplans) and along the
                way have solved several challenges for our clients.
                <br /> After all this time, we feel like, we have seen it all,
                but we keep getting better with adoption of new technology and
                solving new challenges!
              </p>
            </div>
          </div>
        </div>
        {/* ...... */}

        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="aboutusboxOne">
              <img src={abouticon} alt="img" />
              <p className="aboutkey-text mt-3">
                Introduced EasyView, a document management solution, when
                document management was very manual.
              </p>
            </div>
            <div className="about-secondboxone mt-3">
              <img src={abouticone} alt="img" />
              <p className="aboutkey-text mt-3">
                Automated the processes of our clients and increased their
                efficiency to an extent where 80 - 90% of their claims were
                getting automatically priced, processed and audited.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-secondbox">
              <img src={abouticons} alt="img" />
              <p className="aboutkey-text mt-3">
                Created efficient processes for paper claims processing.
              </p>
            </div>
            <div className="aboutusbox mt-3">
              <img src={abouticones} alt="img" />
              <p className="aboutkey-text mt-3">
                Created heavily customizable workflow applications and a generic
                workflow framework.{" "}
              </p>
            </div>
          </div>
        </div>
        {/* ..... */}

        <div className="mt-5">
          <h2 className="text-center local-heade">Executive Team</h2>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div>
                <img src={executiveOne} alt="img" className="excutive-image" />
              </div>
              <div className="executive">
                <h3>Nejdeh Khachikian</h3>
                <span>Chief Executive Officer</span>
                <span className="text-info">View Info | Send Message</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img src={executivetwo} alt="img" className="excutive-image" />
              </div>
              <div className="executive">
                <h3>Karthik Malasani</h3>
                <span>Senior Member of Technical Staff</span>
                <span className="text-info">View Info | Send Message</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <img
                  src={executivethree}
                  alt="img"
                  className="excutive-image"
                />
              </div>
              <div className="executive">
                <h3>Joe Aiwazian</h3>
                <span>Ex. Chief Executive officer</span>
                <span className="text-info">View Info | Send Message</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

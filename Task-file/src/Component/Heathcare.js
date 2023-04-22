import React from "react";

// import images
import one from "../Images/Eligibility & Provider Data Management 1.png";
import two from "../Images/female-scientist-white - Copy 1.png";
import three from "../Images/image 2.png";

const Heathcare = () => {
  return (
    <div>
      <div className="contact-banner">
        <h3 className="top-contact-header">HealthCare data management</h3>
      </div>

      <div className="container">
        <div>
          <h4 className="text-center mt-5 health-care-title">
            Key Software, Inc. offers customized applications that are
            <br /> capable of in-loading, exporting and managing the following
            <br /> types of data
          </h4>
        </div>
        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <img src={one} alt="pitture" width="100%" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="health-header">
                Eligibility & Provider Data Management
              </h4>
              <ul>
                <li className="list-style">
                  Efficiently managed more than 30 million providers and 45
                  million members by interfacing with 20+ health plans with just
                  3 data processors
                </li>
                <li className="list-style">
                  Experienced in handling various types of members & provider
                  data in various formats, data balancing/reconciliation
                </li>
                <li className="list-style">
                  Adept in automation of data processing including error
                  detection and correction
                </li>
                <li className="list-style">
                  {" "}
                  Created a robust process including three-level support
                  structure, data warehousing of raw data, maintaining detailed
                  process logs and automated process notifications to
                  takeholders
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        {/* .....second row..... */}
        <div className="row mt-5">
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="health-header">
                Claims & Authorizations Data Exchanges
              </h4>
              <ul>
                <li className="list-style">
                  Created automated applications to load & export more than 40
                  files from various health plans in various formats (X12 and
                  proprietary formats)
                </li>

                <li className="list-style">
                  Automation of end to end process including downloading files
                  from FTP, processing, error notification, reconciliation,
                  export and uploading response files to FTP sites
                </li>
                <li className="list-style">
                  Misdirected claims handling through generation of paper claims
                  or X12 responses
                </li>
                <li className="list-style">
                  {" "}
                  Ability to reate members and providers on the fly using data
                  from claims along woth NPPES fata to avoid using default IDs
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <div>
              <img src={two} alt="pitture" width="100%" />
            </div>
          </div>
        </div>
        {/* ....third row.... */}
        <div className="row mt-5">
          <div className="col-lg-6">
            <div>
              <img src={three} alt="pitture" width="100%" />
            </div>
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-5 about-colum">
            <div>
              <h4 className="health-header">
                Data Migration to and from EZ-CAP®™
              </h4>
              <ul>
                <li className="list-style">
                  Successfully completed system migrations from EZ-CAP®™ to
                  FACETS® and from other systems to EZ-CAP®™
                </li>

                <li className="list-style">
                  In-depth understanding of health care data and EZ-CAP®™ data
                  structures.
                </li>

                <span className="EZ-cap">
                  EZ-CAP®™ is a registered trademark of Citra Health Solutions
                  (part of Cedar Gate Technologies). FACETS® is a product of
                  Trizetto (a subsidiary of Cognizant)
                </span>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heathcare;

import React from "react";
// import images

import one from "../Images/careone.png";
import two from "../Images/caretwo.png";
import Table from "./Table";

const Consultingcare = () => {
  return (
    <div>
      <div className="contact-banner">
        <h3 className="top-contact-header"> Healthcare Consulting</h3>
      </div>

      <div className="container">
        <div>
          <h4 className="text-center mt-5 health-care-title ">
            Our experience enables us to build, upgrade or maintain
            <br /> custom applications to handle our client’s business needs.
            Some
            <br /> of the recent customized applications we build for our
            clients <br />
            include
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
              <h4 className="contnet-change-title">External Communication</h4>
              <ul>
                <li className="list-style">
                  Automation of member & provider notification and
                  reconciliation
                </li>
                <li className="list-style">
                  Built applications for letter generation using templates in
                  Microsoft word or Crystal reports
                </li>
                <li className="list-style">
                  Interfaced with robot dialers to automate phone calls to
                  members and providers
                </li>
                <li className="list-style">
                  Dynamic generation of HCFA-1500 or UB-04 form with claim
                  details for forwarding misdirected claims to health plan
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
              <h4 className="contnet-change-title">Reporting</h4>
              <ul>
                <li className="list-style">
                  Automated report generation using Crystal Reports, SQL
                  Reporting services or customized applications
                </li>

                <li className="list-style">
                  Expertise in building Tableau or SSRS dashboards
                </li>
                <li className="list-style">
                  Detailed understanding of reporting guidelines including
                  Medicare Part C reporting
                </li>
                <li className="list-style">
                  {" "}
                  Expertise in design and development of data warehouses with
                  nightly or real-time updates
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

        <div className="mt-5 feeds">
          <span className="">
            {" "}
            We have worked with (on behalf of our clients) the following <br />
            health plans in exchanging various data feeds
          </span>
        </div>
      </div>

      <div className="mt-5">
        <Table />
      </div>
    </div>
  );
};

export default Consultingcare;

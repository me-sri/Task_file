import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid border-line mt-5">
      <div className="container">
        <footer>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="footer-colum">
                {" "}
                <h4 className="Footer-headline"> ADDRESS</h4>
                <span className="footer-text">40 W Cochran St.</span>
                <br />
                <span className="footer-text">Suite 212, Simi Valley,</span>
                <br />
                <span className="footer-text">CA 93065 United States</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-colum">
                <h4 className="Footer-headline">SERVICES</h4>
                <span className="footer-text">Healthcare Data Management</span>
                <br />
                <span className="footer-text">Claims Automation</span>
                <br />
                <span className="footer-text">Utilization Management</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="footer-colum">
                <h4 className="Footer-headline">CONTACT</h4>
                <p className="footer-text">
                  Need help?
                  <br />
                  Call - (805) 523 1085
                </p>
                <span className="footer-text">sales@keysoftwareinc.com</span>
                <br />
                <span className="footer-text">
                  spansupport@keysoftwareinc.com
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

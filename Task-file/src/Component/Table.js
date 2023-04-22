import React from "react";
import one from "../Images/tick.png";

const Table = () => {
  return (
    <div className="container">
      <div className="health-plan">
        <span className="health-row">
          {" "}
          Heath Plan Data Interfacing Overview
        </span>
      </div>
      <div className="container">
        <table class="table table-striped">
          <thead>
            <tr className="">
              <th scope="col" className="small-table">
                plan
              </th>
              <th scope="col" className="small-table">
                Eligibility
              </th>
              <th scope="col" className="small-table">
                Provider
              </th>
              <th scope="col" className="small-table">
                Claims
              </th>
              <th scope="col" className="small-table">
                Authorizations
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Humana</th>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row">Aetna</th>

              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row">Cigna</th>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row">Anthem (Multiple interfaces)</th>
            </tr>

            <tr>
              <th scope="row pl-5">Commercial: 8 states/4 systems</th>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row pl-5">Medicare: 20 states</th>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row">Medicare: 6 states</th>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
            </tr>
            <tr>
              <th scope="row">Optum</th>
              <td>
                <img src={one} alt="img" className="d-none" />
              </td>
              <td>
                <img src={one} alt="img" className="d-none" />
              </td>
              <td>
                <img src={one} alt="img" />
              </td>
              <td>
                <img src={one} alt="img" className="d-none" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="health-plan">
        <span>Heath Plan Data Interfacing Overview</span>
      </div>
      <table class="table table-striped">
        <thead>
          <tr className="">
            <th scope="col">BCBS</th>
            {/* <th scope="col">Eligibility</th>
      <th scope="col">Provider</th>
      <th scope="col">Claims</th>
      <th scope="col">Authorizations</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">NY</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Western New York</th>

            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Tennessee</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          {/* <tr>
      <th scope="row">Anthem (Multiple interfaces)</th>
   
    </tr> */}

          <tr>
            <th scope="row pl-5">Florida</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row pl-5">Idaho</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">North Carolina</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Illinois</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Excellus</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Louisiana</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Premera</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Emblem</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">HealthFirst</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>

            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Dignity Health</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">WellCare</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Tufts</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">Oxford</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Harvard Pilgrims</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
          <tr>
            <th scope="row">MVP</th>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" className="d-none" />
            </td>
          </tr>
        </tbody>
      </table>

      <div className="health-plan">
        <span>Non-commercial plans</span>
      </div>

      <table class="table table-striped">
        <thead>
          <tr className="">
            <th scope="col">BCBS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">NY</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
          <tr>
            <th scope="row">Western New York</th>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
            <td>
              <img src={one} alt="img" />
            </td>
          </tr>
        </tbody>
      </table>

      {/* <div className='table-col'>
    <h5 className='bg-info table-head'>Heath Plan Data Interfacing Overview</h5>
</div> */}
    </div>
  );
};

export default Table;

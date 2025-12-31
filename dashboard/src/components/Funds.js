import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-wrapper container my-5">
      {/* Fund Actions */}
      <div className="funds-actions d-flex justify-content-between align-items-center mb-4 p-3 bg-light rounded shadow-sm">
        <p className="mb-0 fw-bold">Instant, zero-cost fund transfers with UPI</p>
        <div>
          <Link className="btn btn-success me-2">Add Funds</Link>
          <Link className="btn btn-primary">Withdraw</Link>
        </div>
      </div>

      <div className="row">
        {/* Equity Column */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm">
            <div className="card-header bg-white">
              <h5 className="mb-0">Equity</h5>
            </div>
            <div className="card-body table-wrapper">
              <div className="data-row">
                <span>Available margin</span>
                <span className="text-success fw-bold">4,043.10</span>
              </div>
              <div className="data-row">
                <span>Used margin</span>
                <span>3,757.30</span>
              </div>
              <div className="data-row">
                <span>Available cash</span>
                <span>4,043.10</span>
              </div>
              <hr />
              <div className="data-row">
                <span>Opening Balance</span>
                <span>4,043.10</span>
              </div>
              <div className="data-row">
                <span>Opening Balance</span>
                <span>3,736.40</span>
              </div>
              <div className="data-row">
                <span>Payin</span>
                <span>4,064.00</span>
              </div>
              <div className="data-row">
                <span>SPAN</span>
                <span>0.00</span>
              </div>
              <div className="data-row">
                <span>Delivery margin</span>
                <span>0.00</span>
              </div>
              <div className="data-row">
                <span>Exposure</span>
                <span>0.00</span>
              </div>
              <div className="data-row">
                <span>Options premium</span>
                <span>0.00</span>
              </div>
              <hr />
              <div className="data-row">
                <span>Collateral (Liquid funds)</span>
                <span>0.00</span>
              </div>
              <div className="data-row">
                <span>Collateral (Equity)</span>
                <span>0.00</span>
              </div>
              <div className="data-row fw-bold">
                <span>Total Collateral</span>
                <span>0.00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Column */}
        <div className="col-md-6 mb-4">
          <div className="card shadow-sm text-center py-5">
            <p className="mb-3">You don't have a commodity account</p>
            <Link className="btn btn-primary">Open Account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;

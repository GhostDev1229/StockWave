import React from "react";

function Footer() {
  return (
    <footer
      className="pt-5 mt-5"
      style={{
        backgroundColor: "rgb(245, 247, 250)",
        color: "#444",
        fontSize: "14px",
      }}
    >
      <div className="container border-top pt-4">
        <div className="row gy-4">
          {/* Logo + Copyright */}
          <div className="col-md-3 col-sm-6 text-center text-md-start">
            <img src="media/logo.svg" alt="Zerodha Logo" style={{ width: "60%" }} />
            <p className="mt-3">
              &copy; 2010 - 2024, <b>Not Zerodha Broking Ltd.</b>  
              <br />All rights reserved.
            </p>
          </div>

          {/* Company */}
          <div className="col-md-3 col-sm-6">
            <p className="fw-semibold mb-2">Company</p>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Careers",
              "Zerodha.tech",
              "Press & media",
              "Zerodha cares (CSR)",
            ].map((item, index) => (
              <div key={index}>
                <a href="#" className="text-decoration-none text-muted">
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Support */}
          <div className="col-md-3 col-sm-6">
            <p className="fw-semibold mb-2">Support</p>
            {[
              "Contact",
              "Support portal",
              "Z-Connect blog",
              "List of charges",
              "Downloads & resources",
            ].map((item, index) => (
              <div key={index}>
                <a href="#" className="text-decoration-none text-muted">
                  {item}
                </a>
              </div>
            ))}
          </div>

          {/* Account */}
          <div className="col-md-3 col-sm-6">
            <p className="fw-semibold mb-2">Account</p>
            {["Open an account", "Fund transfer", "60 day challenge"].map(
              (item, index) => (
                <div key={index}>
                  <a href="#" className="text-decoration-none text-muted">
                    {item}
                  </a>
                </div>
              )
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-5 text-muted" style={{ fontSize: "13px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633. Depository services through Zerodha Securities Pvt.
            Ltd. – IN-DP-100-2015. Commodity Trading through Zerodha Commodities
            Pvt. Ltd. – INZ000038238.  
            Registered Address: #153/154, 4th Cross, Dollars Colony,
            Bengaluru - 560078.
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorized transactions in your account. Update your
            contact details with your stock brokers. KYC is a one-time exercise
            while dealing in securities markets.
          </p>

          <p>
            We do not provide stock tips or investment advice. If anyone claims
            to represent Zerodha Clone for trading on your behalf, please report
            it immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

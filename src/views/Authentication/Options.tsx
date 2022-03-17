import React, { useState, useEffect } from "react";
import axios from "axios";
import SignSide from "../../components/SignSide";
import Logo from "../../components/Logo";
import { OptionsTypes } from "../../utils/types";
import { link } from "../../utils/links";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";

const Options = () => {
  const [accountTypes, setAccountTypes] = useState<OptionsTypes>([]);

  useEffect(() => {
    axios
      .get(`${link}/accounts/getAllAccountType`)
      .then((response) => {
        console.log(response.data);
        setAccountTypes(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="options">
      <div className="account__types">
        <Logo className="login__brand mb-5" />
        <div className="accounts">
          <h5 className="mt-5">Select Account Type</h5>
          {accountTypes.length > 0 ? (
            <div className="option__cards">
              {accountTypes.map((account, index) => (
                <Link to={`/options/${account.accountType}`}>
                  <div className="option__card" key={index}>
                    {account.accountType === "Personal" && (
                      <i className="fa-solid fa-person-circle-check"></i>
                    )}
                    {account.accountType === "Corporate" && <i className="fa-solid fa-shop"></i>}
                    {account.accountType === "SME" && <i className="fa-solid fa-shop-lock"></i>}
                    <p>{account.accountType} Account</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <ReactLoading color="#111119" width={30} height={30} type="spin" />
          )}
        </div>
      </div>
      <div className="side__component">
        <SignSide />
      </div>
      {/* WgA9yqVDSLb68Wsdq6PG Bitbucket */}
    </div>
  );
};

export default Options;

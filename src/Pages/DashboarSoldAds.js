import React from "react";
import UserProfile from "../Components/UserProfile";
import Sold from "../Components/SoldAds";
import Headbanner from "../Components/Headbanner";

function DashboardSoldAds() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <Sold />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardSoldAds;

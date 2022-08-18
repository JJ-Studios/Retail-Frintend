import React from "react";
import UserProfile from "../Components/UserProfile";
import NoShippingAds from "../Components/NoShippingAds";
import Headbanner from "../Components/Headbanner";

function DashboardNoShipAds() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <NoShippingAds />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardNoShipAds;

import React from "react";
import Headbanner from "../Components/Headbanner";
import PendingAds from "../Components/PendingAds";
import UserProfile from "../Components/UserProfile";

function DashboardPendingAds() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <PendingAds />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardPendingAds;

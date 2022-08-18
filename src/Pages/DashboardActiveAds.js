import React from "react";
import ActiveAds from "../Components/ActiveAds";
import Headbanner from "../Components/Headbanner";
import UserProfile from "../Components/UserProfile";

function DashboardFavoriteAds() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <ActiveAds />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardFavoriteAds;

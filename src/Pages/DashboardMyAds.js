import React from "react";
import UserProfile from "../Components/UserProfile";
import MyAds from "../Components/MyAds";
import Headbanner from "../Components/Headbanner";

function DashboardMyAds() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <MyAds />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardMyAds;

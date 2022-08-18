import React from "react";
import Headbanner from "../Components/Headbanner";
import UserProfile from "../Components/UserProfile";
import ViewColorsComponent from "../Components/ViewColorsComponent";

function DashboardColors() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <ViewColorsComponent />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardColors;

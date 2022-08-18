import React from "react";
import Headbanner from "../Components/Headbanner";
import UserProfile from "../Components/UserProfile";
import ViewCategoriesComponent from "../Components/ViewCategoriesComponent";

function DashboardCategories() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <ViewCategoriesComponent />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardCategories;

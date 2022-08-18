import React from "react";
import ViewProduct from "../Components/ViewProduct";
import Headbanner from "../Components/Headbanner";
import UserProfile from "../Components/UserProfile";

function DashboardProduct() {
  return (
    <div>
      <Headbanner />
      <body className="body-wrapper" style={{ backgroundColor: "#F7E9EC" }}>
        <section className="dashboard section">
          <div className="container">
            <div className="row">
              <UserProfile />
              <ViewProduct />
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default DashboardProduct;

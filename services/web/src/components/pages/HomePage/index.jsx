import React from "react";

import Pagetemplate from "../../templates/PageTemplate";

function HomePage() {
  return (
    <Pagetemplate>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h1 className="mt-5">Sample Home Page</h1>
            <p className="lead">Powered by Laravel API and ReactJS</p>
          </div>
        </div>
      </div>
    </Pagetemplate>
  );
}

export default HomePage;

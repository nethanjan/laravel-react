import React from "react";

import Header from "../orgamisms/Header";
import Footer from "../orgamisms/Footer";

const PageTemplate = ({ className, children, ...props }) => {
  return (
    <div className={className} {...props}>
      <Header />
      {children}
      <div className="footerClass">
        <Footer />
      </div>
    </div>
  );
};

export default PageTemplate;

import React from "react";


const Policy = () => {
  return (
    <div title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 text-center">
          <h1 className="bg-dark p-2 text-white text-center">Privacy Policy</h1>
          <p>
            At Over Pokemon Website, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, and safeguard your data. We
            collect information to enhance your shopping experience and provide
            personalized services. Your data is secure and never shared without
            your consent. You can trust us to handle your information
            responsibly. If you have any questions or concerns, please contact
            our dedicated Privacy Team. By using our website, you agree to the
            terms of this Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;

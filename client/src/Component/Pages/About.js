import React from "react";


const About = () => {
  return (
    <div >
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">About US</h1>
          <p className="text-justify text-center mt-2">
            Welcome to Over Pokemon Website! We are your one-stop
            destination for all your shopping needs. Our mission is to provide
            you with a seamless online shopping experience, offering a wide
            range of high-quality products at competitive prices. With a
            commitment to customer satisfaction, we strive to exceed your
            expectations with exceptional service and a user-friendly interface.
            Explore our vast selection of products and discover why we're the
            preferred choice for online shoppers worldwide. Thank you for
            choosing us, and we look forward to serving you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

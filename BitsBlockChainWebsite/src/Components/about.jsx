import React from "react";
import "../Css/about.css";
import aboutImage from "../../public/images/about.jpg";

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to BITS Blockchain Club, a student-managed organization at
          BITS Pilani dedicated to fostering a vibrant culture around blockchain
          technology within our campus community. With a passion for innovation
          and a commitment to excellence, we strive to educate, inspire, and
          empower students to explore the vast potential of blockchain
          technology. Over the years, we have organized numerous successful
          hackathons centered around blockchain, providing students with
          invaluable opportunities to learn, collaborate, and create. As we look
          to the future, our vision remains clear: to continue pushing the
          boundaries of blockchain innovation, driving forward progress, and
          shaping the future of technology. Join us on this exciting journey as
          we unlock the endless possibilities of blockchain together.
        </p>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
}

export default AboutUs;

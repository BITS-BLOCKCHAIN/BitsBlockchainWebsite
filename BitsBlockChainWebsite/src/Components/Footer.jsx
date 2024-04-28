import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const smoothScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const smoothScrollToSection = (e, sectionId) => {
    e.preventDefault();
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-4">
        <div className="text-white">
          <h2 className="font-bold text-3xl mb-4">Bits Blockchain</h2>
        </div>

        <div className="text-white">
          <h2 className="font-bold text-lg mb-4">Quick Nav</h2>
          <ul>
            <li>
              <a href="#home" onClick={(e) => smoothScrollToTop(e)}>
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                onClick={(e) => smoothScrollToSection(e, "about-us")}
              >
                About Us
              </a>
            </li>
            <li>
              <a href="#info" onClick={(e) => smoothScrollToSection(e, "info")}>
                Info
              </a>
            </li>
            <li>
              <a
                href="#our-team"
                onClick={(e) => smoothScrollToSection(e, "our-team")}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="#contact-us"
                onClick={(e) => smoothScrollToSection(e, "contact-us")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h2 className="font-bold text-lg mb-4">Resources</h2>
          <ul>
            <li>
              <a
                href="https://bitsblockchain.notion.site/Resources-for-blockchain-enthusiasts-d69a20cf5402406cb709dfabe4150c87"
                target="_blank"
              >
                Learning Resources
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/EjGBBpK0cAhBrI7jvPTxWh"
                target="_blank"
              >
                Discord Link
              </a>
            </li>
            <li>
              <a href="https://discord.gg/AXscq35N" target="_blank">
                Unidao Discord
              </a>
            </li>
            <li>
              <a href="https://ethglobal.com/" target="_blank">
                Hackathons
              </a>
            </li>
            <li>
              <a href="https://immunefi.com/boost/" target="_blank">
                Bug Bounties
              </a>
            </li>
            <li>
              <a href="https://web3.career/" target="_blank">
                Web3 Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="text-white">
          <h2 className="font-bold text-lg mb-4">Feedback</h2>
          <textarea
            className="w-full h-24 bg-gray-700 rounded-md p-2 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Type your message here..."
          ></textarea>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
            Send
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

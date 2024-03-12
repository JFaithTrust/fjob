import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-darkindigo py-8">
      <div className="container flex flex-col">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 justify-between items-center">
          <span className="text-white text-6xl font-roboto font-bold">
            <span className="text-darkblue">UZ</span>WORKS
          </span>
          <div className="flex flex-row gap-x-4">
            <div className="p-2 bg-white rounded-full">
              <FaFacebook />
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaWhatsapp />
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaLinkedin />
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaInstagram />
            </div>
            <div className="p-2 bg-white rounded-full">
              <FaTelegram />
            </div>
          </div>
        </div>
        <div className="py-12 grid lg:grid-cols-5 sm:grid-cols-3 grid-cols-2 justify-items-stretch gap-4 content-center w-full text-white">
          <div className="flex flex-col font-roboto justify-self-start">
            <span className="font-semibold py-4">OUR PRODUCTS</span>
            <div className="flex flex-col gap-y-1">
              <span>THE SUPPORT SUIT</span>
              <span>THE SALE SUIT</span>
              <span>SUPPORT</span>
              <span>GUIDE</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-center">
            <span className="font-semibold py-4">TOP FEATURES</span>
            <div className="flex flex-col gap-y-1">
              <span>TICKING SYSTEM</span>
              <span>KNOWLEDGE BASE</span>
              <span>COMMUNITY BASE</span>
              <span>GUIDE</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-center">
            <span className="font-semibold py-4">RESOURCES</span>
            <div className="flex flex-col gap-y-1">
              <span>PRODUCT SUPPORT</span>
              <span>REQUEST DEMO</span>
              <span>LIBRARY</span>
              <span>PEOPLE POWER BLOG</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-center">
            <span className="font-semibold py-4">COMPANY</span>
            <div className="flex flex-col gap-y-1">
              <span>ABOUT US</span>
              <span>PRESS</span>
              <span>INVESTORS</span>
              <span>EVENTS</span>
            </div>
          </div>
          <div className="flex flex-col font-roboto lg:justify-self-end">
            <span className="font-semibold py-4"> OUR FAVOURATE THINGS</span>
            <div className="flex flex-col gap-y-1">
              <span>FOR ENTERPRISE</span>
              <span>FOR STARTUP</span>
              <span>FOR BENCHMARK</span>
              <span>FOR SMALL BUSINESS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

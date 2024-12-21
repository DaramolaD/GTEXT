import logo from "../../assets/GtextHoldingsLogo.png";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary-100 w-full py-10 md:py-20">
      <div className="container px-5 md:px-20 mx-auto flex flex-col gap-10">
        {/* Top Section with Logo and Social Icons */}
        <div className="flex justify-between md:items-center flex-col md:flex-row w-full gap-y-6">
          <img
            src={logo}
            alt="logo"
            width={93}
            height={44}
            className="m-0 cursor-pointer"
          />
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Contact Section */}
          <div className="w-fit flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-primary-950">Contact</h3>
            <div className="flex flex-col gap-2">
              <p className="text-sm">+1 305 407 0276</p>
              <p className="text-sm">invest@cardonecapital.com</p>
              <p className="text-sm">
                18851 NE 29th Ave, Suite 1000 Aventura, FL 33180
              </p>
            </div>
            <ul className="flex w-fit justify-between md:items-center gap-1">
              {socialMedia.map(({ id, link, icon: Icon }) => (
                <a href={link} key={id}>
                  <div className="rounded-full text-black text-xl hover:bg-black-100 border-transparent w-8 h-8 p-1 hover:border-black border-[1.5px] flex items-center justify-center transition-colors">
                    <Icon />
                  </div>
                </a>
              ))}
            </ul>
          </div>

          {/* Legal Links Section */}
          <div className="w-fit flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary-950">Legal</h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map(({ id, link, title }) => (
                <Link
                  to={link}
                  key={id}
                  className="text-sm hover:underline transition-colors text-nowrap"
                >
                  {title}
                </Link>
              ))}
            </ul>
          </div>

          {/* Disclaimer Section */}
          <div className="max-w-[600px] w-full flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-primary-950">
              Important Information
            </h3>
            <p className="text-sm">
              Investing involves risk, including loss of principal. Past
              performance does not guarantee or indicate future results. Any
              historical returns, expected returns, or probability projections
              may not reflect actual future performance. While the data we use
              from third parties is believed to be reliable, we cannot ensure
              the accuracy or completeness of data provided by investors or
              other third parties. Neither Cardone Capital nor any of its
              affiliates provide tax advice and do not represent in any manner
              that the outcomes described herein will result in any particular
              tax consequence. Offers to sell, or solicitations of offers to
              buy, any security can only be made through official offering
              documents that contain important information about investment
              objectives, risks, fees, and expenses. Bitcoin is highly
              speculative and its actual performance may not match investor
              expectations. Prospective investors should consult with a tax,
              legal, and/or financial adviser before making any investment
              decision.
            </p>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex justify-between max-md:flex-col-reverse gap-5">
          <span className="text-xs md:text-sm text-primary-950">
            © 2024. All rights reserved.
          </span>
          <div className="flex gap-3">
            {navItems.map(({ id, link, title }) => (
              <Link
                to={link}
                key={id}
                className="text-sm hover:underline transition-colors"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const socialMedia = [
  {
    id: 1,
    link: "",
    icon: FaLinkedinIn,
  },
  {
    id: 2,
    link: "",
    icon: TiSocialFacebook,
  },
  {
    id: 3,
    link: "",
    icon: FaTwitter,
  },
  {
    id: 4,
    link: "",
    icon: FaInstagram,
  },
];

const legalLinks = [
  {
    id: 1,
    link: "/faqs",
    title: "FAQs",
  },
  {
    id: 2,
    link: "/privacy-policy",
    title: "Privacy Policy",
  },
  {
    id: 3,
    link: "/terms-and-conditions",
    title: "Terms & Conditions",
  },
  {
    id: 4,
    link: "/disclosures",
    title: "Disclosures",
  },
];

const navItems = [
  {
    id: 1,
    link: "/terms-of-service",
    title: "Terms",
  },
  {
    id: 2,
    link: "/privacy-policy",
    title: "Privacy",
  },
];

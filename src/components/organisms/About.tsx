import { motion } from "framer-motion";
import Bg from "../../assets/img33.jpeg";
import logo from "../../assets/GtextHoldingsLogo.png";
import gLandlogo from "../../assets/GTLandlogo.png";
import gtexthomeLogo from "../../assets/gtexthomeLogo.png";
import gVestLogo from "../../assets/gVestLogo.png";
import gtextsuitlogo from "../../assets/gtextsuitlogo.png";
import GandAlogo from "../../assets/GandAlogo.png";
import SAF from "../../assets/stephenAkintayoFoundationlogo.png";
import Marquee from "../molecules/Marquee";
import Button from "../atoms/Button";

const About = () => {
  const stats = [
    {
      id: "1",
      number: "$500M+",
      text: "Invested Capital",
      color: "bg-orange-100",
    },
    {
      id: "2",
      number: "10K+",
      text: "Active Investors",
      color: "bg-primary-100",
    },
    {
      id: "3",
      number: "15%",
      text: "Average ROI Across Projects",
      color: "bg-purple-100",
    },
    {
      id: "4",
      number: "25+",
      text: "Properties in 25+ Cities",
      color: "bg-blue-100",
    },
  ];
  const coreValue = [
    {
      id: "1",
      title: "Transparency",
      text: "Full disclosure at every step.",
      color: "bg-orange-100",
    },
    {
      id: "2",
      title: "Trust:",
      text: "Building long-term relationships with our investors.",
      color: "bg-primary-100",
    },
    {
      id: "3",
      title: "Innovation:",
      text: "Leveraging technology to maximize efficiency and returns.",
      color: "bg-purple-100",
    },
    {
      id: "4",
      title: "Growth:",
      text: "Focused on helping clients achieve financial milestones.",
      color: "bg-blue-100",
    },
  ];
  const logoImages = [
    { src: logo, alt: "logo" },
    { src: gLandlogo, alt: "G Land Logo" },
    { src: gtexthomeLogo, alt: "G Text Home Logo" },
    { src: gVestLogo, alt: "G Vest Logo" },
    { src: gtextsuitlogo, alt: "G Text Suit Logo" },
    { src: GandAlogo, alt: "G and A Logo" },
    { src: SAF, alt: "SAF Logo" },
  ];
  return (
    <section className="relative py-20">
      <div className="container flex flex-col items-center gap-4 md:gap-20 md:items-center px-5 md:px-20 text-black z-10">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <span className="text-base md:text-xl italic font-normal text-gray-700">
                Our Story: Building Wealth, One Investment at a Time
              </span>
              <div className="flex flex-col gap-3">
                <h1 className="text-xl md:text-3xl text-black">Who We Are:</h1>
                <p className="text-base md:text-lg text-gray-800">
                  GText is a global leader in real estate investment, dedicated
                  to creating pathways to financial independence for individuals
                  and businesses. Our mission is simple: to make real estate
                  investments accessible, secure, and highly rewarding for
                  everyone.
                </p>
              </div>
            </div>
            <Button
              text="Get Started Today"
              className="w-fit text-xl font-medium"
              // onClick={handleOnclick}
            />
          </div>
          <motion.div
            className=" inset-0 -z-10"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={Bg}
              alt="homeBackground"
              className="w-full h-full object-cover object-center rounded-xl"
            />
          </motion.div>
        </div>
        <div className="w-full grid grid-cols-1 items-center md:grid-cols-2 gap-10">
          <div className="grid grid-cols-1 items-stretch sm:grid-cols-2 gap-6">
            {stats.map(({ id, text, number, color }) => (
              <div
                key={id}
                className={`flex flex-col gap-1 p-4 rounded-lg border border-gray-200 hover:shadow-md ${
                  color && color
                }`}
              >
                <p className="text-xl md:text-4xl font-normal">{number}</p>
                <p className="text-base md:text-lg font-normal">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col p-4 gap-2 bg-gray-100 rounded-md text-black">
            <p className="text-2xl md:text-2xl font-normal">Core Values:</p>
            <div className="grid grid-cols-1 items-stretch md:grid-cols-1 max-sm:divide-y divide-gray-500">
              {coreValue.map(({ id, text, title }) => (
                <div key={id} className="flex items-center">
                  <span>•</span>
                  <div className={`flex flex-col gap-[2px] p-2 list-disc`}>
                    <p className="text-lg md:text-xl font-normal">{title}</p>
                    <p className="text-[15px] md:text-lg">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Marquee images={logoImages} speed={10} />
      </div>
    </section>
  );
};

export default About;

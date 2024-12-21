import { motion } from "framer-motion";
import Button from "../atoms/Button";
// import homeBg from "../../assets/bg.png";
// import homeBg2 from "../../assets/bg_.png";
import homeBg3 from "../../assets/bg__.png";

const Hero = () => {
  return (
    <motion.section
      className="relative flex items-center py-60 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="container flex flex-col gap-8 md:gap-4 md:items-center px-5 md:px-20 text-white z-10">
        {/* Title and Subtitle */}
        <motion.div
          className="flex flex-col sm:items-center sm:text-center gap-2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-3xl md:text-6xl font-semibold text-balance">
            Build Your Future with <span className="">GText</span> Real Estate Investments
          </h1>
          <p className="text-base md:text-xl lg:text-2xl font-normal text-balance">
            Experience reliable, profitable, and transparent real estate
            opportunities tailored to secure your financial goals.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col md:flex-row sm:items-center gap-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <Button
            text="Get Started Today"
            className="w-fit text-xl font-medium"
            // onClick={handleOnclick}
          />
          <Button text="Learn More" variant="tertiary" className="w-fit" />
        </motion.div>
      </div>

      {/* Background Image */}
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <img
          src={homeBg3}
          alt="homeBackground"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </motion.section>
  );
};

export default Hero;

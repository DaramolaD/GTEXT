import { motion } from "framer-motion";

type Image = {
  src: string;
  alt: string;
};

type MarqueeProps = {
  images: Image[];
  speed?: number;
};

const Marquee: React.FC<MarqueeProps> = ({ images, speed = 15 }) => {
  return (
    <div className="w-full overflow-hidden flex items-center">
      <motion.div
        className="flex items-center gap-10"
        animate={{
          x: ["0%", "-100%"], // Moves from start to end
        }}
        transition={{
          repeat: Infinity, // Loop forever
          duration: speed, // Adjust speed via props
          ease: "linear", // Smooth linear scrolling
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            width={93}
            height={44}
            className="m-0 h-auto !w-20"
          />
        ))}
        {/* Repeat images for seamless loop */}
        {images.map((image, index) => (
          <img
            key={`repeat-${index}`}
            src={image.src}
            alt={image.alt}
            width={93}
            height={44}
            className="m-0 h-auto !w-20"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;

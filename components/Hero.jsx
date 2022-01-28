import Image from "next/image";
import HeroImg from "../public/images/hero.jpg";
import CTA from "./CTA";

const Hero = () => {
  return (
    <div className=" relative md:h-screen overflow-clip ">
      <div className="bg-black/70 absolute inset-0 z-10 h-full"></div>
      <Image
        src={HeroImg}
        layout="responsive"
        alt="hero"
        objectFit="cover"
        className="z-0 max-h-full"
      />
      <CTA />
    </div>
  );
};

export default Hero;

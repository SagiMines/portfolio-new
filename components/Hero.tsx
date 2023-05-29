import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';
import Link from 'next/link';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      `Hi, I'm ${pageInfo?.name}`,
      'Full Stack & Front End Developer',
      'Love To Code',
    ],

    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=" pb-[8rem] lg:pb-[11rem] min-safe-h-screen space-y-8 text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        quality="100"
        width="300"
        height="300"
        alt="My logo icon"
      />
      <div className="relative z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] leading-6">
          {pageInfo?.role}
        </h2>
        <h1 className="text-really-small text-2xl lg:text-6xl sm:text-5xl font-semibold scroll-px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5 ">
          <a href="assets/cv-sagimines.pdf" download>
            <button className="heroButton">Download CV</button>
          </a>
          <Link href="#projects">
            <button className="heroButton">My Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

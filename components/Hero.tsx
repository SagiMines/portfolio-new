import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import Link from 'next/link';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

const Hero = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      'Love To Code',
      'Full Stack & Front End Developer',
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        quality="100"
        width="300"
        height="300"
        alt="My logo icon"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] mx-3 leading-6">
          {pageInfo?.role}
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold scroll-px-10 mx-3 leading-[3rem]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
          <Link href="#contact">
            <button className="heroButton">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Skill } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const Skill = ({ skill, directionLeft }: Props) => {
  const MotionImage = motion(Image);
  return (
    <div className="group relative flex cursor-pointer">
      <MotionImage
        initial={{
          x: directionLeft ? -50 : 50,
          opacity: 0,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        width={0}
        height={0}
        sizes="100vw"
        src={urlFor(skill?.image).url()}
        alt="Skill logo"
        className="p-1 rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;

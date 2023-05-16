import { motion } from 'framer-motion';
import myPhoto from '@/assets/my-photo.jpeg';
import Image from 'next/image';
import { PageInfo } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const MotionImage = motion(Image);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <MotionImage
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        width={0}
        height={0}
        sizes="100vw"
        alt="My photo"
        className="-mb-20 flex-shrink-0  md:mb-0 hidden sm:block sm:w-40 h-auto rounded-full object-cover md:rounded-lg md:w-64 xl:w-[500px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-3xl md:text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <div className="flex flex-col md:gap-5">
          {pageInfo?.backgroundInformation
            ?.split('$')
            .map((paragraph, index) => (
              <p key={index} className="md:text-base text-sm">
                {paragraph.split('@').map(sentence => `${sentence}\n`)}
              </p>
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;

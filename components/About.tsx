import { motion } from 'framer-motion';
import myPhoto from '@/assets/my-photo.jpeg';
import Image from 'next/image';

const About = () => {
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
        src={myPhoto}
        width="700"
        alt="My photo"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-base">
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Praesent facilisis mi felis, laoreet
          ullamcorper mauris fringilla sed. Suspendisse erat nulla, placerat non
          nisi vitae, tincidunt varius felis. Maecenas et volutpat nisi. Donec
          porttitor purus fermentum sapien rutrum maximus. Donec eleifend
          dignissim risus ac ultricies. In finibus mollis magna. Proin volutpat
          gravida urna, ac scelerisque libero accumsan eu. Morbi faucibus,
          tortor eu pharetra fringilla, tortor ante rutrum orci, in iaculis leo
          erat sed ligula. Nunc efficitur sapien leo, sed eleifend est egestas
          sit amet. Praesent fringilla venenatis odio at semper. Vestibulum vel
          tellus mattis, viverra dui ac, maximus velit. Sed aliquet, justo sit
          amet lobortis laoreet, libero velit dapibus ante, suscipit ultrices
          nulla odio a libero. Aenean suscipit nunc velit, vel tincidunt ipsum
          cursus at. Quisque ultricies urna odio, a porttitor felis aliquam sed.
        </p>
      </div>
    </motion.div>
  );
};

export default About;

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [1, 2, 3, 4, 5];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              viewport={{
                once: true,
              }}
              src="https://download.logo.wine/logo/WeWork/WeWork-Logo.wine.png"
              alt=""
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{' '}
                UPS clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                id ex eget augue ultrices accumsan. Nam fringilla nec libero in
                venenatis. Morbi eu tincidunt mauris. Sed nec condimentum erat.
                Mauris pretium scelerisque mauris sed imperdiet. Morbi at sem
                cursus, mollis diam eget, viverra leo. Fusce euismod leo tortor,
                accumsan vehicula orci dapibus eget. Donec eget tincidunt felis.
                Nam gravida lorem et arcu porttitor vestibulum. Duis
                sollicitudin ante non nibh malesuada euismod. Morbi molestie
                feugiat volutpat. Pellentesque habitant morbi tristique senectus
                et netus et malesuada fames ac turpis egestas. Vivamus non
                mollis purus, vitae pellentesque orci.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className=" w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <MotionImage
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
              width={0}
              height={0}
              sizes="100vw"
              src={urlFor(project?.image).url()}
              alt="Project image"
              className="w-auto lg:h-56 h-36"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="md:text-4xl text-3xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {index + 1} of {projects.length}:
                </span>{' '}
                {project?.title}
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map(technology => (
                  <img
                    className="h-10 w-10"
                    key={technology?._id}
                    src={urlFor(technology?.image).url()}
                    alt="Technology image"
                    title={technology?.title}
                  />
                ))}
              </div>

              <p className="md:text-lg text-sm text-center md:text-left">
                {project?.summary}
              </p>

              <div className="flex justify-evenly flex-row gap-8">
                {project && project.linkToServer && (
                  <Link href={project?.linkToServer}>
                    <button type="submit" className="projectButtons">
                      Server GitHub
                    </button>
                  </Link>
                )}
                {project && project.linkToClient && (
                  <Link href={project?.linkToClient}>
                    <button type="submit" className="projectButtons">
                      {project.linkToServer ? 'Client' : 'App'} GitHub
                    </button>
                  </Link>
                )}
                {project && project.linkToDemo && (
                  <Link href={project?.linkToDemo}>
                    <button type="submit" className="projectButtons">
                      Live Demo
                    </button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;

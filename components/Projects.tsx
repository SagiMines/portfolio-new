import { urlFor } from '@/sanity';
import { Project } from '@/typings';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useState } from 'react';
import ProjectModal from './ProjectModal';

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const currentProject = useRef<Project>();
  const MotionImage = motion(Image);

  function openModal(project: Project) {
    currentProject.current = project;
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
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
      className="text-center min-safe-h-screen max-w-max px-10 mx-auto items-center z-0 relative"
    >
      <h3 className="mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="mt-10 w-full flex">
        <Swiper navigation={true} modules={[Navigation]} className="MySwiper">
          {projects?.map((project, index) => (
            <SwiperSlide
              key={index}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center px-20  h-full z-20"
            >
              <MotionImage
                initial={{
                  y: -50,
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
                className="w-auto lg:h-56 sm:h-36 h-24 mx-auto"
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl mx-auto">
                <h4 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]/50">
                    Project {index + 1} of {projects.length}:
                  </span>{' '}
                  {project?.title}
                </h4>

                <div className="sm:flex sm:flex-wrap hidden  items-center space-x-2 justify-center sm:gap-0 gap-1">
                  {project?.technologies.map(technology => (
                    <img
                      className="w-6 h-6 sm:h-10 sm:w-10"
                      key={technology?._id}
                      src={urlFor(technology?.image).url()}
                      alt="Technology image"
                      title={technology?.title}
                    />
                  ))}
                </div>

                <p className="md:text-lg block sm:hidden text-sm text-center md:text-left">
                  {project?.summary.slice(0, 50)}...
                  <span
                    className="underline"
                    onClick={() => openModal(project)}
                  >
                    Read More
                  </span>
                </p>

                <p className="md:text-lg sm:block hidden text-sm text-center">
                  {project?.summary}
                </p>

                <div className="flex flex-col items-center gap-2 md:justify-evenly md:flex-row md:gap-8">
                  {project && project.linkToServer && (
                    <Link href={project?.linkToServer}>
                      <button type="submit" className="projectButtons">
                        Server Code
                      </button>
                    </Link>
                  )}
                  {project && project.linkToClient && (
                    <Link href={project?.linkToClient}>
                      <button type="submit" className="projectButtons">
                        {project.linkToServer ? 'Client' : 'App'} Code
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12 " />
      <ProjectModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        currentProject={currentProject.current}
      />
    </motion.div>
  );
};

export default Projects;

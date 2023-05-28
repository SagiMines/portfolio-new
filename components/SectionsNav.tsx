import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { HiQuestionMarkCircle } from 'react-icons/hi';
import { GiStrong } from 'react-icons/gi';
import { FaProjectDiagram } from 'react-icons/fa';
import { BiEnvelope } from 'react-icons/bi';
import { Dispatch, SetStateAction, useState } from 'react';

const SectionsNav = () => {
  const [currentNav, setCurrentNav] = useState<string>();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement | SVGSVGElement>
  ) => {
    setCurrentNav(e.currentTarget.id);
  };

  return (
    <div className="sticky flex rounded-2xl  p-2 bottom-5 mx-auto bg-[rgba(128,128,128,0.4)] z-50">
      <Link
        href="#hero"
        id="iconNav1"
        onClick={handleClick}
        className={
          currentNav === 'iconNav1'
            ? 'sectionsNavIcons sectionsNavIconActive'
            : 'sectionsNavIcons'
        }
      >
        <AiOutlineHome title="home" />
      </Link>
      <Link
        href="#about"
        id="iconNav2"
        onClick={handleClick}
        className={
          currentNav === 'iconNav2'
            ? 'sectionsNavIcons sectionsNavIconActive'
            : 'sectionsNavIcons'
        }
      >
        <HiQuestionMarkCircle title="about" />
      </Link>
      <Link
        href="#skills"
        id="iconNav3"
        onClick={handleClick}
        className={
          currentNav === 'iconNav3'
            ? 'sectionsNavIcons sectionsNavIconActive'
            : 'sectionsNavIcons'
        }
      >
        <GiStrong title="skills" />
      </Link>
      <Link
        href="#projects"
        id="iconNav4"
        onClick={handleClick}
        className={
          currentNav === 'iconNav4'
            ? 'sectionsNavIcons sectionsNavIconActive'
            : 'sectionsNavIcons'
        }
      >
        <FaProjectDiagram title="projects" />
      </Link>
      <Link
        href="#contact"
        id="iconNav5"
        onClick={handleClick}
        className={
          currentNav === 'iconNav5'
            ? 'sectionsNavIcons sectionsNavIconActive'
            : 'sectionsNavIcons'
        }
      >
        <BiEnvelope title="contact" />
      </Link>
    </div>
  );
};

export default SectionsNav;

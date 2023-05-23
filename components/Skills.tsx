import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';

type Props = {
  skills: SkillType[];
};

const Skills = ({ skills }: Props) => {
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
      className="text-center min-safe-h-screen max-w-7xl px-10 mx-auto items-center"
    >
      <div className="mt-24 flex flex-col text-center gap-3">
        <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl">
          {' '}
          Skills
        </h3>
        <h3 className="px-2 uppercase tracking-[3px] text-gray-500 text-sm">
          Hover over a skill for the current proficiency
        </h3>
      </div>
      <div className="mt-10 w-fit grid md:grid-cols-5 grid-cols-4 gap-5 mx-auto">
        {skills?.slice(0, skills.length / 2).map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map(skill => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
};

export default Skills;

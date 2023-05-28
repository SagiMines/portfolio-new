import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import { PageInfo, Project, Skill, Social } from '@/typings';
import { GetServerSideProps } from 'next';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';

import Footer from '@/components/Footer';
import SectionsNav from '@/components/SectionsNav';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  return (
    <div
      className="flex flex-col bg-[rgb(36,36,36)] text-white h-[100dvh] overflow-y-scroll
     overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Sagi Mines</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="scroll-my-[96px]">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills">
        <Skills skills={skills} />
      </section>

      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Footer />
      <SectionsNav />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocials();

  return {
    props: {
      pageInfo,
      skills,
      projects,
      socials,
    },
  };
};

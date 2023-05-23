import Head from 'next/head';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import Image from 'next/image';
import { PageInfo, Project, Skill, Social } from '@/typings';
import { GetServerSideProps } from 'next';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchProjects } from '@/utils/fetchProjects';
import { fetchSocials } from '@/utils/fetchSocials';
import { urlFor } from '@/sanity';
import Footer from '@/components/Footer';

type Props = {
  pageInfo: PageInfo;
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

export default function Home({ pageInfo, skills, projects, socials }: Props) {
  return (
    <div
      className="flex flex-col bg-[rgb(36,36,36)] text-white h-[100dvh] snap-y snap-mandatory overflow-y-scroll
     overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"
    >
      <Head>
        <title>Sagi Mines</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=yes"
        />
      </Head>

      <Header socials={socials} />

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-start">
        <About pageInfo={pageInfo} />
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Footer />

      {/* <Link href="#hero">
        <footer className="absolute bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={urlFor(pageInfo.heroImage).url()}
              width={0}
              height={0}
              sizes="100vw"
              alt="My icon"
            />
          </div>
        </footer>
      </Link> */}
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

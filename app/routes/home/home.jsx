import aiMlbTexturePlaceholder from '~/assets/ai-mlb-placeholder.png';
import aiMlbTexture from '~/assets/ai-mlb.png';
import dataDeletionTexturePlaceholder from '~/assets/data-deletion-placeholder.png';
import dataDeletionTexture from '~/assets/data-deletion.png';
import gamestackTexture2Large from '~/assets/gamestack-list-large.png';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.png';
import gamestackTexture2 from '~/assets/gamestack-list.png';
import gamestackTextureLarge from '~/assets/gamestack-login-large.png';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.png';
import gamestackTexture from '~/assets/gamestack-login.png';
import sliceTextureLarge from '~/assets/slice-app-large.png';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.png';
import sliceTexture from '~/assets/slice-app.png';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.png';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.png';
import sprTexture from '~/assets/spr-lesson-builder-dark.png';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Experience } from './experience';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Backend AI Engineer',
    description: `Portfolio of ${config.name} — a backend AI engineer building Python data pipelines, AI agents, and machine learning systems with a focus on reliability, evaluation, and data quality.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const experience = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      projectTwo,
      projectThree,
      projectFour,
      projectFive,
      experience,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="TaskBuddy Agent — Multi-Step AI Academic Assistant"
        description="Built a multi-step AI agent that integrates the Canvas, Google Drive, Google Calendar, and Gmail APIs to retrieve coursework data and execute automated academic workflows."
        buttonText="View on GitHub"
        buttonLink="https://github.com/Abdifatah2023/TaskBuddy"
        model={{
          type: 'laptop',
          alt: 'TaskBuddy AI agent interface',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Semantic Book Recommender — Vector Search & NLP"
        description="Cleaned and processed a 7,000-book dataset and built an embedding-based recommendation model using semantic similarity, enhanced with zero-shot classification and sentiment analysis and served through a Gradio interface."
        buttonText="View on GitHub"
        buttonLink="https://github.com/Abdifatah2023/BookRecommender"
        model={{
          type: 'phone',
          alt: 'Semantic book recommender application',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Demographic Bias Detector — NLP & Language Modeling"
        description="Evaluated BERT and RoBERTa models across 28,000+ text records to analyze demographic bias and reliability, helping teams detect harmful patterns early and build more equitable AI systems."
        buttonText="View on GitHub"
        buttonLink="https://github.com/Abdifatah2023/DemographicBiasDetector"
        model={{
          type: 'laptop',
          alt: 'Demographic Bias Detector NLP pipeline interface',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Data Deletion Audit Agent — PII Compliance Pipeline"
        description="Built a Python AI audit pipeline that validated 518 data-deletion requests, resolved historical identities, and detected residual PII across distributed systems."
        model={{
          type: 'laptop',
          alt: 'Data Deletion Audit Agent dashboard showing 518 audited deletion cases by status',
          textures: [
            {
              srcSet: `${dataDeletionTexture} 1280w`,
              placeholder: dataDeletionTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="AI MLB Analytics Agent — Predictive Sports Analytics"
        description="Built an AI analytics workflow that automates feature engineering, predictive modeling, and analysis to generate data-driven insights from MLB data."
        model={{
          type: 'laptop',
          alt: 'Google Cloud AI Agent Home Run badge for the MLB analytics agent',
          textures: [
            {
              srcSet: `${aiMlbTexture} 1280w`,
              placeholder: aiMlbTexturePlaceholder,
            },
          ],
        }}
      />
      <Experience
        sectionRef={experience}
        visible={visibleSections.includes(experience.current)}
        id="experience"
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

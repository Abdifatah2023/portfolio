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
    title: 'AI Engineer + Developer',
    description: `Portfolio of ${config.name} — an AI/ML engineer building intelligent systems, RAG pipelines, and full-stack applications with a focus on NLP, agentic AI, and scalable software.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

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
        title="TaskBuddy Agent — Multi-Agent AI Workflow System"
        description="Built a multi-agent AI system using LangGraph and FastAPI to automate academic workflows including content extraction, organization, and intelligent document generation."
        buttonText="View on GitHub"
        buttonLink="https://github.com/Abdifatah2023/TaskBuddy"
        model={{
          type: 'laptop',
          alt: 'TaskBuddy multi-agent AI system interface',
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
        description="Built a semantic book recommendation system using vector search, zero-shot classification, sentiment analysis, and LLM-powered workflows to deliver personalized recommendations via a Gradio interface."
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
        description="Developed NLP pipelines and language model workflows to identify demographic bias in online text datasets, contributing to safer and more equitable AI systems."
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
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};

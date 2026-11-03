import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useState } from 'react';
import styles from './experience.module.css';

const jobs = [
  {
    role: 'Backend AI Engineer',
    company: 'FlyRank',
    location: 'Remote',
    dates: 'Jul 2026 – Present',
    highlights: [
      'Develop Python backend and data workflows that process, validate, and integrate structured data across production applications.',
      'Built automated evaluation and testing workflows, plus validation, monitoring, retries, and failure handling, to improve reliability across integrated production systems.',
    ],
  },
  {
    role: 'Forward Deployed Engineer',
    company: 'CompuMatrice Inc.',
    location: 'Remote',
    dates: 'Jun 2026 – Aug 2026',
    highlights: [
      'Built Python ELT workflows and REST API integrations connecting APIs, databases, retrieval systems, and enterprise data sources.',
      'Partnered with customers and engineers to translate business requirements into technical solutions and troubleshoot production issues.',
    ],
  },
  {
    role: 'Machine Learning Fellow',
    company: 'Meta',
    location: 'Remote',
    dates: 'Aug 2025 – Dec 2025',
    highlights: [
      'Designed reproducible ML experiments for model evaluation, benchmarking, and identifying optimization opportunities.',
      'Built Python and Jupyter workflows for statistical analysis of large datasets and communicated findings to technical and non-technical stakeholders.',
    ],
  },
  {
    role: 'IT Support Assistant',
    company: 'Texas Christian University',
    location: 'Fort Worth, TX',
    dates: 'Dec 2023 – Present',
    highlights: [
      'Provide frontline IT support for 500+ users across Windows, macOS, Microsoft 365, network connectivity, and account access issues.',
      'Maintain a 4.77/5 customer satisfaction rating in a fast-paced, service-focused environment.',
    ],
  },
];

const education = {
  school: 'Texas Christian University',
  degree: 'B.S., Computer Information Technology',
  location: 'Fort Worth, TX',
  dates: 'Expected May 2027',
  coursework:
    'Software Engineering, Data Structures, Database Systems, Cloud Computing, Machine Learning',
};

const Entry = ({ title, subtitle, dates, children }) => (
  <li className={styles.entry}>
    <div className={styles.entryHeader}>
      <Heading level={5} as="h3" className={styles.entryTitle}>
        {title}
      </Heading>
      <Text size="s" secondary className={styles.dates}>
        {dates}
      </Text>
    </div>
    <Text size="m" secondary as="p" className={styles.subtitle}>
      {subtitle}
    </Text>
    {children}
  </li>
);

export const Experience = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.experience}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.tag} aria-hidden>
              <Divider
                notchWidth="64px"
                notchHeight="8px"
                collapsed={!visible}
                collapseDelay={600}
              />
              <div className={styles.tagText} data-visible={visible}>
                Experience
              </div>
            </div>
            <Heading
              level={3}
              as="h2"
              className={styles.title}
              data-visible={visible}
              id={titleId}
            >
              Where I&apos;ve worked
            </Heading>
            <ul className={styles.list} data-visible={visible}>
              {jobs.map(job => (
                <Entry
                  key={`${job.company}-${job.role}`}
                  title={job.role}
                  subtitle={`${job.company} · ${job.location}`}
                  dates={job.dates}
                >
                  <ul className={styles.highlights}>
                    {job.highlights.map(highlight => (
                      <Text as="li" size="s" key={highlight}>
                        {highlight}
                      </Text>
                    ))}
                  </ul>
                </Entry>
              ))}
            </ul>
            <Heading
              level={4}
              as="h2"
              className={styles.subheading}
              data-visible={visible}
            >
              Education
            </Heading>
            <ul className={styles.list} data-visible={visible}>
              <Entry
                title={education.school}
                subtitle={`${education.degree} · ${education.location}`}
                dates={education.dates}
              >
                <Text as="p" size="s">
                  <strong>Relevant coursework:</strong> {education.coursework}
                </Text>
              </Entry>
            </ul>
          </div>
        )}
      </Transition>
    </Section>
  );
};

import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description:
      'The tools, frameworks, and stack I use to build AI systems and full-stack applications.',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A breakdown of the tools, languages, frameworks, and platforms I use to build AI systems, machine learning pipelines, and full-stack applications."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>AI &amp; Machine Learning</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://www.langchain.com/">LangChain</Link> and <Link href="https://www.langchain.com/langgraph">LangGraph</Link> are
                    my go-to frameworks for building agentic workflows and multi-agent AI
                    systems. LangGraph is especially powerful for orchestrating stateful
                    agent pipelines.
                  </ListItem>
                  <ListItem>
                    <Link href="https://platform.openai.com/">OpenAI API</Link> powers
                    most of my LLM and embedding workflows. I use the embeddings API
                    extensively for semantic search and RAG pipelines paired with <Link href="https://www.pinecone.io/">Pinecone</Link> as
                    my vector database of choice.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">TensorFlow</Link> and <Link href="https://scikit-learn.org/">Scikit-learn</Link> for
                    model training, evaluation, and classical ML workflows. I also use
                    Hugging Face <Link href="https://huggingface.co/docs/transformers">Transformers</Link> for
                    NLP tasks like zero-shot classification and sentiment analysis, and
                    for evaluating transformer models like BERT and RoBERTa for bias,
                    fairness, and reliability.
                  </ListItem>
                  <ListItem>
                    <Link href="https://pandas.pydata.org/">Pandas</Link> and <Link href="https://numpy.org/">NumPy</Link> for
                    data manipulation, with <Link href="https://matplotlib.org/">Matplotlib</Link> and <Link href="https://seaborn.pydata.org/">Seaborn</Link> for
                    visualization and exploratory data analysis.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://cursor.sh/">Cursor</Link> is my primary editor
                    for AI-assisted development. I also reach for <Link href="https://code.visualstudio.com/">VS Code</Link> and <Link href="https://www.jetbrains.com/pycharm/">PyCharm</Link> depending
                    on the project.
                  </ListItem>
                  <ListItem>
                    <Link href="https://fastapi.tiangolo.com/">FastAPI</Link> is my
                    backend framework of choice for building AI-powered APIs. It pairs
                    naturally with async LangGraph agents and Python ML stacks.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nextjs.org/">Next.js</Link> and <Link href="https://react.dev/">React</Link> for
                    full-stack web applications. Most of my deployed AI projects use this
                    stack with <Link href="https://vercel.com/">Vercel</Link> for hosting.
                  </ListItem>
                  <ListItem>
                    <Link href="https://colab.research.google.com/">Google Colab</Link> and <Link href="https://jupyter.org/">Jupyter Notebook</Link> for
                    exploratory data analysis, model experimentation, and ML prototyping.
                  </ListItem>
                  <ListItem>
                    <Link href="https://supabase.com/">Supabase</Link> and <Link href="https://firebase.google.com/">Firebase</Link> for
                    databases and auth in full-stack projects, alongside <Link href="https://clerk.com/">Clerk</Link> for
                    authentication in Next.js applications.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Data, Cloud &amp; Infrastructure</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    Python and SQL for ETL/ELT pipelines and data integration, with
                    validation, data quality checks, and PII detection built into every
                    stage. REST APIs and Google Workspace APIs (Gmail, Calendar, Drive)
                    connect those pipelines to the systems they serve.
                  </ListItem>
                  <ListItem>
                    <Link href="https://cloud.google.com/bigquery">BigQuery</Link> and <Link href="https://cloud.google.com/bigquery/docs/bqml-introduction">BigQuery ML</Link> on <Link href="https://cloud.google.com/">Google Cloud Platform</Link> for
                    data warehousing, analytics, and training models directly in SQL,
                    alongside <Link href="https://www.mongodb.com/">MongoDB</Link>, Firebase,
                    and relational databases.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.docker.com/">Docker</Link>, Linux/Unix, and CI/CD
                    pipelines with automated testing to keep builds reproducible and
                    deployments reliable.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.microsoft.com/power-platform/products/power-bi">Power BI</Link>, <Link href="https://www.tableau.com/">Tableau</Link>, and
                    Excel for dashboards, data visualization, and reporting.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>Stack at a Glance</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Languages</TableHeadCell>
                    <TableCell>Python, JavaScript, TypeScript, Java, SQL</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>AI / ML</TableHeadCell>
                    <TableCell>LangGraph, LangChain, OpenAI API, RAG, Embeddings, TensorFlow, Scikit-learn, Transformers (BERT, RoBERTa)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Vector / Data</TableHeadCell>
                    <TableCell>Pinecone, Pandas, NumPy, ETL/ELT, Data Validation, PII Detection</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Frontend</TableHeadCell>
                    <TableCell>React, Next.js, MUI, Gradio</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Backend</TableHeadCell>
                    <TableCell>FastAPI, SpringBoot, Node.js, REST APIs, Google Workspace APIs</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Databases</TableHeadCell>
                    <TableCell>BigQuery, Supabase, Firebase, MongoDB, Relational Databases</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Cloud / Deploy</TableHeadCell>
                    <TableCell>Google Cloud (GCP), BigQuery ML, Docker, CI/CD, Vercel, Cloudflare</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>BI / Visualization</TableHeadCell>
                    <TableCell>Power BI, Tableau, Excel</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Tools</TableHeadCell>
                    <TableCell>Cursor, VS Code, PyCharm, Jupyter, Google Colab, Git, Linux/Unix, Figma</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Certification</TableHeadCell>
                    <TableCell>
                      <Link href="/ML%20Certificate.pdf" target="_blank" rel="noopener noreferrer">
                        eCornell Machine Learning Foundations (August 2025)
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};

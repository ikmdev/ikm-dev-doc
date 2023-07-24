import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/platform">
            Learn More
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
        title={`${siteConfig.title}`}
        description="Bringing Integrated Knowledge Management to Life">
        <HomepageHeader />
        <main>
          <div className={clsx("container", styles.featureBanner)} style={{ padding: "3rem 0" }}>
            <div>
              <p style={{ fontWeight: "bold" }}>Where integration of quality data meets quality healthcare outcomes.</p>
              <p style={{ fontWeight: "bold" }}>“Creating a more integrated future for healthcare.”</p>
              <ul>
                <li>Creating a healthcare Knowledge Management ecosystem that will harmonize existing knowledge standards.</li>
                <li>Improving healthcare data quality that will aid in the downstream accuracy of patient treatments and public health decisions.</li>
                <li>Providing an easy way to browse the wide range of clinical concepts and relationships represented in standardized medical terminologies.</li>
                <li>Developing a collaborative space for individuals to build on the work of others for creative, adaptive solutions.</li>
              </ul>
            </div>
            <hr></hr>
            <div>
              <p style={{ fontWeight: "bold", fontStyle: "italic", textAlign: "center" }}>What is Integrated Knowledge Management?</p>
              <p style={{ fontStyle: "italic", textAlign: "center", width: "60%", margin: "auto" }}>“The discipline of bringing all knowledge resources into a unified paradigm where the resources all share a common underlying representation that integrates version control, configuration management, modularity, concept-oriented representation, and standardized viewing, collaborative editing, and extension development capabilities within a shared knowledge-management environment.” - Komet Founder, Keith E. Campbell, MD, PhD</p>
            </div>
            <hr></hr>
            <div>
              <p style={{ fontWeight: "bold" }}>Our IKM Platform</p>
              <ul>
                <li>Provides a space for healthcare knowledge to be managed in one centralized area</li>
                <li>Allows for knowledge management at the healthcare ecosystem level, rather than at the individual organization level</li>
                <li>Enables collaboration from knowledge experts across the ecosystem </li>
              </ul>
              <p style={{ fontWeight: "bold", fontStyle: "italic", textAlign: "center", width: "60%", margin: "auto" }}>“Built by you, for you” – “Bringing Integrated Knowledge Management to Life”</p>
            </div>
            <hr></hr>
            <div>
              <p style={{ fontWeight: "bold" }}>Our Tool – Komet</p>
              <p>Built to allow for viewing, creation, editing, analysis, and retirement of knowledge housed in the IKM Platform, Komet allows users to interact with disparate healthcare terminologies (SNOMED, RxNorm, LOINC) in a central location.</p>
              <p style={{ fontWeight: "bold", fontStyle: "italic" }}>Learn more and Install Komet</p>
            </div>
          </div>
        </main>
      </Layout>
  );
}

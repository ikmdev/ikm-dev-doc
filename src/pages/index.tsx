import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import kometLogo2 from './../../static/img/komet_logo_2.png';

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
            <div className="row">
              <img src={kometLogo2} style={{ width: "350px"}}/>
              <div className="col">
                <p style={{ fontWeight: "bold" }}>Komet is an open-source healthcare data tool.</p>
                <p>It is a community-driven, standards-based Integrated Development Environment &#40;IDE&#41; for knowledge management.</p>
                <p>Our aim is to integrate disparate medical terminologies into one, centralized location to tailor to a wide spectrum of clinical decision-support functionalities—from documentation and reporting to medication identification.</p>
              </div>
            </div>
          </div>
        </main>
      </Layout>
  );
}

import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import useBaseUrl, {useBaseUrlUtils} from '@docusaurus/useBaseUrl';

import Features, {type FeatureItem} from '@site/src/data/features';

import Heading from '@theme/Heading';

function scrollToFeatures(e) {
  e.preventDefault();
  
  const scrollLink = document.getElementById("scroll-to-features"),
  targetElement = document.getElementById("features");
  
  window.scroll({ top: targetElement.offsetTop - 60, left: 0, behavior: 'smooth' });
}

function TopBanner() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.topBanner)}>
      <div className="container">
        <div style={{textAlign: "right"}}>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
        <a href="#" id="scroll-to-features" onClick={scrollToFeatures}>
          <FontAwesomeIcon className={clsx(styles.mainBannerArrowDown)} icon={faChevronDown} />
        </a>
      </div>
    </header>
  );
}

function Feature({
  feature,
  className,
}: {
  feature: FeatureItem;
  className?: string;
}) {
  const {withBaseUrl} = useBaseUrlUtils();

  return (
    <div className={clsx('col', className)}>
      <img
        className={styles.featureImage}
        alt={feature.title}
        width={Math.floor(feature.image.width)}
        height={Math.floor(feature.image.height)}
        src={withBaseUrl(feature.image.src)}
        loading="lazy"
      />
      <Heading as="h3" className={clsx(styles.featureHeading)} style={{color: feature.headerColor}}>
        {feature.title}
      </Heading>
      <p className="padding-horiz--md">{feature.text}</p>
    </div>
  );
}

function FeaturesContainer() {

  return (
    <div id="features" className="container text--center" style={{ paddingTop: "3rem"}}>
      <div className="row margin-bottom--lg">
        {Features.map((feature, idx) => (
          <Feature feature={feature} key={idx} />
        ))}
      </div>
      <div>
        <p className={clsx(styles.featuresContainerText)}>Creating a more integrated future for healthcare.</p>
      </div>
    </div>
  );
}

function QuoteBanner() {
  return (
    <header className={clsx("hero hero--primary", styles.quoteBanner)}>
      <div className="container">
        <div className={clsx(styles.quoteBannerContainer)}>
          <p className={clsx(styles.quoteBannerTitle)}>What is Integrated Knowledge Management?</p>
          <p className={clsx(styles.quoteBannerBody)}>“The discipline of bringing all knowledge resources into a unified paradigm where the resources all share a common underlying representation that integrates version control, configuration management, modularity, concept-oriented representation, and standardized viewing, collaborative editing, and extension development capabilities within a shared knowledge-management environment.”</p>
          <div className={clsx(styles.quoteBannerAuthorContainer)}>
            <p className={clsx(styles.quoteBannerAuthorName)}>Keith E. Campbell, MD, PhD</p>
          </div>
          
        </div>
      </div>
    </header>
  );
}

function PlatformBanner() {
  return (
    <header style={{backgroundColor: "white"}}>
      <div className="container">
        <div className={clsx(styles.platformBannerContainer)}>
          <div className={clsx(styles.platformBannerItem)}>
            <p className={clsx(styles.platformBannerItemTitle)}>Our IKM Platform</p>
            <ul className={clsx(styles.platformBannerList)}>
              <li className={clsx(styles.platformBannerListItem)}>Provides a space for healthcare knowledge to be managed in one centralized area</li>
              <li className={clsx(styles.platformBannerListItem)}>Allows for knowledge management at the healthcare ecosystem level, rather than at the individual organization level</li>
              <li className={clsx(styles.platformBannerListItem)}>Enables collaboration from knowledge experts across the ecosystem </li>
            </ul>
            <div className={styles.buttons} style={{marginRight: "40px"}}>
              <Link
                className="button button--secondary button--md"
                to="/learnmore"
                style={{backgroundColor: "#223746", color: "white"}}>
                Learn More
              </Link>
            </div>
          </div>
          <div className={clsx(styles.platformBannerItem)} style={{ 
            textAlign: "center"
            }}>
            <p className={clsx(styles.platformBannerQuote)}>Built by you, for you</p>
            <img src={useBaseUrl("img/landingpage_platform_graphic.png")} alt="Image of Integrated Knowledge Management (IKM) Platform" style={{maxWidth: "300px"}}></img>
          </div>
          
        </div>
      </div>
    </header>
  );
}

function InstallBanner() {
  return (
    <header className={clsx("hero hero--primary", styles.installBanner)}>
      <div className="container">
        <div className={clsx(styles.installBannerContainer)}>
          <p className={clsx(styles.installBannerTitle)}>Our Tool – Komet</p>
          <p className={clsx(styles.installBannerBody)}>Built to allow for viewing, creation, editing, analysis, and retirement of knowledge housed in the IKM Platform, Komet allows users to interact with disparate healthcare terminologies (SNOMED, RxNorm, LOINC) in a central location.</p>
          <div className={styles.buttons} style={{marginRight: "40px"}}>
            <Link
              className="button button--secondary button--md"
              to="/install">
              Install Komet
            </Link>
          </div>
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
        <main>
          <TopBanner />
          <FeaturesContainer />
          <QuoteBanner />
          <PlatformBanner />
          <InstallBanner />
        </main>
      </Layout>
  );
}

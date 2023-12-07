import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  headerColor: string;
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Contributed Application',
      id: 'homepage.features.harmonization-engine.title',
    }),
    image: {
      src: '/img/landingpage_feature_icon_ecosystem.png',
      width: 50,
      height: 50,
    },
    headerColor: '#3F85D8',
    text: (
      <Translate id="homepage.features.harmonization-engine.text">
        Creating a contributed knowledge management application that will integrate health data
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Care Quality Driver',
      id: 'homepage.features.care-quality-driver.title',
    }),
    image: {
      src: '/img/landingpage_feature_icon_dataquality.png',
      width: 50,
      height: 50,
    },
    headerColor: '#707B8F',
    text: (
      <Translate id="homepage.features.care-quality-driver.text">
        Improving healthcare data quality that will aid in the downstream accuracy of patient treatments and public health decisions
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Collaborative Workspace',
      id: 'homepage.features.collaborative-workspace.title',
    }),
    image: {
      src: '/img/landingpage_feature_icon_collaboration.png',
      width: 50,
      height: 50,
    },
    headerColor: '#53B89B',
    text: (
      <Translate id="homepage.features.collaborative-workspace.text">
        Developing a collaborative space for individuals to build on the work of others for creative, adaptive solutions
      </Translate>
    ),
  },
];

export default FEATURES;
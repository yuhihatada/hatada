import { ReactElement } from 'react';
import MainLayout from '../globals/layouts/main-layout';
import { css } from '@emotion/react';
import AboutContainer from '../features/about/components/about-container';

const About = () => {
  return (
    <div css={container}>
      <AboutContainer />
    </div>
  );
};

const container = css`
  width: 100%;
  height: 100%;
`;

export default About;

About.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

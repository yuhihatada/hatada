import { css } from '@emotion/react';
import { mqMin } from '../../../globals/styles/media-queries';
import Summary from './summary';
import Career from './career';
import Skills from './skills';

const AboutContainer = () => {
  return (
    <div css={styles.container}>
      <div css={styles.main}>
        <Summary />
        <Career />
        <Skills />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    margin-top: 90px;
  `,
  main: css`
    width: 90%;
    margin: 0 auto;
    box-sizing: border-box;
    ${mqMin('md')} {
      margin: 150px auto 0;
      width: 70%;
    }
  `,
};

export default AboutContainer;

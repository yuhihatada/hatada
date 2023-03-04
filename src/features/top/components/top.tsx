import { css } from '@emotion/react';
import { mqMin } from '../../../globals/styles/media-queries';

const Top = () => {
  return <div css={styles.container}>Hello World</div>;
};

const styles = {
  container: css`
    width: 100%;
    height: 100%;
    ${mqMin('md')} {
      padding: 40px 0;
      box-sizing: border-box;
    }
  `,
};

export default Top;

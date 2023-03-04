import { css } from '@emotion/react';
import { mqMin } from '../../../globals/styles/media-queries';
import TypedText from './typed-text';

const Top = () => {
  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.descriptionBox}>
          <a>
            一言、いい感じのことをここで言いたい。
            <br />
            かっこいい一言があれば、contactからお願いします。
          </a>
          <div css={styles.iamBox}>
            <h1>I{`'`}m&nbsp;</h1>
            <TypedText />
          </div>
        </div>
        <img src='/images/travel.jpg' alt='' css={styles.mainImage} />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    height: 100%;
  `,
  wrapper: css`
    text-align: center;
    ${mqMin('md')} {
      margin: 50px auto 10px;
      width: 80%;
      text-align: left;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  descriptionBox: css`
    padding: 15px;
    display: flex;
    flex-flow: column;
  `,
  iamBox: css`
    margin: 30px auto 0;
    display: flex;
    align-items: center;
    font-family: monospace;
    line-height: 1.2;
    font-size: 20px;
    font-weight: 300;
    ${mqMin('sm')} {
      font-size: 30px;
      font-weight: 500;
    }
    ${mqMin('md')} {
      margin-top: 30px;
      font-size: 60px;
      font-weight: 700;
    }
  `,
  mainImage: css`
    border-radius: 10%;
    box-shadow: 5px 5px 5px 1px #c0c0c0;
    width: 80%;
    ${mqMin('md')} {
      width: 50%;
    }
  `,
};

export default Top;

import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { mqMax, mqMin } from '../../../globals/styles/media-queries';
import TypedText from './typed-text';
import TypedSentence from './typed-sentence';
import { breakpoints } from '../../../globals/styles/media-queries';

const Top = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div css={styles.container}>
      <div css={styles.mainSection}>
        <div css={styles.topTextBox}>
          <p css={styles.welcomeMessage}>笑い、ワクワクを届ける</p>
          <div css={styles.iamBox}>
            <h1>I{`'`}m&nbsp;</h1>
            <TypedText />
          </div>
          {width > breakpoints['md'] && <TypedSentence />}
        </div>
        <img src='/images/travel.jpg' alt='' css={styles.mainImage} />
        {width <= breakpoints['md'] && <TypedSentence />}
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
  mainSection: css`
    display: flex;
    text-align: center;
    box-sizing: border-box;
    ${mqMin('md')} {
      margin: 0 auto;
      padding-top: 40px;
      width: 80%;
      text-align: left;
      justify-content: space-between;
      align-items: center;
    }
    ${mqMax('md')} {
      flex-flow: column;
    }
  `,
  topTextBox: css`
    display: flex;
    flex-flow: column;
    ${mqMin('md')} {
      padding-right: 40px;
    }
  `,
  welcomeMessage: css`
    width: 90%;
    margin: 0 auto;
    font-size: 20px;
    color: #2c3e50;
    ${mqMin('md')} {
      width: 100%;
      margin: 0;
    }
  `,
  iamBox: css`
    margin: 30px auto;
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
      margin: 30px 0;
      font-size: 60px;
      font-weight: 700;
    }
  `,
  contactBtn: css`
    font-size: 20px;
    background-color: #2c3e50;
    color: #fff;
  `,
  mainImage: css`
    margin: 0 auto;
    border-radius: 10%;
    box-shadow: 5px 5px 5px 1px #c0c0c0;
    width: 70%;
    ${mqMin('md')} {
      margin: 0;
      width: 50%;
    }
  `,
};

export default Top;

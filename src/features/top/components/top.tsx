import { useState, useEffect } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import { mqMax, mqMin } from '../../../globals/styles/media-queries';
import TypedIntroduce from './typed-introduce';
import TypedSentenceTight from './typed-sentence-tight';
import TypedSentenceWide from './typed-sentence-wide';

const Top = () => {
  const [width, setWidth] = useState<number>(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div css={styles.container}>
      <div css={styles.mainSection}>
        <div css={styles.topTextBox}>
          <p css={styles.welcomeMessage}>ゆうひのポートフォリオへようこそ</p>
          <div css={styles.iamBox}>
            <h1>I{`'`}m&nbsp;</h1>
            <TypedIntroduce />
          </div>
          <TypedSentenceWide />
          <div css={styles.btns}>
            <Link css={[styles.moveBtn, `margin-right: 20px`]} href='/about'>
              about
            </Link>
            <Link css={styles.moveBtn} href='/contact'>
              contact
            </Link>
          </div>
        </div>
        <img src='/images/master_icon.jpg' alt='' css={styles.mainImage} />
        <TypedSentenceTight />
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
    width: 100%;
    display: flex;
    flex-flow: column;
    text-align: center;
    box-sizing: border-box;
    ${mqMin('md')} {
      margin: 150px auto 0;
      width: 70%;
      text-align: left;
      flex-flow: row;
      justify-content: space-between;
      align-items: center;
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
    margin: 0 auto;
    font-size: 20px;
    color: #2c3e50;
    ${mqMin('md')} {
      margin: 0;
    }
  `,
  iamBox: css`
    margin: 30px auto;
    display: flex;
    align-items: center;
    line-height: 1.2;
    font-size: 30px;
    font-weight: 500;
    ${mqMin('md')} {
      margin: 30px 0;
      font-size: 60px;
      font-weight: 700;
    }
  `,
  btns: css`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 30px 0 0;
    animation: slide 33s linear;
    @keyframes slide {
      0% {
        opacity: 0;
        transform: translateX(20px);
      }
      98% {
        opacity: 0;
        transform: translateX(20px);
      }
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
    ${mqMax('md')} {
      display: none;
    }
  `,
  moveBtn: css`
    font-size: 25px;
    padding: 5px 10px;
    background-color: #2c3e50;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 3px 3px 5px 1px #c0c0c0;
    transition: opacity 0.2s linear;
    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  `,
  mainImage: css`
    margin: 0 auto;
    border-radius: 100%;
    box-shadow: 5px 5px 5px 1px #c0c0c0;
    width: 70%;
    ${mqMin('md')} {
      margin: 0;
      width: 40%;
    }
  `,
};

export default Top;

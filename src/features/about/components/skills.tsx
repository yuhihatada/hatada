import { css } from '@emotion/react';
import Link from 'next/link';
import { mqMin } from '../../../globals/styles/media-queries';

const Skills = () => {
  return (
    <div css={styles.skillsBox}>
      <h1 css={styles.skillsTitle}>Skills</h1>
      <div css={styles.skillsWrapper}>
        <div css={[styles.skillBox, 'margin-bottom: 10px;']}>
          <div css={styles.skillDescBox}>
            <h2 css={styles.skillDescTitle}>Programming</h2>
            <a css={styles.skillDesc}>
              情報工学科卒、仕事でもゴリゴリコードを書いています。
              <br />
              技術スタックはgolang, python, C, C#, Java, js, ts, swift, aws,
              docker, pos等です。 日々新しい技術に触れることが好きです。
              <br />
              GitHubは
            </a>
            <Link href='https://github.com/yuhihatada' target='_blank'>
              こちら
            </Link>
            <a>。</a>
          </div>
          <img
            src='/images/repositories.png'
            alt=''
            css={styles.imageWrapper}
          />
        </div>
        <div css={[styles.skillBox, 'margin-bottom: 10px;']}>
          <div css={styles.skillDescBox}>
            <h2 css={styles.skillDescTitle}>3D Animation</h2>
            <a css={styles.skillDesc}>
              3Dオブジェクトとアニメーションを作成することが出来ます。
              <br />
              これまでに10本程度のアニメーション動画を作成してきました。
              <br />
              オーダーメイドでアニメーションを作成することも可能です。
            </a>
          </div>
          <div css={styles.videoWrapper}>
            <video css={styles.video} autoPlay loop muted>
              <source src='/videos/logo_rotate.mp4' type='video/mp4' />
              <p>動画を使用できるブラウザで閲覧して下さい。</p>
            </video>
          </div>
        </div>
        <div css={styles.skillBox}>
          <div css={styles.skillDescBox}>
            <h2 css={styles.skillDescTitle}>Body Building</h2>
            <a css={styles.skillDesc}>
              これはもはやスキルなのか分かりません。
              <br />
              筋力トレーニングには18歳の頃から向き合い、栄養学や解剖学も勉強してきました。
              <br />
              筋トレに興味ある方は、ぜひ私と一緒にマッチョになりましょう。
            </a>
          </div>
          <img src='/images/contest.jpg' alt='' css={styles.imageWrapper} />
        </div>
      </div>
    </div>
  );
};

const styles = {
  skillsBox: css`
    width: 100%;
    margin-bottom: 50px;
  `,
  skillsTitle: css`
    font-size: 30px;
    color: #2c3e50;
  `,
  skillsWrapper: css`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 7px;
    box-shadow: 2px 2px 5px 1px #c0c0c0;
  `,
  skillBox: css`
    ${mqMin('md')} {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `,
  skillDescBox: css`
    width: 100%;
    ${mqMin('md')} {
      width: 50%;
    }
  `,
  skillDescTitle: css`
    font-size: 20px;
    color: #2c3e50;
  `,
  skillDesc: css`
    font-size: 17px;
    color: #2c3e50;
  `,
  videoWrapper: css`
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    ${mqMin('md')} {
      width: 50%;
      padding-top: 28.125%;
    }
  `,
  video: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: 7px;
  `,
  imageWrapper: css`
    width: 100%;
    border-radius: 7px;
    ${mqMin('md')} {
      width: 50%;
    }
  `,
};

export default Skills;

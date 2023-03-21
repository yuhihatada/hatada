import { css } from '@emotion/react';
import { mqMin } from '../../../globals/styles/media-queries';

const Skills = () => {
  return (
    <div css={styles.skillsBox}>
      <h1 css={styles.skillsTitle}>Skills</h1>
      <div css={styles.skillsWrapper}>
        <div css={[styles.skillBox, 'margin-bottom: 10px;']}>
          <a css={styles.skillDesc}>Programming</a>
          <div css={styles.youtubeVideoWrapper}>
            <iframe
              css={styles.youtubeVideo}
              src='https://www.youtube.com/embed/m6f9ArBEtkU'
              title='Programming'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        </div>
        <div css={[styles.skillBox, 'margin-bottom: 10px;']}>
          <a css={styles.skillDesc}>3D Animation</a>
          <div css={styles.youtubeVideoWrapper}>
            <iframe
              css={styles.youtubeVideo}
              src='https://www.youtube.com/embed/m6f9ArBEtkU'
              title='3D Animation'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
        </div>
        <div css={styles.skillBox}>
          <a css={styles.skillDesc}>Body Building</a>
          <div css={styles.youtubeVideoWrapper}>
            <iframe
              css={styles.youtubeVideo}
              src='https://www.youtube.com/embed/m6f9ArBEtkU'
              title='Body Building'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            />
          </div>
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
  skillDesc: css`
    font-size: 20px;
  `,
  youtubeVideoWrapper: css`
    position: relative;
    width: 100%;
    padding-top: 56.25%;
    ${mqMin('md')} {
      width: 50%;
      padding-top: 28%;
    }
  `,
  youtubeVideo: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  `,
};

export default Skills;

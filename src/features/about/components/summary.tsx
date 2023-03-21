import { css } from '@emotion/react';
import { IconContext } from 'react-icons';
import { AiOutlineUser } from 'react-icons/ai';
import { RiComputerLine } from 'react-icons/ri';
import { SlLocationPin } from 'react-icons/sl';
import { mqMin } from '../../../globals/styles/media-queries';

const Summary = () => {
  return (
    <div css={styles.sumarryBox}>
      <div css={styles.summary}>
        <IconContext.Provider value={{ size: '30px', color: '#00b0f0' }}>
          <AiOutlineUser />
        </IconContext.Provider>
        <a css={styles.summaryText}>Yuhi Hatada</a>
      </div>
      <div css={styles.summary}>
        <IconContext.Provider value={{ size: '30px', color: '#00b0f0' }}>
          <RiComputerLine />
        </IconContext.Provider>
        <a css={styles.summaryText}>Server Side Engineer</a>
      </div>
      <div css={styles.summary}>
        <IconContext.Provider value={{ size: '28px', color: '#00b0f0' }}>
          <SlLocationPin />
        </IconContext.Provider>
        <a css={styles.summaryText}>Tokyo</a>
      </div>
    </div>
  );
};

const styles = {
  sumarryBox: css`
    width: 100%;
    margin-bottom: 30px;
    display: flex;
    flex-flow: column;
    ${mqMin('md')} {
      flex-flow: row;
      justify-content: center;
    }
  `,
  summary: css`
    display: flex;
    justify-content: start;
    align-items: center;
    margin: 5px 0;
    ${mqMin('md')} {
      margin: 0 20px;
    }
  `,
  summaryText: css`
    font-size: 17px;
    color: #2c3e50;
  `,
};

export default Summary;

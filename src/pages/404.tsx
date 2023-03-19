import { useState, useEffect, ReactElement } from 'react';
import { css } from '@emotion/react';
import { mqMin } from '@/globals/styles/media-queries';
import MainLayout from '../globals/layouts/main-layout';

const NotFound = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const errorMessage = '404 Not Found.';

  useEffect(() => {
    const typing = async () => {
      if (counter >= 0 && counter <= errorMessage.length) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(errorMessage.slice(0, typedText.length + 1));
      } else {
        return;
      }
      setCounter(counter + 1);
    };
    typing();
  }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div css={styles.container}>
      <div css={styles.mainSection}>
        <a css={styles.typedText}>{typedText}</a>
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
  typedText: css`
    margin: 30px auto;
    font-size: 30px;
    color: #2c3e50;
  `,
};

export default NotFound;

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

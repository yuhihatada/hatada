import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { mqMin } from '@/globals/styles/media-queries';
import { sentence } from '../elements/sentence';

const TypedSentenceTight = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    const typing = async () => {
      if (counter == 0) {
        await new Promise(r => setTimeout(r, 12000));
      } else if (counter >= 1 && counter <= sentence.length) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(sentence.slice(0, typedText.length + 1));
      } else {
        return;
      }
      setCounter(counter + 1);
    };
    typing();
  }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps

  return <a css={styles.typedText}>{typedText}</a>;
};

const styles = {
  typedText: css`
    width: 90%;
    margin: 30px auto;
    text-align: left;
    color: #2c3e50;
    ${mqMin('md')} {
      display: none;
    }
  `,
};

export default TypedSentenceTight;

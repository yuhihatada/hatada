import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const TypedText = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const profileArray = ['Coder', 'Youtuber', 'BodyBuilder', 'Yuhi Hatada.'];

  useEffect(() => {
    const typing = async () => {
      if (counter == 0) {
        await new Promise(r => setTimeout(r, 1000));
      } else if (counter >= 1 && counter < 6) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[0].slice(0, typedText.length + 1));
      } else if (counter === 6) {
        await new Promise(r => setTimeout(r, 3000));
        setTypedText(profileArray[0].slice(0, typedText.length - 1));
      } else if (counter >= 7 && counter < 11) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[0].slice(0, typedText.length - 1));
      } else if (counter === 12) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText('');
      } else if (counter === 13) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[1].slice(0, 1));
      } else if (counter >= 14 && counter < 21) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[1].slice(0, typedText.length + 1));
      } else if (counter === 21) {
        await new Promise(r => setTimeout(r, 3000));
        setTypedText(profileArray[1].slice(0, typedText.length - 1));
      } else if (counter >= 22 && counter < 29) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[1].slice(0, typedText.length - 1));
      } else if (counter === 30) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText('');
      } else if (counter === 31) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[2].slice(0, 1));
      } else if (counter >= 32 && counter < 42) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[2].slice(0, typedText.length + 1));
      } else if (counter === 42) {
        await new Promise(r => setTimeout(r, 3000));
        setTypedText(profileArray[2].slice(0, typedText.length - 1));
      } else if (counter >= 43 && counter < 52) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[2].slice(0, typedText.length - 1));
      } else if (counter === 52) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText('');
      } else if (counter === 53) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[3].slice(0, 1));
      } else if (counter >= 54 && counter < 65) {
        await new Promise(r => setTimeout(r, 100));
        setTypedText(profileArray[3].slice(0, typedText.length + 1));
      } else if (counter >= 65) {
        return;
      }
      setCounter(counter + 1);
    };
    typing();
  }, [counter]); // eslint-disable-line react-hooks/exhaustive-deps

  return <h1 css={styles.typedText}>{typedText}</h1>;
};

const styles = {
  typedText: css`
    color: #00b0f0;
    display: inline-block;
    border-right: 5px solid #000;
    animation: blink 0.6s step-end infinite alternate;
    @keyframes blink {
      50% {
        border-color: transparent;
      }
    }
  `,
};

export default TypedText;

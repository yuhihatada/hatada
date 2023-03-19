import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

const TypedIntroduce = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const profileArray = ['Programmer', 'Youtuber', 'BodyBuilder', 'Yuhi Hatada'];

  useEffect(() => {
    const typing = async () => {
      if (counter == 0) {
        await new Promise(r => setTimeout(r, 500));
      } else if (counter >= 1 && counter < 11) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[0].slice(0, typedText.length + 1));
      } else if (counter === 11) {
        await new Promise(r => setTimeout(r, 1500));
        setTypedText(profileArray[0].slice(0, typedText.length - 1));
      } else if (counter >= 12 && counter < 21) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[0].slice(0, typedText.length - 1));
      } else if (counter === 22) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText('');
      } else if (counter === 23) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[1].slice(0, 1));
      } else if (counter >= 24 && counter < 31) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[1].slice(0, typedText.length + 1));
      } else if (counter === 31) {
        await new Promise(r => setTimeout(r, 1500));
        setTypedText(profileArray[1].slice(0, typedText.length - 1));
      } else if (counter >= 32 && counter < 39) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[1].slice(0, typedText.length - 1));
      } else if (counter === 40) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText('');
      } else if (counter === 41) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[2].slice(0, 1));
      } else if (counter >= 42 && counter < 52) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[2].slice(0, typedText.length + 1));
      } else if (counter === 52) {
        await new Promise(r => setTimeout(r, 1500));
        setTypedText(profileArray[2].slice(0, typedText.length - 1));
      } else if (counter >= 53 && counter < 62) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[2].slice(0, typedText.length - 1));
      } else if (counter === 62) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText('');
      } else if (counter === 63) {
        await new Promise(r => setTimeout(r, 200));
        setTypedText(profileArray[3].slice(0, 1));
      } else if (counter >= 64 && counter < 75) {
        await new Promise(r => setTimeout(r, 80));
        setTypedText(profileArray[3].slice(0, typedText.length + 1));
      } else if (counter >= 75) {
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

export default TypedIntroduce;

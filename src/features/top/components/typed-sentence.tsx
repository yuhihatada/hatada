import { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { mqMin } from '@/globals/styles/media-queries';

const TypedSentence = () => {
  const [typedText, setTypedText] = useState<string>('');
  const [counter, setCounter] = useState<number>(0);
  const sentence =
    '都内で会社員をしています。ゆうひです。' +
    'サーバーサイドエンジニアとしての業務が主ですが、フロント開発もインフラ構築も営業も広報も、なんでもやる「なんでも屋」です。' +
    '趣味も「旅、ボディビル、Youtube投稿、個人開発」など多種多様で、典型的な自由人です。' +
    'こんなハチャメチャな僕の願いはただひとつ、「笑い・ワクワクを届けたい」。' +
    '人を笑わせて、僕も笑う。人にワクワクを届けて、一緒に前向きに生きる。そんな「周りを照らせる太陽」に僕はなりたい。' +
    'その一心で、今日もどこかで何かを作っています。';

  useEffect(() => {
    const typing = async () => {
      if (counter == 0) {
        await new Promise(r => setTimeout(r, 13000));
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
      width: 100%;
      margin: 0;
    }
  `,
};

export default TypedSentence;

import { css } from '@emotion/react';
import Top from '../features/top/components/top';

export default function Home() {
  return (
    <div css={container}>
      <Top />
    </div>
  );
}

const container = css`
  width: 100%;
  height: 100%;
`;

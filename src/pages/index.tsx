import { ReactElement } from 'react';
import MainLayout from '../globals/layouts/main-layout';
import { css } from '@emotion/react';
import Top from '../features/top/components/top';

const Home = () => {
  return (
    <div css={container}>
      <Top />
    </div>
  );
};

const container = css`
  width: 100%;
  height: 100%;
`;

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

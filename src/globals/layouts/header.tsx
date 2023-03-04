import { css } from '@emotion/react';
import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.titleBox}>
          <img src='/icons/main_icon.png' alt='' css={styles.titleIcon} />
          <h1 css={styles.titleText}>Yuhi</h1>
        </div>
        <div>
          <Link css={styles.menuText} href='/'>
            Home
          </Link>
          <Link css={styles.menuText} href='/about'>
            About
          </Link>
          <Link css={styles.menuText} href='/products'>
            Products
          </Link>
          <Link css={styles.menuText} href='/contact'>
            Contact
          </Link>
        </div>
        <div>
          <Link
            css={styles.snsIcon}
            href='https://www.instagram.com/yuhi_hatada/'
            target='_blank'
          >
            <IconContext.Provider value={{ size: '35px' }}>
              <AiFillInstagram />
            </IconContext.Provider>
          </Link>
          <Link
            css={styles.snsIcon}
            href='https://twitter.com/yuhi00767535'
            target='_blank'
          >
            <IconContext.Provider value={{ size: '35px' }}>
              <FaTwitter />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
  `,
  wrapper: css`
    width: 80%;
    margin: 0 auto;
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  titleBox: css`
    display: flex;
    justify-content: start;
    align-items: center;
    transition: opacity 0.2s linear;
    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  `,
  titleIcon: css`
    width: 40px;
    height: 40px;
  `,
  titleText: css`
    color: #2c3e50;
    font-size: 30px;
  `,
  menuText: css`
    color: #2c3e50;
    font-size: 20px;
    margin: 0 15px;
    text-decoration: none;
    transition: color 0.2s linear;
    &:hover {
      cursor: pointer;
      color: #00b0f0;
    }
  `,
  snsIcon: css`
    margin: 0 7px;
    color: #2c3e50;
    transition: opacity 0.2s linear;
    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
  `,
};

export default Header;

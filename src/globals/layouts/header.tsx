import { useState } from 'react';
import { css } from '@emotion/react';
import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import { mqMax, mqMin } from '../styles/media-queries';
import HamburgerTab from './hamburger-tab';

const Header = () => {
  const [hamburgerTab, setHamburgerTab] = useState<boolean>(false);

  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <Link css={styles.titleBox} href='/'>
          <img src='/icons/main_icon.png' alt='' css={styles.titleIcon} />
          <h1 css={styles.titleText}>Yuhi</h1>
        </Link>
        <div css={styles.links}>
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
        <div css={styles.snsIcons}>
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
        <div css={styles.hamburgerBtn} onClick={() => setHamburgerTab(true)}>
          <IconContext.Provider value={{ size: '35px' }}>
            <RxHamburgerMenu />
          </IconContext.Provider>
        </div>
      </div>
      {hamburgerTab && <HamburgerTab setHamburgerTab={setHamburgerTab} />}
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
  `,
  wrapper: css`
    width: 100%;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mqMin('md')} {
      width: 80%;
      padding: 20px 10px;
    }
  `,
  titleBox: css`
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
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
  links: css`
    ${mqMax('md')} {
      display: none;
    }
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
  snsIcons: css`
    ${mqMax('md')} {
      display: none;
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
  hamburgerBtn: css`
    margin: 0 7px;
    color: #2c3e50;
    transition: opacity 0.2s linear;
    &:hover {
      cursor: pointer;
      opacity: 0.75;
    }
    ${mqMin('md')} {
      display: none;
    }
  `,
};

export default Header;

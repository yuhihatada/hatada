import { Dispatch, SetStateAction } from 'react';
import { css } from '@emotion/react';
import { IconContext } from 'react-icons';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { mqMin } from '../styles/media-queries';

const HamburgerTab = (props: {
  setHamburgerTab: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <div css={styles.container}>
      <div css={styles.wrapper}>
        <div css={styles.closeBtn} onClick={() => props.setHamburgerTab(false)}>
          <IconContext.Provider value={{ size: '35px' }}>
            <IoMdClose />
          </IconContext.Provider>
        </div>
        <div css={styles.links}>
          <Link
            css={styles.menuText}
            href='/'
            onClick={() => props.setHamburgerTab(false)}
          >
            Home
          </Link>
          <Link
            css={styles.menuText}
            href='/about'
            onClick={() => props.setHamburgerTab(false)}
          >
            About
          </Link>
          <Link
            css={styles.menuText}
            href='/products'
            onClick={() => props.setHamburgerTab(false)}
          >
            Products
          </Link>
          <Link
            css={styles.menuText}
            href='/contact'
            onClick={() => props.setHamburgerTab(false)}
          >
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
      </div>
    </div>
  );
};

const styles = {
  container: css`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    z-index: 1;
    ${mqMin('md')} {
      display: none;
    }
  `,
  wrapper: css`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 10px 0;
  `,
  closeBtn: css`
    color: #2c3e50;
    text-align: right;
  `,
  links: css`
    width: 80px;
    margin: 50px auto 0;
    display: flex;
    flex-flow: column;
  `,
  menuText: css`
    margin: 7px 0;
    color: #2c3e50;
    font-size: 20px;
    text-decoration: none;
    transition: color 0.2s linear;
    &:hover {
      cursor: pointer;
      color: #00b0f0;
    }
  `,
  snsIcons: css`
    width: 100px;
    margin: 15px auto 0;
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

export default HamburgerTab;

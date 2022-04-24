import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

//import logo from '../../assets/logo.svg';
import classes from './Navbar.module.scss';
import logo from '../brand/logo.svg';

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined
  });

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  // componentDidMount and componentWillUnmount
  useEffect(() => {
    const handleReSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleReSize);

    return () => {
      window.removeEventListener("resize", handleReSize);
    }
  }, [])

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const ctaClickHandler = () => {
    navigate("/page-cta");
  }

  return (
    <header className={classes.header}>
      <div className={classes.header_content}>
        <h2 className={classes.header_content_logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        </h2>

        <nav
          className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ''}`}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/section">Section</Link>
            </li>
            <li>
              <Link to="/page-three">PageThree</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>CTA Page</button>
        </nav>
        <div className={classes.header_content_toggle}>
          {menuOpen ? (
            <AiOutlineClose onClick={menuToggleHandler} />

          ) : (
            <BiMenuAltRight onClick={menuToggleHandler} />

          )}
        </div>
      </div>
    </header>
  );
}

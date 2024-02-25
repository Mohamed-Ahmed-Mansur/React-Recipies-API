import React, { useEffect } from 'react';
import style from '../Styles/Navbar.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../redux/slice/Language';
import i18n from '../i18n.js';

export default function Navbar() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector((state) => state.language.language);
  // const { t } = useTranslation();
  // const t = useTranslation();
  // const {t, i18n} = useTranslation();
  const [t, i18n] = useTranslation();
  console.log(i18n)
  console.log(t);

  
  const handleLanguageChange = (language) => {
    console.log(language);
    console.log(currentLanguage)
    dispatch(changeLanguage(language));
    i18n.changeLanguage(language);
  };

  useEffect(() => {
    console.log('Current Language:', currentLanguage);
    // console.log(t)
  }, [currentLanguage]);

  return (
    <div id="navBar" dir={`${i18n.language}`==='en'?"ltr":"rtl"}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div className="d-flex gap-2 align-items-center">
              <img
                src={'images/chef.svg'}
                alt="logo"
                style={{ color: '#1c1c1c', width: '70px' }}
                className={style.chefLogo}
              />
              <span className={style.tastyBite}>
                <span> Tasty</span>{' '}
                <span style={{ color: '#198754' }}>Bite</span>
              </span>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ border: 'none' }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className={`${style.navList} navbar-nav m-auto`}>
              <li className="nav-item px-1">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  {t('Home')}
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/cuisine">
                  {t('Recipes')}
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/addrecpie">
                  {t('Add recipe')}
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/">
                  {t('Blog')}
                </Link>
              </li>
              <li className="nav-item px-1">
                <Link className="nav-link" to="/">
                  {t('Contact Us')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <button
              className="btn btn-outline-success"
              onClick={() => handleLanguageChange('en')}
            >
              En
            </button>{' '}
            &nbsp;
            <button
              className="btn btn-outline-success"
              onClick={() => handleLanguageChange('ar')}
            >
              Ar
            </button>{' '}
            &nbsp;
          </div>

          <div className="signUp d-none d-lg-block d-xl-block d-xxl-block">
            <button className="btn btn-light shadow-sm me-3 px-4">
              <Link className="nav-link" to="/">
                {t('Log in')}
              </Link>
            </button>

            <button className="btn btn-success shadow-sm px-4">
              <Link className="nav-link" to="/">
                {t('Sign up')}
              </Link>
            </button>
          </div>
          <Link to={'/cart'} style={{ color: 'black', position: 'relative' }}>
            <i
              className="bi bi-cart3 p-2 mx-2  "
              style={{
                backgroundColor: 'white',
                border: '1px solid black',
                borderRadius: '10px',
                width: '60px',
                height: '60px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            ></i>
            <div
              className="rounded-circle bg-success d-flex justify-content-center align-items-center"
              style={{
                color: 'white',
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(25%, 25%)',
              }}
            >
              1
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

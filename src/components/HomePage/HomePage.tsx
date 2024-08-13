import React, { Fragment } from 'react';
import './HomePage.scss';

import faq from '../../api/faq.json';
import '../../i18n';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { LOCALS } from '../../i18n/constants';

export const HomePage: React.FC = ({}) => {
  const { t } = useTranslation();

  return (
    <>
      <main className="homepage">
        <div className="homepage__container">
          <div className="homepage__title-box">
            <h1 className="homepage__title title">Tandem</h1>
          </div>

          <div className="homepage__main-info">
            <p className="homepage__main-text">
              We are coaches who have trained <span>boxing</span> champions of
              Austria, boxing champions of Ukraine, <span>winners</span> and
              prize-winners of international tournaments and European
              championships.
            </p>

            <button
              className="homepage__contact-button contact-button 
					homepage__contact-button--first"
            >
              Contact us
            </button>
          </div>

          <div className="homepage__info">
            {t('Home')}
            <div>
              {i18next.language === LOCALS.UKR &&
                faq.map(item => (
                  <Fragment key={item.ukr.question}>
                    <p>{item.ukr.question}</p>
                    <p>{item.ukr.answer}</p>
                  </Fragment>
                ))}

              {i18next.language === LOCALS.ENG &&
                faq.map(item => (
                  <Fragment key={item.ukr.question}>
                    <p>{item.eng.question}</p>
                    <p>{item.eng.answer}</p>
                  </Fragment>
                ))}
            </div>
            <section className="homepage__info-item">
              <h2 className="homepage__small-title">About work out</h2>

              <p className="homepage__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section className="homepage__info-item">
              <h2 className="homepage__small-title">Programm</h2>

              <p className="homepage__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section className="homepage__info-item">
              <h2 className="homepage__small-title">Privet</h2>

              <p className="homepage__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>

            <section className="homepage__info-item">
              <h2 className="homepage__small-title">Benefits</h2>

              <p className="homepage__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </section>
          </div>

          <button
            className="homepage__contact-button 
					contact-button homepage__contact-button--second"
          >
            Contact us
          </button>
        </div>
      </main>

      {/* <button className="contact-button">Contact us</button> */}
    </>
  );
};

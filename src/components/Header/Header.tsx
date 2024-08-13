import React, { useState } from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import '../../i18n';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import i18next from 'i18next';
import { LOCALS } from '../../i18n/constants';
// import { ItemsContext } from '../../ItemsContext';

// type Props = {
//   setIsBurgerMenuOpen: (item: boolean) => void;
//   isBurgerMenuOpen: boolean;
//   darkTheme: boolean;
//   setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
// };

export const Header: React.FC = (
  {
    // setIsBurgerMenuOpen,
    // isBurgerMenuOpen,
    // darkTheme,
    // setDarkTheme,
  },
) => {
  // const { favoriteProducts, items, amountOfItems } = useContext(ItemsContext);
  const { t } = useTranslation();
  const links = [
    [t('Home'), 'home'],
    [t('Team'), 'team'],
    [t('Price'), 'price'],
    [t('News'), 'news'],
    [t('Support'), 'support-us'],
    [t('Contacts'), 'сontacts'],
  ];

  const [isLanguageDropDownVisible, setIsLanguageDropDownVisible] =
    useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const languages = [LOCALS.ENG, LOCALS.UKR, LOCALS.DEU];

  document.body.style.overflow = `hidden`;

  return (
    <header
      className={cn('header', {
        // 'header--dark-theme': darkTheme,
      })}
    >
      <div className="header__container">
        <nav className="header__navigation">
          <ul className="header__navigation-list">
            {links.map(link => (
              <li key={link[0]}>
                <NavLink
                  to={link[1] === 'home' ? `/` : `/${link[1]}`}
                  className={({ isActive }) =>
                    cn('menu-link', {
                      'menu-link--active': isActive,
                    })
                  }
                >
                  <div className="menu-link__slider">
                    <p>{link[0]}</p>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__actions">
          <div className="header__language-drop-down  language-drop-down">
            <div className="language-drop-down__control-box">
              <div className="language-drop-down__language">
                {i18next.language.toUpperCase()}
              </div>
              <button
                type="button"
                className={cn('language-drop-down__trigger', {
                  'language-drop-down__trigger--rotate-arrow':
                    isLanguageDropDownVisible,
                })}
                onClick={() =>
                  setIsLanguageDropDownVisible(!isLanguageDropDownVisible)
                }
              ></button>
            </div>

            <div
              className={cn('language-drop-down__content', {
                'language-drop-down__content--visible':
                  isLanguageDropDownVisible,
              })}
            >
              <ul className="language-drop-down__list">
                {languages.map(language => (
                  <li
                    key={language}
                    className={cn('language-drop-down__item', {
                      'language-drop-down__item--disabled':
                        i18next.language === language,
                    })}
                    onClick={() => {
                      i18next.changeLanguage(language);
                      setIsLanguageDropDownVisible(!isLanguageDropDownVisible);
                    }}
                  >
                    {language.toUpperCase()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button
            type="button"
            className={cn('header__menu icon-menu', {
              // 'header__menu--dark-theme': darkTheme,
            })}
            onClick={() => {
              setIsBurgerMenuOpen(true);
              window.addEventListener('scroll', () => {
                window.scrollTo({ top: 0 });
              });
            }}
          ></button>
        </div>

        <div
          className={cn('header__burger', {
            'header__burger--visible': isBurgerMenuOpen,
          })}
        >
          <nav className="header__navigation header__navigation--burger">
            <ul
              className="header__navigation-list 
						header__navigation-list--burger"
            >
              {links.map(link => (
                <li key={link[0]}>
                  <NavLink
                    to={link[1] === 'home' ? `/` : `/${link[1]}`}
                    className={({ isActive }) =>
                      cn('menu-link menu-link--burger', {
                        'menu-link--active': isActive,
                      })
                    }
                  >
                    <p>{link[0]}</p>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

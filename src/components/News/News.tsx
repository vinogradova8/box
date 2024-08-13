import React from 'react';
import './News.scss';
// import i18next from '../../i18n';
// import faq from '../../api/faq.json';
// import { LOCALS } from '../../i18n/constants';

export const News: React.FC = ({}) => {
  return (
    <>
      <p>NEWS</p>
      {/* <div>
        {i18next.language === LOCALS.UKR &&
          faq.map(item => (
            <Fragment key={item.uk.question}>
              <p>{item.uk.question}</p>
              <p>{item.uk.answer}</p>
            </Fragment>
          ))}

        {i18next.language === LOCALS.ENG &&
          faq.map(item => (
            <Fragment key={item.uk.question}>
              <p>{item.en.question}</p>
              <p>{item.en.answer}</p>
            </Fragment>
          ))}
      </div> */}
    </>
  );
};

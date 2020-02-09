import React from 'react';
import { Helmet } from 'react-helmet';

// eslint-disable-next-line react/prop-types
const wrapPageElement = ({ element }) => (
  <>
    <Helmet
      defer={false}
      htmlAttributes={{ lang: 'en' }}
      title="Redux Saga samples"
    >
      <meta charSet="utf-8" />
      <meta name="description" content="Redux Saga samples" />
    </Helmet>
    {element}
  </>
);

export default wrapPageElement;

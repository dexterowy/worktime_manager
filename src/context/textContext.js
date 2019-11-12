import React from 'react';
import texts from '../Localization/ui';

const textContext = React.createContext({
  texts: { ...texts },
  language: 'pol',
  database: {
    employees: [],
    projects: [],
  },
});

export default textContext;

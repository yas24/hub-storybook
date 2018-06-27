import React from 'react';
import script from 'scriptjs';
import { configure } from '@storybook/react';

// Expose react for the framework
window.React = React;

script('https://unpkg.com/track24-framework@1.1.2/umd/track24-framework.min.js', () => {
  function loadStories() {
    require('../stories/index.js');
  }

  configure(loadStories, module);
})

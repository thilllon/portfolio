import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Footer from './Footer';

storiesOf('Footer', module)
.addDecorator((story) => (
  <div className="container">
    {story()}
  </div>
))
.add('Footer Component', () => <Footer />);
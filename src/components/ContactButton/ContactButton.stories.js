import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ContactButton from './ContactButton';

storiesOf('ContactButton', module)
.addDecorator((story) => (
  <div style={{ width: '5rem', height: '5rem', marginTop: '3rem', marginLeft: '3rem'}}>
    {story()}
  </div>
))
.add('ContactButton Component facebook', () => <ContactButton
  tagName="FaFacebook"
  iconDesc="facebook icon"
  linkURL="https://google.com"
/>)
.add('ContactButton Component github', () => <ContactButton
tagName="FaGithubAlt"
iconDesc="github icon"
linkURL="https://google.com"
/>);
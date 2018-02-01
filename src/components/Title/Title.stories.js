import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Title from './index';

storiesOf('Title', module)
.add('Title Component h1', () => <Title
  tagName="h1"
  content="h1 Title"
  size="20px"
/>)
.add('Title Component h2', () => <Title
  tagName="h2"
  content="h2 Title"
  color="red"
/>)
.add('Title Component h3', () => <Title
  tagName="h3"
  content="h3 Title"
  weight="400"
/>)
.add('Title Component h4', () => <Title
  tagName="h4"
  content="h4 Title"
/>)
.add('Title Component h5', () => <Title
  tagName="h5"
  content="h5 Title"
/>)
.add('Title Component h6', () => <Title
  tagName="h6"
  content="h6 Title"
/>);
import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from '.';

storiesOf('Templates', module).add('UNDP profile', () => <Profile pathname="undp" />);
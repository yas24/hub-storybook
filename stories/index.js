import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import {   withKnobs,
  text,
  boolean,
  number,
  array,
  object,
  select,
  color, } from '@storybook/addon-knobs';

import Button from '../src/components/Button';
import Input from '../src/components/Input';


storiesOf('Button', module)
  .add('Basic button with Text', () => (
    <Button
        disabled={boolean("Disabled", false)}
        onClick={action("clicked")}
        text="Hello Button">
      </Button>
  ))
  .add('Disabled button', () => (
    <Button
        disabled={boolean("Disabled", true)}
        onClick={action("clicked")}
        text="Hello Button">
      </Button>
  )).add('External Link', () => (
    <Button
        href="#"
        disabled={boolean("Disabled", true)}
        onClick={action("clicked")}
        text="Hello Button">
      </Button>
  ));

storiesOf('Input', module)
  .add('with text', () => (
    <Input onClick={action('clicked')}/>
  ));    
   
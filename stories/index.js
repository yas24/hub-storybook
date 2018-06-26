import React from 'react';
import ReactDOM from 'react-dom';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number,select } from '@storybook/addon-knobs';

import Button from '../src/components/Button';
import Input from '../src/components/Input';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('Primary Button', () => (
    <Button
        customClass={select("Color", ["warning", "secondary", "primary", "disabled", "transparent"], "primary")}
        disabled={boolean("Disabled", false)}
        onClick={action("clicked")}
        text="Hello Button">
      </Button>
  ));


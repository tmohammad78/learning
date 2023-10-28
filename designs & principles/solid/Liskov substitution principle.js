/**
 * For example we have two component, Button and LinkButton
 * so we can replace Button in everyplace that is used with LinkButton component
 */
// Button component
import React from 'react';

const Button = ({ text, onClick }) => (
 <button onClick={onClick}>
   {text}
 </button>
);

export default Button;


// LinkButton component that extends Button
import React from 'react';
import Button from './Button';

const LinkButton = ({ text, url, onClick }) => (
 <Button onClick={onClick}>
   <a href={url}>{text}</a>
 </Button>
);

export default LinkButton;

import React from 'react';
import Button from './Button';
import LinkButton from './LinkButton';

const MyComponent = () => (
 <div>
   <Button text="Click me!" onClick={() => console.log('Button clicked')} />
   <LinkButton text="Google" url="https://www.google.com" onClick={() => console.log('LinkButton clicked')} />
 </div>
);


///////////////////////////////////////////////////
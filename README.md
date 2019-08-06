# react-scroller

> 
[![NPM](https://img.shields.io/npm/v/react-scroller.svg)](https://www.npmjs.com/package/react-scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Simple wrapper on top of Element.scrollToview method, providing 
easy way of scrolling to specific elements in React apps

## Install

```bash
npm install --save react-scroller
```

## Usage

### Scrollable / useScroller
Registers a component one can later of refer from useScroller hook
to scroll to it at later point programmatically
useScroll provides interface for scrolling by name reference
```jsx
import React, { useEffect } from 'react'

import {Scrollable} from 'react-scroller'

const Example = () => {
  const { animateScroll } = useScroller("test");
  useEffect(() => {
    animateScroll();
  });
  return (
    <Scrollable name="test" />
  )
}
```
### ScrollToElement
Does the same as Scrollable, moreover it scrolls to element upon render
```jsx
import React, from 'react'

import {ScrollToElement} from 'react-scroller'

const Example = () => {
  return (
    <ScrollToElement name="test" />
  )
}
```

## License

MIT © [](https://github.com/)

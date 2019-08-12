# simple-scroller

> 
[![NPM](https://img.shields.io/npm/v/simple-scroller.svg)](https://www.npmjs.com/package/simple-scroller) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[Example](https://tarjei400.github.io/react-scroller/)

Zero dependency interface for scrolling to react components

## Install

```bash
npm install --save simple-scroller
```

## Usage

### Scrollable / useScroller
Registers a component one can later of refer from useScroller hook
to scroll to it at later point programmatically
useScroll provides interface for scrolling by name reference
```jsx
import React, { useEffect } from 'react'

import { Scrollable, useScroller } from 'react-scroller'

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

import { ScrollToElement } from 'simple-scroller'

const Example = () => {
  return (
    <ScrollToElement name="test" />
  )
}
```
You can prevent scrolling if necesarry by passing shouldScroll boolean property

```jsx
import React, from 'react'

import { ScrollToElement } from 'simple-scroller'

const Example = () => {
  const [shouldScroll, setShouldScroll] = useState(false)
  const onClick = () => {
    setShouldScroll(!shouldScroll);
  }
  return (
    <Fragment>
       <button onClick={onClick}>Scroll</button>
       <ScrollToElement name="test" shouldScroll={shouldScroll} />
    </Fragment>
  )
}
```
## License

MIT © [](https://github.com/)

import { default as React, useLayoutEffect } from 'react'
import { useScrollable, useScroller } from '../hooks/useScroller'

/***
 * Registers a reference in scroller context. Later on component name can be used to scroll to it.
 *
 * @param children
 * @param name
 * @returns {*}
 * @constructor
 */
export const Scrollable = ({ children, name }) => {
  const ref = useScrollable(name)
  return <div ref={ref} name={name}> {children} </div>
}

/***
 * Performs animates scroll to 'Scrollable' element with proper name
 *
 * @param children
 * @param name
 * @param shouldScroll
 * @returns {*}
 * @constructor
 */
export const ScrollToElement = ({ children, name, shouldScroll = true }) => {
  const ref = useScrollable(name);
  const { animateScroll } = useScroller(name, ref);
  useLayoutEffect(() => {
    if (shouldScroll) {
      animateScroll()
    }
  });
  return <div ref={ref} name={name}> {children} </div>;
}

/***
 * Wraps children, and animates scroll to element passed in 'to' property
 *
 * @param to
 * @param children
 * @returns {*}
 * @constructor
 */
export const Link = ({ to, children }) => {
  const { animateScroll } = useScroller(to);
  return <div onClick={animateScroll}>
    {children}
  </div>
}

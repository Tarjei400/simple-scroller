import { default as React, useLayoutEffect, useContext } from 'react'
import { ScrollerContext, useScrollable, useScroller } from '../hooks/useScroller'

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
  return <div ref={ref}> {children} </div>
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
  const scrollablesMap = useContext(ScrollerContext)
  const ref = useScrollable(name);
  const { animateScroll } = useScroller(name, ref);
  console.log("Should scroll ", shouldScroll)
  useLayoutEffect(() => {
    if (shouldScroll) {
      animateScroll()
    }
  });
  return <div ref={ref}> {children} </div>;
}

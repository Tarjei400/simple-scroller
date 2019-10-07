import { default as React, useLayoutEffect, Fragment } from 'react'
import { useScrollable, useScroller } from '../hooks/useScroller'

const OffsetStyle = (offset) =>({
  position: 'absolute',
  opacity: '0',
  width: '100%',
  height: '1px',
  'margin-top': `-${offset}px`,
  'background-image': 'linear-gradient(120deg, #eaee44, #33d0ff)',
});


/***
 * Registers a reference in scroller context. Later on component name can be used to scroll to it.
 *
 * @param children
 * @param name
 * @returns {*}
 * @constructor
 */
export const Scrollable = ({ children, name, offset }) => {
  const ref = useScrollable(name);

  if(!offset){
    return <Fragment>
      <div ref={ref} name={name}> {children} </div>
    </Fragment>
  }
  return <Fragment>
    <div ref={ref} style={OffsetStyle(offset)}> </div>
    <div name={name}> {children} </div>
  </Fragment>
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
export const ScrollToElement = ({ children, name, shouldScroll = true, offset}) => {
  const ref = useScrollable(name);
  const { animateScroll } = useScroller(name, ref);
  useLayoutEffect(() => {
    if (shouldScroll) {
      animateScroll()
    }
  });

  if(!offset){
    return <Fragment>
      <div ref={ref} name={name}> {children} </div>
    </Fragment>
  }
  return <Fragment>
    <div ref={ref} style={OffsetStyle(offset)}> </div>
    <div name={name}> {children} </div>
  </Fragment>
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

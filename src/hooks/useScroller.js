
import { useContext, createContext, useCallback, useRef, useEffect } from 'react'

export const ScrollerContext = createContext({})

/***
 * Registers component reference in Scroller context
 *
 * @param name
 * @returns {React.MutableRefObject<null>}
 */
export const useScrollable = (name) => {
  const ref = useRef(null);
  const scrollablesMap = useContext(ScrollerContext);

  useEffect(() => {
    scrollablesMap[name] = ref;
    return () => delete scrollablesMap[name]
  }, []);
  return ref
};

/***
 * Returns methods for scrolling to Scrollable elements.
 *
 * @param name
 * @param ref
 * @returns {{animateScroll: *, scrollTo: *}}
 */
export const useScroller = (name, ref) => {
  const scrollablesMap = useContext(ScrollerContext)
  const scrollCallbackFactory = useCallback((params) => () => {
    const cmpRef = ref || scrollablesMap[name];
    if (cmpRef) {
      cmpRef.current.scrollIntoView(params)
    }
  }, scrollablesMap[name]);

  return {
    scrollToTop: () => window.scroll({ behavior: 'smooth', top: 0, left: 0 }),
    scrollTo: scrollCallbackFactory(),
    animateScroll: scrollCallbackFactory({ behavior: 'smooth' })
  }
};

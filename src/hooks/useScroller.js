
import { useContext, createContext, useCallback, useRef, useEffect } from 'react'

export const ScrollerContext = createContext({})

/***
 * Scrolls to top, unless element id is passed, it looks for element and scrollIntoView
 *
 * @param containerId
 */
export const scrollToTop = ({ containerId } = {}) => {
  if (containerId) {
    const el = document.getElementById(containerId)
    if (el) {
      el.scrollIntoView()
      return
    }
  }
  window.scroll({ behavior: 'smooth', top: 0, left: 0 })
}

/***
 * Registers component reference in Scroller context
 *
 * @param name
 * @returns {React.MutableRefObject<null>}
 */
export const useScrollable = (name) => {
  const ref = useRef(null)
  const scrollablesMap = useContext(ScrollerContext)

  useEffect(() => {
    scrollablesMap[name] = ref
    return () => delete scrollablesMap[name]
  }, [])
  return ref
}

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
    const cmpRef = ref || scrollablesMap[name]
    if (cmpRef) {
      cmpRef.current.scrollIntoView(params)
    }
  }, scrollablesMap[name])

  return {
    scrollTo: scrollCallbackFactory(),
    animateScroll: scrollCallbackFactory({ behavior: 'smooth' })
  }
}

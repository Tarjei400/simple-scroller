import React, { Fragment, useEffect, useState } from 'react'
import { useScroller, ScrollToElement, Scrollable, Link } from 'simple-scroller';

const Head = ({ children, ...rest}) => <h1 {...rest} > { children } </h1>

export const withScrollToTop = (component) => ({ to, ...rest}) => {
  const { scrollToTop } = useScroller(to)
  return <div onClick={scrollToTop}><component {...rest} /></div>
}

const Header = withScrollToTop(Head)

const LoremIpsum = () => (
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce massa turpis, tempor ut justo eu, porta hendrerit eros. Nulla vestibulum, leo eget sollicitudin aliquet, nibh nisl finibus metus, sit amet ornare lectus velit et nulla. Pellentesque nec euismod felis. Sed vestibulum velit justo, quis lacinia ligula auctor at. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales efficitur nunc et maximus. Proin facilisis mi quis dui lobortis eleifend. Ut dignissim nisl eu lectus dictum, eget tempus enim eleifend. Suspendisse at nunc ex. Duis vehicula mollis massa suscipit venenatis. Ut commodo eros justo, a finibus metus elementum quis. Quisque pellentesque tortor pellentesque massa accumsan, sit amet cursus nibh auctor. Cras at enim mollis, scelerisque augue ornare, volutpat eros. Cras nec lectus sem. Mauris eu velit viverra, facilisis diam vitae, aliquet augue. Proin suscipit dolor sit amet pretium euismod.</p>
)
export default () => {
  const [ shouldRender, setShouldRender ] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      console.log(setShouldRender, shouldRender)
      setShouldRender(true)
    }, 5000)
    return () => {}
  }, [])
  const ad = useScroller('asd')
  return (
    <Fragment>
      <Link to='test1'> Go to header1 </Link>
      <Link to='test2'>Go to header2</Link>
      <Link to='test3'>Go to header3 </Link>
      <Link to='test4'>Go to header4 </Link>
      <Link to='test5'>Go to header5 </Link>
      <Scrollable name='test1'><Header>Header1</Header></Scrollable>
      <LoremIpsum />
      <Scrollable name='test2'><Header>Header2</Header></Scrollable>
      <LoremIpsum />
      <Scrollable name='test3'><Header>Header3</Header></Scrollable>
      <LoremIpsum />
      <Scrollable name='test4'><Header>Header4</Header></Scrollable>
      <LoremIpsum />
      <Scrollable name='test5'><Header>Header5</Header></Scrollable>
      <LoremIpsum />
      { shouldRender ? <ScrollToElement name='test6'><Header>Header6</Header></ScrollToElement> : null }
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />

    </Fragment>
  )
}

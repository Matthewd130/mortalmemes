import styled from 'styled-components'
import h from 'react-hyperscript'

export const Layout = (props) => {
  return h(LayoutContainer,
    [
      h(Link, {href: "/"}, "home"),
      h(Link, {href: "/about"}, "about"),
      props.children
    ])
}

const Link = styled('a')`
padding-left: 5px;
`

const LayoutContainer = styled('div')`
margin: auto;
max-width: 800px;
`

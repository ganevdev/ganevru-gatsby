import { Box, Grommet } from 'grommet'
import { createGlobalStyle } from 'styled-components'
import { grommet } from 'grommet/themes'
import PropTypes from 'prop-types'
import React from 'react'

import { siteTheme } from '../site-theme'

const GlobalStyle = createGlobalStyle`
  img {
    max-width: 100%;
  }
  body {
    margin: 0;
  }
  a:hover {
    opacity: 0.9;
  }
`

const Layout = (props) => {
  return (
    <Grommet theme={grommet}>
      <Grommet theme={siteTheme}>
        <GlobalStyle />
        <Box align='center'>
          <Box width='large'>
            <Box margin={{ bottom: 'medium' }} />
            <Box
              background='light-3'
              round
              margin='medium'
              pad='large'
              elevation='medium'
            >
              {props.children}
            </Box>
            <Box margin={{ top: 'xlarge' }} />
          </Box>
        </Box>
      </Grommet>
    </Grommet>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

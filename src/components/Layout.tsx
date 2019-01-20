import { Box, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';
import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

import siteTheme from '../site-theme';

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
`;

const Layout = ({ children }: any): any => (
  <Grommet theme={grommet}>
    <Grommet theme={siteTheme}>
      <GlobalStyle />
      <Box align="center">
        <Box width="large">
          <Box margin={{ bottom: 'medium' }} />
          <Box
            background="light-3"
            round={true}
            margin="medium"
            pad="large"
            elevation="medium"
          >
            {children}
          </Box>
          <Box margin={{ top: 'xlarge' }} />
        </Box>
      </Box>
    </Grommet>
  </Grommet>
);

export default Layout;

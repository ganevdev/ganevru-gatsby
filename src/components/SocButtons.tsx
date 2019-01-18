import { Box, Text } from 'grommet';
import { Github, Twitter } from 'grommet-icons';
import React from 'react';

const SocButtons = () => (
  <Box gap="medium" width="small" direction="row-responsive">
    <a
      style={{
        textDecoration: 'none',
      }}
      href="https://twitter.com/Ganevru"
    >
      <Box
        justify="center"
        background="brand"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        direction="row"
        round
      >
        <Twitter size="medium" />
        <Text weight="bold" size="medium" margin={{ horizontal: 'xsmall' }}>
          @Ganevru
        </Text>
      </Box>
    </a>
    {/*  */}
    <a
      style={{
        textDecoration: 'none',
      }}
      href="https://github.com/Ganevru"
    >
      <Box
        justify="center"
        background="brand"
        pad={{ horizontal: 'medium', vertical: 'small' }}
        direction="row"
        round
      >
        <Github size="medium" />
        <Text weight="bold" size="medium" margin={{ horizontal: 'xsmall' }}>
          @Ganevru
        </Text>
      </Box>
    </a>
  </Box>
);

export default SocButtons;

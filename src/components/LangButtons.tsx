import { Link } from 'gatsby';
import { Box, Text } from 'grommet';
import propTypes from 'prop-types';
import React from 'react';

const LangButtons = (props: {}) => {
  const { pathname } = props;
  return (
    <Box gap="medium" width="small" direction="row-responsive">
      <Link
        style={{
          textDecoration: 'none'
        }}
        to="/"
      >
        <Box
          justify="center"
          background={pathname === '/' ? 'brand' : 'dark-6'}
          pad={{ horizontal: 'medium', vertical: 'xsmall' }}
          direction="row"
          round={true}
        >
          <Text weight="bold" size="medium" margin={{ horizontal: 'xsmall' }}>
            English
          </Text>
        </Box>
      </Link>
      {/*  */}
      <Link
        style={{
          textDecoration: 'none'
        }}
        to="/ru"
      >
        <Box
          justify="center"
          background={pathname === '/' ? 'dark-6' : 'brand'}
          pad={{ horizontal: 'medium', vertical: 'xsmall' }}
          direction="row"
          round={true}
        >
          <Text weight="bold" size="medium" margin={{ horizontal: 'xsmall' }}>
            Русский
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default LangButtons;

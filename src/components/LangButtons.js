import React, { Component } from 'react'
import { Link } from 'gatsby'
import { Box, Text } from 'grommet'

export default class LangButtons extends Component {
  render () {
    return (
      <Box gap='medium' width='small' direction='row-responsive'>
        <Link
          style={{
            textDecoration: 'none'
          }}
          to='/'
        >
          <Box
            justify='center'
            background='brand'
            pad={{ horizontal: 'medium', vertical: 'xsmall' }}
            direction='row'
            round
          >
            <Text weight='bold' size='medium' margin={{ horizontal: 'xsmall' }}>
              English
            </Text>
          </Box>
        </Link>
        {/*  */}
        <Link
          style={{
            textDecoration: 'none'
          }}
          to='/ru'
        >
          <Box
            justify='center'
            background='brand'
            pad={{ horizontal: 'medium', vertical: 'xsmall' }}
            direction='row'
            round
          >
            <Text weight='bold' size='medium' margin={{ horizontal: 'xsmall' }}>
              Русский
            </Text>
          </Box>
        </Link>
      </Box>
    )
  }
}

import React from 'react'
import Helmet from 'react-helmet'
import { Heading, Markdown, Box } from 'grommet'

import Layout from '../components/Layout'
import SocButtons from '../components/SocButtons'
import LangButtons from '../components/LangButtons'

const Page = props => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      meta={[
        { name: 'description', content: 'Ivan Ganev, JavaScript developer' }
      ]}
      title={'Ivan Ganev'}
    />
    <Heading margin={{ vertical: 'small' }}>Ivan Ganev</Heading>
    <LangButtons pathname={props.location.pathname} />
    <Markdown>
      {`
Hi, I'm a JavaScript developer. I prefer to work with [React js](https://reactjs.org/), especially with SSG [Gatsby js](https://www.gatsbyjs.org/) and [Grommet](https://grommet.io/). I also work with [Node js](https://nodejs.org/), and everything related to these technologies.
      
I am ready to work as a freelancer, write me here: **iganevru@gmail.com**

###I prefer:
* [graphQL](https://www.graphql.org/) over REST API.
* CSS in JS, especially [styled-components](https://www.styled-components.com/), over CSS and any css preprocessors (if it comes to React).
* [MongoDB](https://www.mongodb.com/) over any SQL database.
* [React js](https://reactjs.org/) over [Vue js](https://vuejs.org/).
* [Jest](https://jestjs.io) over [Mocha](https://mochajs.org/).
* [standard js](https://standardjs.com/) over [airbnb style](https://www.npmjs.com/package/eslint-config-airbnb-base).
* Any UI framework, especially [Grommet](https://grommet.io/), over starting from scratch.
* ES6+ features and [lodash](https://lodash.com) over old JS features - like loops ([eslint-plugin-no-loops](https://www.npmjs.com/package/eslint-plugin-no-loops)).


This is a list of what I prefer, but, of course, what I chose for myself does not mean that it is better for someone else.
      `}
    </Markdown>

    <Heading level='3' margin={{ vertical: 'xsmall' }}>
      You can find me here:
    </Heading>
    <SocButtons />

    <Markdown>
      {`
### My works:
[https://www.esportset.com](https://www.esportset.com) - my main project at the moment.  
[https://www.cyberset.org](https://www.cyberset.org) - russian version.

[gatsby-starter-blog-grommet](https://github.com/Ganevru/gatsby-starter-blog-grommet) - A Gatsby v2 starter based on Grommet v2 UI.

[ganevru-gatsby](https://github.com/Ganevru/ganevru-gatsby) - repository of this site.

[behance.net/IvanGanev](https://www.behance.net/IvanGanev) - some infographics.

### Courses:
[www.Codecademy.com/ivanganev](https://www.codecademy.com/ivanganev) 
      `}
    </Markdown>
    <Box margin={{ vertical: 'medium' }} />
    <LangButtons />
  </Layout>
)

export default Page

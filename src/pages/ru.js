import React from 'react'
import Helmet from 'react-helmet'
import { Heading, Markdown, Box } from 'grommet'

import Layout from '../components/Layout'
import SocButtons from '../components/SocButtons'
import LangButtons from '../components/LangButtons'

const Page = () => (
  <Layout>
    <Helmet
      htmlAttributes={{ lang: 'ru' }}
      meta={[
        { name: 'description', content: 'Иван Ганев, JavaScript разработчик' }
      ]}
      title={'Иван Ганев'}
    />
    <Heading margin={{ vertical: 'small' }}>Иван Ганев</Heading>
    <LangButtons />
    <Markdown>
      {`
Привет, я JavaScript разработчик. Работаю с [React js](https://reactjs.org/), особенно с SSG [Gatsby js](https://www.gatsbyjs.org/) и [Grommet](https://grommet.io/). Я так же работаю с [Node js](https://nodejs.org/), и всем что относится к этим технологиям.
      
Я работаю в качестве фрилансера, можете писать мне сюда: **iganevru@gmail.com**

###Я предпочитаю:
* [graphQL](https://www.graphql.org/) вместо REST API.
* CSS in JS, особенно [styled-components](https://www.styled-components.com/), вместо CSS и любых css препроцессоров (если речь идет о React).
* [MongoDB](https://www.mongodb.com/) вместо любых SQL баз данных.
* [React js](https://reactjs.org/) вместо [Vue js](https://vuejs.org/).
* [Jest](https://jestjs.io) вместо [Mocha](https://mochajs.org/).
* [standard js](https://standardjs.com/) вместо [airbnb style](https://www.npmjs.com/package/eslint-config-airbnb-base).
* Любой UI фреймворк, особенно [Grommet](https://grommet.io/), вместо создания всего с нуля.

Это лист того с чем я предпочитаю работать, а не список того что я считаю лучше в любых ситуациях.
      `}
    </Markdown>

    <Heading level='3' margin={{ vertical: 'xsmall' }}>
      Меня можно найти здесь:
    </Heading>
    <SocButtons />

    <Markdown>
      {`
### Мои работы:
[https://www.esportset.com](https://www.esportset.com)  
[https://www.cyberset.org](https://www.cyberset.org) - то же самое, но на русском.

[gatsby-starter-blog-grommet](https://github.com/Ganevru/gatsby-starter-blog-grommet) - стартер для Gatsby v2 основанный на Grommet v2 UI.

[ganevru-gatsby](https://github.com/Ganevru/ganevru-gatsby) - репозитарий этого сайта.

[behance.net/IvanGanev](https://www.behance.net/IvanGanev) - некоторая инфографика.

### Курсы:
[www.Codecademy.com/ivanganev](https://www.codecademy.com/ivanganev) 
      `}
    </Markdown>
    <Box margin={{ vertical: 'medium' }} />
    <LangButtons />
  </Layout>
)

export default Page

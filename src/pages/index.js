import * as React from 'react'

import Layout from "../components/layout"
import Promo from '../components/Promo/Promo';
import Circle from '../components/Circle';
import Modules from '../components/Modules';
import Seo from '../components/seo';
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
      <Promo />

      <Circle />

      <Modules id='modules' />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

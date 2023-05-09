import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Carousel from '../components/Carousel';
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>

    <Carousel /> 

  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage

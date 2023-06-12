import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ThirdCarousel from "../components/ThirdCarousel"

const ThirdPage = () => {


    return (
        <Layout>
          <ThirdCarousel title='Концепция' />
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />


export default ThirdPage;


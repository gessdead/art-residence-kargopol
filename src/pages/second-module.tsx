import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import SecondCarousel from "../components/SecondCarousel"

const ThirdPage = () => {


    return (
        <Layout>
          <SecondCarousel title='Концепция' />
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />



export default ThirdPage;


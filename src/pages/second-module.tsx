import * as React from "react"

import Layout from "../components/layout"
import { Container } from "@mui/material"
import Seo from "../components/seo"
import SecondCarousel from "../components/SecondCarousel"

const ThirdPage = () => {


    return (
        <Layout>
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <SecondCarousel title='Концепция' />
            </Container>
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />



export default ThirdPage;


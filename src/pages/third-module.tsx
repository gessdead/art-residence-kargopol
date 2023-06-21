import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ThirdCarousel from "../components/ThirdCarousel"
import { Container } from "@mui/material"

const FourthPage = () => {


    return (
        <Layout>
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <ThirdCarousel title='Концепция' />
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Третий модуль" />


export default FourthPage;


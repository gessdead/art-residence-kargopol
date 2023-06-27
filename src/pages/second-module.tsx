import * as React from "react"

import { Container } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Carousel from "../components/Carousel"

const ThirdPage = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query secondCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "2ndCarousel"}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData(
                            layout: CONSTRAINED, 
                            quality: 100, 
                            formats: JPG,
                            placeholder: BLURRED
                        ),
                        fluid {
                            originalName
                        }
                    }
                }
            }
        }
    }`);


    return (
        <Layout>
            <Container maxWidth='lg' sx={{ paddingTop: "70px" }}>
                <Carousel title='Концепция' slidesData={IMAGES_DATA} />
            </Container>
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />



export default ThirdPage;


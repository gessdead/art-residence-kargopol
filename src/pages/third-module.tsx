import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";


const FourthPage = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query thirdCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "3rdCarousel"}}) {
            edges {
                node {
                    childImageSharp {
                        gatsbyImageData,
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
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Carousel title='Концепция' slidesData={IMAGES_DATA} />
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Третий модуль" />


export default FourthPage;


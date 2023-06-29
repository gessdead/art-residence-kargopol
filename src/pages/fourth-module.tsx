import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";


const FourthModule = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query fourthCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "4thCarousel"}}) {
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
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Carousel title='Концепция' slidesData={IMAGES_DATA} />
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Четвертый модуль" />


export default FourthModule;


import * as React from "react";

import { Container } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";
import HeadBlock from "../components/HeadBlock";

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
            <HeadBlock
                url='/first-module'
                image={bgImage.file.childImageSharp.original.src}
                title='дом, с которого все началось'
                descr='Один из пустующих домов, который принадлежал каргопольскому купцу А.П. Лёхову в XIX 
                веке, включен в креативный кластер «Фамилия». Он станет местом развития исторической 
                городской среды.'
            />
            <Container maxWidth='lg' sx={{ paddingTop: "70px" }}>
                <Carousel title='Концепция' slidesData={IMAGES_DATA} />
            </Container>
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />



export default ThirdPage;


import * as React from "react";

import { Container, Typography } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
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
        file(relativePath: {eq: "secondModule/headPhoto.jpg"}) {
            childImageSharp {
                original {
                    src
                }
            }
        }
    }`);


    return (
        <Layout>
            <HeadBlock
                image={IMAGES_DATA.file.childImageSharp.original.src}
                title='какой он - каргополь?'
                descr='Типология деревянной застройки города'
                fontColor={'white'}
            />
            <Container maxWidth='lg' sx={{ paddingTop: "70px" }}>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    В этом модуле резиденты выявляли типологию деревянной застройки города и пыталисть 
                    ощутить, как она сказывается на архитектурно-визуальном восприятии города. Масштабное 
                    исследование городского полотна и чувства, которое оно вызвало у его авторов.
                </Typography>
                <Carousel title='' slidesData={IMAGES_DATA} />
            </Container>
            <Container maxWidth='xl'>
                <StaticImage
                    src="../images/participants.png"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography variant="body1" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    участники модуля
                </Typography>
                <StaticImage
                    src="../images/secondModule/participants.jpg"
                    layout="fullWidth"
                    style={{ width: '100%', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Container>
        </Layout>
      )
} 

export const Head = () => <Seo title="Второй модуль" />



export default ThirdPage;


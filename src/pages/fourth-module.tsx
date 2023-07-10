import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";
import HeadBlock from "../components/HeadBlock";


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
        file(relativePath: {eq: "fourthModule/headPhoto.jpg"}) {
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
                title='визуальный язык каргополя'
                descr='Исследовательская работа по выявлению материальных и нематериальных знаков и символов 
                городского пространства и его исторической архитектуры.'
                fontColor={'white'}
            />
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Typography variant="body1" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    Данная работа - первый этап на пути создания бренд -бука и дизайн-кода города Каргополя. 
                    В ходе работы была предпринята попытка почувствовать и закодировать объемно - 
                    пространственную ткань города, а также выявить характерные элементы в его архитектурном, 
                    декоративном, плоскостном, цветовом и дизайнерском облике. 
                </Typography>
                <br/>
                <Typography variant="body1" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    IV модуль - завершающий этап Арт-Резиденции 2022-2023 гг. 
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
                    src="../images/fourthModule/participants.jpg"
                    layout="fullWidth"
                    style={{ width: '100%', margin: '0 auto' }}
                    quality={100}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Четвертый модуль" />


export default FourthModule;


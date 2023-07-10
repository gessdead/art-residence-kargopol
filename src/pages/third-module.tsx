import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";
import HeadBlock from "../components/HeadBlock";


const FourthPage = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query thirdCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "3rdCarousel"}}) {
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
        file(relativePath: {eq: "thirdModule/headPhoto.jpg"}) {
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
                title='новые возможности'
                descr='Концепция развития и интеграции кластера «Фамилия» в градостроительный, культурный и 
                событийный контексты города Каргополя. Возможности приспособления нескольких домов 
                кластера под современное использование.'
                fontColor={'white'}
            />
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Восстановление деревянных зданий в кластере «Фамилия» - это интересный пример 
                    ревитализации, который может помочь сохранить историческое наследие региона и создать 
                    новые возможности для творческих профессионалов и местных жителей.
                </Typography>
                <br/>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    III модуль Арт-Резиденции поднимал несколько вопросов. В том числе: возможные векторы 
                    развития благоустройства, социо-культурное программирование и вовлечение горожан в 
                    диалоги о будущем города.
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
                    src="../images/thirdModule/participants.jpg"
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

export const Head = () => <Seo title="Третий модуль" />


export default FourthPage;


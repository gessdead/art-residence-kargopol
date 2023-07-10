import * as React from "react";
import { Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Carousel from "../components/Carousel";
import Seo from "../components/seo";
import HeadBlock from "../components/HeadBlock";
import HGallery from "../components/HGallery";

const SecondPage = () => {
    // const IMAGES_DATA = useStaticQuery(graphql`query firstCarouselImagesQuery {
    //     allFile(filter: {relativeDirectory: {eq: "mainCarousel"}}) {
    //         edges {
    //             node {
    //                 childImageSharp {
    //                     gatsbyImageData(
    //                         layout: CONSTRAINED, 
    //                         quality: 100, 
    //                         formats: JPG,
    //                         placeholder: BLURRED
    //                     ),
    //                     fluid {
    //                         originalName
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }`);

    const bgImage = useStaticQuery(graphql`query getFirstModuleHeadBlockImage {
        file(relativePath: {eq: "firstModule/headImage.jpg"}) {
            childImageSharp {
                original {
                    src
                }
            }
        }
    }`)

    const photosArr = [
        '../images/firstModule/gallery/1.jpg',
        '../images/firstModule/gallery/2.jpg',
        '../images/firstModule/gallery/3.jpg',
        '../images/firstModule/gallery/4.jpg',
        '../images/firstModule/gallery/5.jpg'
        
    ];

    return (
        <Layout>
            <HeadBlock
                image={bgImage.file.childImageSharp.original.src}
                title='дом Лёхова'
                descr='Концепция развития Арт-резиденции'
            />
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Предполагается, что дом купца Лёхова станет сердцем проекта Арт-Резиденции,
                    его постоянным домом. А это значит что пространство должно отвечать многим требованиям проекта, 
                    стать универсальным для различного рода творческих мероприятий и уметь адаптироваться 
                    под текущие сценарии и задумки своих резидентов. В рамках первого модуля команда резидентов представила,
                    как могло бы выглядеть пространство дома в будущем.
                </Typography>
            </Container>

            <HGallery>
                <StaticImage
                    src="../images/firstModule/gallery/1.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/2.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/3.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </HGallery>

            <Container maxWidth='xl'>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                Анфиладный тип планировки дома помогает выделить основной модуль концепции - само 
                помещение.Назначая ему функцию, модули можно комбинировать в анфилады, образующие 
                функциональную зону
                </Typography>
            </Container>

            <HGallery>
                <StaticImage
                    src="../images/firstModule/gallery/4.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/5.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/6.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </HGallery>

            <Container maxWidth='xl'>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Главной же идеей пространства должно стать непрерывное взаимодействие приезжих рездентов с мастерами и
                    заинтересованными жителями города. И пространство дома - это универсальное полотно для всевозможных сценариев 
                    этого общения и совместной работы.
                </Typography>
            </Container>

            <HGallery>
                <StaticImage
                    src="../images/firstModule/gallery/7.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/8.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/9.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/10.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/11.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/12.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/13.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/14.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/15.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/16.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/17.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/18.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/19.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/20.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/21.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/22.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <StaticImage
                    src="../images/firstModule/gallery/23.jpg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ width: '960px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </HGallery>
        </Layout>
    )
}

export const Head = () => <Seo title="Первый модуль"/>

export default SecondPage;

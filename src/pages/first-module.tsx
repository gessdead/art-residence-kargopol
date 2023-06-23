import * as React from "react"
import { Container, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Carousel from "../components/Carousel" 
import Seo from "../components/seo"

const SecondPage = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query firstCarouselImagesQuery {
        allFile(filter: {relativeDirectory: {eq: "mainCarousel"}}) {
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
                <Typography variant="h3" sx={{ textAlign: "center" }}>
                    ПЕРВЫЙ МОДУЛЬ
                </Typography>
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                    Концепция развития Арт-резиденции в доме купца А.П. Лёхова
                </Typography>
                <StaticImage
                    src="../images/firstModule/circle.png"
                    loading="eager"
                    layout="fullWidth"
                    style={{ maxWidth: "150px", margin: "0 auto" }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography variant="body1">
                    Предполагается, что дом купца Лёхова станет сердцем проекта Арт-Резиденции, его постоянным домом. А
                    это значит что пространство должно отвечать многим требованиям проекта, стать универсальным для
                    различного рода творческих мероприятий и уметь адаптироваться под текущие сценарии и задумки своих
                    резидентов.
                </Typography>
                <Typography variant="body1">
                    Именно поэтому за основу концепции взята идея модульности, как главного инструмента
                    трансформируемого пространства.
                </Typography>
                <StaticImage
                    src="../images/firstModule/floors-plan.png"
                    loading="eager"
                    layout="fullWidth"
                    style={{ maxWidth: "250px", margin: "0 auto" }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />

                <Typography variant="body1">
                    Анфиладный тип планировки дома помогает выделить основной модуль концепции - само помещение.
                </Typography>
                <Typography variant="body1">
                    Назначая ему функцию, модули можно комбинировать в анфилады, образующие функциональную зону.
                </Typography>
            </Container>

            <Carousel title='Концепция' slidesData={IMAGES_DATA} />
        </Layout>
    )
}

export const Head = () => <Seo title="Первый модуль"/>

export default SecondPage;

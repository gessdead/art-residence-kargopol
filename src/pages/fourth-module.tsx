import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeadBlock from "../components/HeadBlock";
import GalleryWrapper from "../components/GalleryWrapper";

const FourthModule = () => {
    const IMAGES_DATA = useStaticQuery(graphql`query fourthCarouselImagesQuery {
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
                <Typography variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    Данная работа - первый этап на пути создания бренд-бука и дизайн-кода города Каргополя. 
                    В ходе работы была предпринята попытка почувствовать и закодировать объемно-пространственную ткань города, а также выявить характерные элементы в его архитектурном, 
                    декоративном, плоскостном, цветовом и дизайнерском облике. 
                </Typography>
                <br/>
                <Typography variant="h5" marginBottom='20px' align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    IV модуль - завершающий этап Арт-Резиденции 2022-2023 гг. 
                </Typography>

                <StaticImage
                    src="../images/moduleIcons/fourth.png"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />

                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    часть 1 <br/>
                    из чего состоит город?
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Объемные фотографические материалы, собранные резидентами в течение 3-ех предыдущих модулей 
                    были вновь проанализированы в попытке найти закономерности и правила городской среды Каргополя.
                    На основании наблюдений были выделены три главных пространственных элемента, играющих 
                    значительную роль в визуальных раскрытиях и перспективах города.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/3.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/4.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/5.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/6.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/7.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/8.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/9.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/10.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/11.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/12.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/13.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/14.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/15.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/16.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/17.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/18.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/19.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/20.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/21.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/22.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/23.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/24.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/25.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>
                <Typography
                    style={{ 
                        maxWidth: '550px',
                        padding: '12px 0',
                        borderTop: '2px solid gray',
                        borderBottom: '2px solid gray',
                        margin: '0 auto 30px'
                        
                    }}
                    variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                        Река Онега, обильное озеленение и низкое 
                        широкое небо - три главных составляющих
                        визуального образа города.
                </Typography>

                
                <StaticImage
                    src="../images/fourthModule/sun.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    часть 2 <br/>
                    пересечение и наложение
                </Typography>
                <Typography
                    style={{ 
                        maxWidth: '550px',
                        padding: '12px 0',
                        borderTop: '2px solid gray',
                        borderBottom: '2px solid gray',
                        margin: '0 auto 30px'
                        
                    }}
                    variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                        НАЛОЖЕНИЕ ОБРАЗОВ КАК СВИДЕЛЬСТВО ИСТОРИИ
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Соборная площадь - отражение этого взаимного наложения. Находясь внутри ты словно физически 
                    переносишься в до регулярный город, находясь на периферии - видишь результаты этой регулярности.
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    История оставившая после себя знаки и символы прошедших эпох. История заключенная в 
                    материале, воплощенная в элементах на фасадах, в цвете, в скате крыши и так далее.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/26.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/27.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/28.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/29.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/30.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/31.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/32.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>
                <Typography variant="body1" align="center" marginBottom='30px' fontFamily='var(--font-sans)'>
                    Про дома можно говорить много. <br/>
                    Каменные, деревянные, комбинированные, каменные резные, каменные строгие, деревянные похожие 
                    на каменные, массивные и маленькие, плоские и игривые.
                </Typography>
                
                
                <StaticImage
                    src="../images/fourthModule/arka.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    пазл 5 <br/>
                    каменное: культовое
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Светящиеся летом, незаметные зимой. Эти хранители истории кодируют город на своем громогласном 
                    диалекте. И главными инструментами их общения выступают белое полотно цвета и эффект ровной, 
                    массивной протяженности, что создает игра плоскостей вместе с белой штукатурной отделкой камня.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/33.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/34.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/35.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/36.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/37.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/38.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/39.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>


                <StaticImage
                    src="../images/fourthModule/pazzle.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    пазл 6 <br/>
                    каменное: гражданское
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Гражданская каменная архитектурная - переходная или связующая между каменным культовым и 
                    деревянным. В архитектурных приемах и декоративных элементах пересекаются сюжеты, характерные 
                    для обеих этих групп.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/40.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/41.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/42.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/43.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/44.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>


                <StaticImage
                    src="../images/fourthModule/house.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    пазл 7 <br/>
                    деревянное: купеческое и крестьянское
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Деревянная архитектура Каргополя - самая богато представленная,но при этом и самая уязвимая.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/45.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/46.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/47.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/48.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/49.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/50.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/51.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/52.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/53.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>

                
                <StaticImage
                    src="../images/fourthModule/swan.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    пазл 8 <br/>
                    личное: рядом с архитектурой
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Важными элементами визуального языка города являются не только архитектура, но и то, 
                    что находится подле нее, и часто остается без внимания исследователей.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/54.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/55.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/56.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/57.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/58.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/59.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/60.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/61.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/62.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/63.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/64.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>


                <StaticImage
                    src="../images/fourthModule/star.svg"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    пазл сложился <br/>
                    мозаика каргополя
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Что говорят о каргополе его детали? Собираются ли они в единую картину или пока существуют фрагменты 
                    которым не находится места? Многоплановый, многоцветный, многоликий, многоголосый. 
                    Видите ли вы его таким каким увидели его мы?
                </Typography>
                <br/>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Стоит ли подчеркивать это многообразие или может быть стоит что-то сгладить и приглушить - эти вопросы поднимают куда более сложную дискуссию.
                </Typography>
                <GalleryWrapper>
                    <StaticImage
                        src="../images/fourthModule/gallery/65.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/66.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/67.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/68.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/69.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/59.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/60.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/61.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/62.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/63.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/fourthModule/gallery/64.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </GalleryWrapper>
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


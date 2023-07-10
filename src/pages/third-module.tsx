import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Typography } from "@mui/material";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";
import Carousel from "../components/Carousel";
import HeadBlock from "../components/HeadBlock";
import HGallery from "../components/HGallery";


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
                <Typography variant="h5" align="center" fontFamily='var(--font-sans)'>
                    Восстановление деревянных зданий в кластере «Фамилия» - это интересный пример 
                    ревитализации, который может помочь сохранить историческое наследие региона и создать 
                    новые возможности для творческих профессионалов и местных жителей.
                </Typography>
                <br/>
                <Typography variant="h5" align="center" fontFamily='var(--font-sans)'>
                    III модуль Арт-Резиденции поднимал несколько вопросов. В том числе: возможные векторы 
                    развития благоустройства, социо-культурное программирование и вовлечение горожан в 
                    диалоги о будущем города.
                </Typography>
                <br/>
                <br/>
                <StaticImage
                    src="../images/moduleIcons/third.png"
                    layout="fullWidth"
                    style={{ width: '200px', margin: '0 auto', marginBottom: '20px' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
                <Typography variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    глава 1 <br/>
                    про то, что мы увидели и почувствовали
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    глава 1 посвящена проблемам, которые были выявлены резидентами во время исследования и встреч 
                    с местными жителями. Для проблем были сформулированы возможные пути решения, а также 
                    рассмотрены некоторые кейсы с других малых городах, которые уже сталкивались с анагичными 
                    вопросами и имеют опыт их решения.
                </Typography>
                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/4.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/5.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/6.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/7.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/8.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/9.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/10.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/11.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/12.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/13.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/14.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/15.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>
                {/* <Carousel title='' slidesData={IMAGES_DATA} /> */}

                <Typography
                    style={{ 
                        maxWidth: '550px',
                        padding: '12px 0',
                        borderTop: '2px solid gray',
                        borderBottom: '2px solid gray',
                        margin: '0 auto 30px'
                        
                    }}
                    variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    Интенсивность и качество восприятия города 
                    зависит от состояния благоустройства городской 
                    среды
                </Typography>
                
                <StaticImage
                    src="../images/thirdModule/bird.svg"
                    layout="fullWidth"
                    style={{ width: '400px', margin: '0 auto' }}
                    quality={100}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />

                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    глава 3 <br/>
                    позиционирование кластера
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
                    ЗАЧЕМ НУЖЕН КЛАСТЕР «ФАМИЛИЯ»?
                </Typography>
                
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Дома кластера « Фамилия » могли бы стать очагами творчества и гостеприимства.
                    <br/>
                    Разбросанные по городу они бы стали импульсами развития для прилегающих квартальчиков и 
                    аккумулировали бы внимание, желания и силы жителей соседних домов.
                </Typography>

                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/23.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/24.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/25.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/26.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>

                
                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    глава 4 <br/>
                    про то, как на примере трех домов можно начать взаимодействие
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Дома кластера - как узлы, которые каждый в своем районе создат дискуссию и свою новую историю.
                </Typography>
                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/27.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/28.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/29.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>


                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    главка 4.1 <br/>
                    про дом семьи
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Приземистый, одноэтажный, кажущийся небольшим с улицы купеческий стройный домик на 
                    Октябрьской 39 за счет своего объемного пространственного решения и конфигурации создает образ такого гостеприимного дома. 
                    Кажущийся с угла улицы небольшим - внутри в нем найдется место 
                    для каждого. 
                </Typography>
                <br />
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Дом, куда тебе хочется прийти после занятий, где ты можешь пообщаться со своими друзьями, 
                    познакомиться с кем-нибудь, чем-то заняться - в целом провести свое время. «Близкий дом».
                </Typography>
                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/31.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/32.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/33.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/34.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/35.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/36.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/37.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/38.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/39.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/40.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>
                

                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    главка 4.2 <br/>
                    про дом берегини
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Образ горячей печи в Каргополе - это не просто печь, а целое пространство, сочетающее в себе 
                    функции приготовления пищи, отопления помещения и украшения интерьера. Внутри печи есть 
                    множество полок и отверстий, где можно хранить посуду, сушить грибы и ягоды, а также засыпать 
                    дрова.
                </Typography>
                <br />
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Нам показалось интересным сравнением дома с печью. Достаточно потратить какое-то время на 
                    растопку, как пространство дома преобразовывается. Вот уже и тепло, и калитки подоспели, и друзья 
                    уже все в сборе, сидят, радостные и довольные.
                </Typography>
                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/42.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/43.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/44.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/45.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/46.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/47.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/48.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/49.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/50.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/51.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/52.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/53.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>


                <Typography marginBottom='20px' variant="h5" align="center" fontWeight='700' fontFamily='var(--font-sans)'>
                    главка 4.3 <br/>
                    про дом Лехова
                </Typography>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Монументальное, оформленное в классицизме здание на Гагарина 2, брагодаря двум рядам окон по 
                    южному фасаду создает несколько игривый образ. Несмотря на очевидную строгость,
                    обилие плоскости и минималистичный классический декор, многочисленные окна «играют» на солнце.
                </Typography>
                <br />
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Дом Лехова - то, с чего все для нас началось. Образ деятельного, спонтанного немного 
                    сумасшеднего дома - дом Лехова основателен и игрив одновременно.
                </Typography>
                <br/>
                <Typography variant="body1" align="center" fontFamily='var(--font-sans)'>
                    Каким должен быть центр Арт-Кластера? Это такой большой сундук, в котором постоянно кипит энергия. 
                    Это место встречи, место коммуникации, место генерации идей. Это место отдыха и вдохновения.
                </Typography>
                <HGallery>
                    <StaticImage
                        src="../images/thirdModule/gallery/55.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/56.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/57.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/58.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                    <StaticImage
                        src="../images/thirdModule/gallery/59.jpg"
                        layout="fullWidth"
                        style={{ width: '960px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </HGallery>
                
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


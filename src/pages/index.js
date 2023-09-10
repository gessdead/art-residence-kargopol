import * as React from 'react'

import Layout from "../components/layout"
import ResponsiveAppBar from '../components/AppBar';
import Promo from '../components/Promo/Promo';
import Modules from '../components/Modules';
import Seo from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';
import { Typography, Container} from '@mui/material';
import HeadBlock from '../components/HeadBlock';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage = () => {
    const bgImage = useStaticQuery(graphql`query getMainPageHeadBlockImage {
        file(relativePath: {eq: "leha-main.jpg"}) {
            childImageSharp {
                original {
                    src
                }
            }
        }
    }`)

    return (
        <Layout 
          withoutAppBar={true}>
          
            <Promo />
            
            <ResponsiveAppBar />
        
            <div style={{
                margin: '20px 0'
            }}>
                <StaticImage
                    src="../images/bird.svg"
                    loading="eager"
                    layout="fullWidth"
                    style={{ maxWidth: '180px', margin: '0 auto' }}
                    quality={95}
                    formats={["auto", "webp"]}
                    alt="Дом Лехова"
                />
            </div>
        
            <Container maxWidth='lg'>
                    <Typography 
                        variant='body1' 
                        mb={6}
                        fontFamily='var(--font-sans)'
                        marginBottom='0px'
                        fontWeight='bold'
                        textAlign='center'>
                        это - Каргополь
                    </Typography>
                    <Typography 
                        variant='body1' 
                        mb={6}
                        marginBottom='20px'
                        fontFamily='var(--font-sans)' 
                        fontWeight='bold'
                        textAlign='center'>
                        это - Арт-Резиденция
                    </Typography>
            
                    <Typography 
                        variant='body1' 
                        mb={6}
                        marginBottom='20px'
                        fontFamily='var(--font-sans)' 
                        fontWeight='bold'
                        textAlign='center'>
                        История о том, как небольшая НКО занимается реставрацией деревянного наследия.
                        <br/>
                        Аварийные деревянные дома конца 19 в. были расселены и объединены в единый кластер «Фамилия». 
                        Тогда возник вопрос – как привлечь внимание и ресурсы к разрушающимся домам? Так появился проект Арт-резиденции «Архитектурная мозаика Каргополя», 
                        поддержанный Президентским фондом культурных инициатив в 2022 году.
                        <br/>
                        Молодые архитекторы и реставраторы, дизайнеры и художники участвовали в первой арт-резиденции. 
                        В рамках четырех модулей они создавали концепцию размещения резиденции в одном из домов, 
                        исследовали деревянную застройку города и архитектурный код Каргополя. 
                        Благодаря проекту были проведены первые противоаварийные работы, 
                        но даже более того - проект объединил разных людей одной целью и позволил обрести новых друзей и единомышленников.
                    </Typography>

                    <div style={{
                        margin: '20px 0'
                    }}>
                        <StaticImage
                            src="../images/separator-arrow.png"
                            loading="eager"
                            layout="fullWidth"
                            style={{ maxWidth: '400px', margin: '0 auto' }}
                            quality={100}
                            formats={["auto", "webp"]}
                            alt="Дом Лехова"
                        />
                    </div>
            </Container>
        
            <HeadBlock
                url='/first-module'
                image={bgImage.file.childImageSharp.original.src}
                title='дом, с которого все началось'
                descr='Один из пустующих домов, который принадлежал каргопольскому купцу А.П. Лёхову в XIX 
                веке, включен в креативный кластер «Фамилия». Он станет местом развития исторической 
                городской среды.'
            />

                <div style={{
                    margin: '20px 0'
                }}>
                    <StaticImage
                        src="../images/separator.png"
                        loading="eager"
                        layout="fullWidth"
                        style={{ maxWidth: '500px', margin: '0 auto' }}
                        quality={100}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </div>
        
            <Modules />
      
        </Layout>
      )
};
export const Head = () => <Seo title="Home" />

export default IndexPage;

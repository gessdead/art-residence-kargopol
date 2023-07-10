import * as React from 'react';
import { graphql, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import HeadBlock from '../components/HeadBlock';
import LaunchIcon from '@mui/icons-material/Launch';

const AboutPage = () => {
    const bgImage = useStaticQuery(graphql`query getAboutHeadBlockImage {
        file(relativePath: {eq: "nofuture.jpg"}) {
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
                image={bgImage.file.childImageSharp.original.src}
                title='Будущего нет'
                descr='пока что.'
                fontColor={'white'}
                url={'https://art-kargopol.ru/2022/08/10/proekt-art-rezidentsiya-arhitekturnaya-mozaika-kargopolya/'}
                buttonText='Поддержать проект, чтобы появилось'
                outerButton={true}
                buttonIcon={ <LaunchIcon />}
            />
        </Layout>
    )
};

export const Head = () => <Seo title="О проекте"/>

export default AboutPage;
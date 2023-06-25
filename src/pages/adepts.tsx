import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getImage } from "gatsby-plugin-image";
import Adept from "../components/Adept";

const AdeptsPage = () => {
    const IMAGES_DATA = useStaticQuery(graphql`
        query adeptsPhotosQuery {
            allFile(filter: {relativeDirectory: {eq: "adepts"}}) {
                edges {
                    node {
                        childImageSharp {
                            gatsbyImageData
                        }
                    }
                }
            }
        }`);

    return (
        <Layout>
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Grid 
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: 'flex', padding: '20px 0' }}>
                        {IMAGES_DATA.allFile.edges.map(({ node }) => 
                        <Grid item xs={12} sm={6} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                            <Adept photo={node.childImageSharp.gatsbyImageData} />
                        </Grid>
                    )}
                </Grid>
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Контакты" />


export default AdeptsPage;
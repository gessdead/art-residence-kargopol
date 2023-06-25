import * as React from "react";

import { graphql, useStaticQuery } from "gatsby";
import { Container, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';

const ContactsPage = () => {
    return (
        <Layout>
            <Container maxWidth='xl' sx={{ paddingTop: "70px" }}>
                <Grid 
                    container
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ display: 'flex', padding: '20px 0' }}>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center' }}>
                        <StaticImage
                            src="../images/contacts/olga.png"
                            loading="lazy"
                            layout="fullWidth"
                            style={{ width: '360px', height: '360px' }}
                            quality={95}
                            formats={["auto", "webp"]}
                            alt="Дом Лехова"
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5">
                            Ольга Кабринская - Координатор проекта
                        </Typography>
                        <br/>
                        <Typography variant="body1">
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PlaceIcon />
                                <span style={{ marginLeft: '10px'}}>
                                    164110, Архангельская область,
                                    г. Каргополь, пр. Октябрьский, д. 64, оф. 11
                                </span>
                            </div>
                            <br/>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <PhoneIcon />
                                <a href='tel:+79214902170' style={{ marginLeft: '10px'}}>
                                    +7 (921) 490-21-70
                                </a>
                            </div>
                            <br/>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <EmailIcon />
                                <a href='mailto:info@art-kargopol.ru' style={{ marginLeft: '10px'}}>
                                    info@art-kargopol.ru
                                </a>
                            </div>
                            
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Container>
        </Layout>
      )

} 

export const Head = () => <Seo title="Контакты" />


export default ContactsPage;
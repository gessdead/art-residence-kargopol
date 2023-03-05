import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Container, Grid, Typography } from '@mui/material';

const Circle = () => (
    <Container maxWidth='xl'>
        <Grid container spacing={4} sx={{ padding: '50px 0', display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} md={6}>
                <div>
                    <StaticImage
                        src="../images/leha-circle.png"
                        loading="eager"
                        layout="fullWidth"
                        style={{ maxWidth: '450px', margin: '0 auto' }}
                        quality={95}
                        formats={["auto", "webp"]}
                        alt="Дом Лехова"
                    />
                </div>
            </Grid>
            <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ fontWeight: 'lighter', textAlign: 'justify' }}>
                    Один из пустующих домов, принадлежавший в 19 веке каргопольскому купцу А.П.Лёхову и включенный
                    в креативный кластер «Фамилия» станет местом притяжения и развития исторической городской среды.
                    Арт-резиденция «Архитектурная мозаика Каргополя» – это жизнь и работа в необычной творческой среде,
                    в доме, являющемся объектом культурного наследия, это коллаборация начинающих и опытных архитекторов.
                </Typography>
            </Grid>
        </Grid>
    </Container>
)

export default Circle;
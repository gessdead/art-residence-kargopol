import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Container, Typography } from "@mui/material"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Container maxWidth='lg' sx={{ paddingTop: "70px" }}>
      <Typography variant="h2" align="center" fontFamily='var(--font-sans)'>
        Такой страницы нет 😢
      </Typography>
      <br/>
      <Typography variant="h4" align="center" fontFamily="var(--font-sans)">
        Вернемся  <Link to={'/'}>домой</Link>?
      </Typography>
    </Container>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

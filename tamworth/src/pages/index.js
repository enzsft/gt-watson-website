import React from "react"
import styled from "styled-components"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Hero } from "../components/hero"
import { OpeningTimes } from "../components/opening-times"
import { Intro } from "../components/intro"
import { Treatments } from "../components/treatments"
import { Contact } from "../components/contact"
import { Prices } from "../components/prices"
import { page, spacers } from "../theme"

const SiteWrap = styled.main`
  max-width: ${page.width};
  margin: 0 auto;
  padding: ${spacers.md};
`

const IndexPage = () => (
  <Layout>
    <SEO title="G.T. Watson Chiropody and Podiatry" />
    <Hero />
    <SiteWrap>
      <OpeningTimes />
      <Treatments />
      <Prices />
      <Intro />
      <Contact />
    </SiteWrap>
  </Layout>
)

export default IndexPage

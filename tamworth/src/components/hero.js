import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { spacers, typography } from "../theme"
import { md } from "../utils"

const HeroArea = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
`

const HeroContent = styled.div`
  max-width: 50rem;
  margin: 0 auto;

  padding: ${spacers.md};

  ${md(`
      padding: ${spacers.lg} ${spacers.md};
    `)}

  text-align: center;
`

const HeroTitle = styled.h1`
  padding-bottom: ${spacers.sm};

  font-size: ${typography.fontSizes.md};

  ${md(`
      font-size: ${typography.fontSizes.md};
      padding-bottom: ${spacers.md};
    `)}
`

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroBrandImage: file(relativePath: { eq: "hero-brand.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroArea>
      <HeroContent>
        <Img
          fluid={data.heroBrandImage.childImageSharp.fluid}
          alt="GT Watson Chiropody Clinic"
        />
        <HeroTitle>
          Chiropody and Podiatry that's tailored to your needs
        </HeroTitle>
        <span>Tamworth, Polesworth, Whittington & Lichfield</span>
      </HeroContent>
    </HeroArea>
  )
}

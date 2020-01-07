import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { colors, nav, spacers, typography } from "../theme"
import { md } from "../utils"

const HeroWrap = styled.div`
  position: relative;
  text-align: center;
`

const HeroImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh - ${nav.height.def});

  ${md(`
      height: calc(100vh - ${nav.height.md});
  `)}
`

// const HeroContent = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 15%;
//   right: 15%;
//   transform: translateY(-50%);

//   padding: ${spacers.md};
//   background-color: rgba(0, 0, 0, 0.5);

//   ${md(`
//       padding: ${spacers.lg} ${spacers.md};
//     `)}
// `

// const HeroTitle = styled.h1`
//   padding-bottom: ${spacers.sm};

//   font-size: ${typography.fontSizes.md};

//   color: ${colors.white};

//   ${md(`
//       font-size: ${typography.fontSizes.xl};
//       padding-bottom: ${spacers.md};
//     `)}
// `

export const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "surgery-sign.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <HeroWrap>
      <HeroImage
        fluid={data.heroImage.childImageSharp.fluid}
        alt="Podiatry and Chiropody that's tailored to your needs"
      />
      {/* <HeroContent>
        <HeroTitle>Chiropody that's tailored to your needs</HeroTitle>
      </HeroContent> */}
    </HeroWrap>
  )
}

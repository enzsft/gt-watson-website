import React from "react"
import styled, { css } from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { spacers, typography } from "../theme"
import { sm } from "../utils"
import { Section, SectionHeader } from "./section"

const AvatarCircle = styled.div`
  width: 120px;
  height: 120px;
  margin: 0 auto;
  border-radius: 50%;

  overflow: hidden;

  ${sm(css`
    width: 200px;
    height: 200px;
  `)};
`

const AvatarName = styled.span`
  display: block;
  padding-top: ${spacers.md};
  font-size: ${typography.fontSizes.md};
`

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${spacers.md};
  margin-top: -${spacers.md};
  padding-bottom: ${spacers.md};

  ${sm(css`
    margin-left: -${spacers.xl};
    margin-top: -${spacers.xl};
    padding-bottom: ${spacers.xl};
  `)};
`

const Column = styled.div`
  width: 50%;
  text-align: center;
  padding-left: ${spacers.md};
  padding-top: ${spacers.md};

  ${sm(css`
    padding-left: ${spacers.xl};
    padding-top: ${spacers.xl};
  `)};
`

const TextContainer = styled.div`
  margin-bottom: -${spacers.xl};
`

export const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      gordonImage: file(relativePath: { eq: "gordon.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lisaImage: file(relativePath: { eq: "lisa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <SectionHeader>Who are we</SectionHeader>
      <Columns>
        <Column>
          <AvatarCircle>
            <Img fluid={data.gordonImage.childImageSharp.fluid} />
          </AvatarCircle>
          <AvatarName>Gordon Watson</AvatarName>
        </Column>
        <Column>
          <AvatarCircle>
            <Img fluid={data.lisaImage.childImageSharp.fluid} />
          </AvatarCircle>
          <AvatarName>Lisa Watson</AvatarName>
        </Column>
      </Columns>
      <TextContainer>
        <p>
          Our Chiropody practice is conveniently located near the centre of
          Tamworth. The well established clinic is a private practice and has
          been owned and operated by Gordon Watson and Lisa Scott-Watson for
          over 29 years. The practice aims to provide the highest quality foot
          care at competitive prices in comfortable and professional
          surroundings.
        </p>
      </TextContainer>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { spacers, typography } from "../theme"
import { sm } from "../utils"
import { Section, SectionHeader } from "./section"

const AvatarCircle = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;

  overflow: hidden;
`

const AvatarName = styled.span`
  display: block;
  padding-top: ${spacers.md};
  font-size: ${typography.fontSizes.md};
`

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${spacers.xl};
  margin-top: -${spacers.xl};
  padding-bottom: ${spacers.xl};
`

const Column = styled.div`
  width: 100%;
  text-align: center;
  padding-left: ${spacers.xl};
  padding-top: ${spacers.xl};

  ${sm(`
    width: 50%;
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
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      lisaImage: file(relativePath: { eq: "lisa.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
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
            <Img fixed={data.gordonImage.childImageSharp.fixed} />
          </AvatarCircle>
          <AvatarName>Gordon Watson</AvatarName>
        </Column>
        <Column>
          <AvatarCircle>
            <Img fixed={data.lisaImage.childImageSharp.fixed} />
          </AvatarCircle>
          <AvatarName>Lisa Watson</AvatarName>
        </Column>
      </Columns>
      <TextContainer>
        <p>
          People spend a great deal of time on their feet, which is why they are
          so important and are one of the key aspects to mobility and
          independence. As such it’s important to take care of them and they
          should be examined regularly to control and prevent foot disorders.
        </p>
        <p>
          Our Chiropody practice is conveniently located near the centre of
          Tamworth. The well established clinic is a private practice and has
          been owned and operated by Gordon Watson and Lisa Scott-Watson for
          over 29 years. The practice aims to provide the highest quality foot
          care at competitive prices in comfortable and professional
          surroundings.
        </p>
        <p>
          We have a full range of up to date equipment and adhere to all the
          latest guidelines and regulations, Gordon regularly undertakes
          continued professional development ,which means all treatments are up
          to date as well.
        </p>
        <p>
          The practice is easy to access, close to both the railway station and
          local bus routes, with ample onsite free parking. Please note the on
          street parking restrictions for permit holders only.
        </p>
      </TextContainer>
    </Section>
  )
}

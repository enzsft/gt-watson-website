import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { colors, page, spacers } from "../theme"

const FooterWrap = styled.footer`
  margin-top: ${spacers.xl};
  padding-top: ${spacers.md};
  padding-bottom: ${spacers.md};

  border-top: ${spacers.xs} solid ${colors.black};
  color: ${colors.black};
`

const FooterContentContaner = styled.div`
  max-width: ${page.width};
  margin: 0 auto;
  padding-left: ${spacers.md};
  padding-right: ${spacers.md};
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Text = styled.span`
  display: block;
  padding-bottom: ${spacers.md};

  :last-child {
    padding-bottom: 0;
  }
`

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      hpcImage: file(relativePath: { eq: "hpc.webp" }) {
        childImageSharp {
          fixed(width: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FooterWrap>
      <FooterContentContaner>
        <FooterContent>
          <div>
            <Text>H.P.C. registered No. CH17007 • Insured • CRB Checked</Text>
            <Text>Copyright © {new Date().getFullYear()} G.T. Watson</Text>
          </div>
          <div>
            <Img
              fixed={data.hpcImage.childImageSharp.fixed}
              alt="Podiatry and Chiropody that's tailored to your needs"
            />
          </div>
        </FooterContent>
      </FooterContentContaner>
    </FooterWrap>
  )
}

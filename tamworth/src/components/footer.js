import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import VisaIcon from "../icons/visa.svg"
import MastercardIcon from "../icons/mastercard.svg"
import DiscoveryIcon from "../icons/discovery.svg"
import { colors, page, spacers } from "../theme"
import { sm } from "../utils"

const FooterWrap = styled.footer`
  margin-top: ${spacers.xl};
  padding-top: ${spacers.md};
  padding-bottom: ${spacers.md};

  border-top: ${spacers.xs} solid ${colors.black};
  color: ${colors.black};

  text-align: center;

  ${sm(`
    text-align: left;
  `)}
`

const FooterContentContainer = styled.div`
  max-width: ${page.width};
  margin: 0 auto;
  padding-left: ${spacers.md};
  padding-right: ${spacers.md};
`

const FooterContent = styled.div`
  align-items: center;
  justify-content: space-between;

  ${sm(`
    display: flex;
  `)}
`

const LeftContent = styled.div`
  padding-bottom: ${spacers.md};
  padding-right: ${spacers.md};

  ${sm(`
    padding-bottom: 0;
  `)}
`

const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${sm(`
    justify-content: flex-start;
  `)}
`

const Text = styled.span`
  display: block;
  padding-bottom: ${spacers.md};

  :last-child {
    padding-bottom: 0;
  }
`

const RightContentWrapper = styled.div`
  padding-right: ${spacers.sm};

  :last-child {
    padding-right: 0;
  }

  svg {
    width: 50px;
    height: 50px;
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
      <FooterContentContainer>
        <FooterContent>
          <LeftContent>
            <Text>H.P.C. registered No. CH17007 • Insured • CRB Checked</Text>
            <Text>Copyright © {new Date().getFullYear()} G.T. Watson</Text>
          </LeftContent>
          <RightContent>
            <RightContentWrapper>
              <VisaIcon />
            </RightContentWrapper>
            <RightContentWrapper>
              <MastercardIcon />
            </RightContentWrapper>
            <RightContentWrapper>
              <DiscoveryIcon />
            </RightContentWrapper>
            <RightContentWrapper>
              <Img
                fixed={data.hpcImage.childImageSharp.fixed}
                alt="Podiatry and Chiropody that's tailored to your needs"
              />
            </RightContentWrapper>
          </RightContent>
        </FooterContent>
      </FooterContentContainer>
    </FooterWrap>
  )
}

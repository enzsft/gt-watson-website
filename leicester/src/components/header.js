import React from "react"
import styled, { css } from "styled-components"
import { page, nav, spacers, colors, typography } from "../theme"
import { sm } from "../utils"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${page.width};
  height: ${nav.height.def};
  margin: 0 auto;
  padding: ${spacers.sm} ${spacers.md};

  ${sm(`
    height: ${nav.height.md};
    display: flex;
    padding: ${spacers.md};
    align-items: baseline;
  `)}
`

const BrandText = styled.span`
  display: block;
  font-family: ${typography.fontFamily};
  padding-right: ${spacers.md};
  font-size: ${typography.fontSizes.lg};
  color: ${colors.black};
  opacity: 1;

  ${sm(`
    font-size: ${typography.fontSizes.xl};
  `)}
`

const ContactText = styled.span`
  display: block;
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSizes.sm};
  color: ${colors.black};
  opacity: 1;

  ${sm(`
    font-size: ${typography.fontSizes.md};
  `)}
`

const ContactLink = styled.a`
  display: block;
  color: ${colors.black};
  word-break: break-all;

  ${sm(`
    display: inline;
  `)}
`

export const Header = () => {
  return (
    <Nav>
      <BrandText>GT Watson</BrandText>
      <ContactText>
        Call us on <ContactLink href="tel:01827 62079">01827 62079</ContactLink>
      </ContactText>
    </Nav>
  )
}

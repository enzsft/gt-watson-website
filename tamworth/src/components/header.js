import React from "react"
import styled, { css } from "styled-components"
import { page, nav, spacers, colors, typography } from "../theme"
import { sm } from "../utils"

const NavOuter = styled.div`
  box-shadow: 8px 8px 10px #ccc;
  margin: 0 auto;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${page.width};
  height: ${nav.height.def};
  margin: 0 auto;
  padding: 0 ${spacers.md};

  ${sm(`
    height: ${nav.height.md};
    display: flex;
  `)}
`

const BrandText = styled.span`
  display: block;
  font-family: ${typography.fontFamily};
  padding-right: ${spacers.md};
  font-size: ${typography.fontSizes.md};
  color: ${colors.black};
  opacity: 1;

  ${sm(`
    font-size: ${typography.fontSizes.lg};
  `)}
`

const BrandSubText = styled.span`
  display: block;
  font-family: ${typography.fontFamily};
  padding-right: ${spacers.md};
  font-size: ${typography.fontSizes.xs};
  color: ${colors.black};
  opacity: 1;

  ${sm(`
    font-size: ${typography.fontSizes.sm};
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
    <NavOuter>
      <Nav>
        <div>
          <BrandText>GT Watson</BrandText>
          <BrandSubText>BSc (Hons), F.S.S.Ch.,M.B.Ch.A</BrandSubText>
        </div>
        <ContactText>
          Call us on{" "}
          <ContactLink href="tel:01827 62079">01827 62079</ContactLink>
        </ContactText>
      </Nav>
    </NavOuter>
  )
}

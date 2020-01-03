import React from "react"
import styled from "styled-components"
import { page, nav, spacers, colors, typography } from "../theme"
import { sm } from "../utils"

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  max-width: ${page.width};
  height: ${nav.height};
  margin: 0 auto;
  padding: ${spacers.md};
`

export const BrandText = styled.span`
  font-family: ${typography.fontFamily};
  font-size: 34px;

  color: ${colors.black};
  opacity: 1;

  ${sm(`
      font-size: ${typography.fontSizes.xl};
    `)}
`

export const Header = () => {
  return (
    <Nav>
      <BrandText>GT Watson</BrandText>
    </Nav>
  )
}

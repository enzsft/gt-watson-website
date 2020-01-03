import React from "react"
import styled from "styled-components"

import { colors, page, spacers } from "../theme"

const FooterWrap = styled.footer`
  margin-top: ${spacers.xl};
  padding-top: ${spacers.xl};
  padding-bottom: ${spacers.xl};

  background-color: ${colors.black};
  color: ${colors.white};
`

const FooterContent = styled.div`
  max-width: ${page.width};
  margin: 0 auto;
  padding-left: ${spacers.md};
  padding-right: ${spacers.md};
`

const EnzymeText = styled.span`
  display: block;
  padding-bottom: ${spacers.md};
`

const CopyrightText = styled.span`
  display: block;
`

export const Footer = () => {
  return (
    <FooterWrap>
      <FooterContent>
        <EnzymeText>
          Built with{" "}
          <span role="img" aria-label="love">
            ❤️
          </span>{" "}
          by Enzyme Software
        </EnzymeText>
        <CopyrightText>
          Copyright © {new Date().getFullYear()} G.T. Watson
        </CopyrightText>
      </FooterContent>
    </FooterWrap>
  )
}

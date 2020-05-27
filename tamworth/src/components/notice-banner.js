import React from "react"
import styled from "styled-components"
import { colors, spacers } from "../theme"
import { md } from "../utils"

const Banner = styled.div`
  padding: ${spacers.md};
  text-align: center;

  background-color: ${colors.black};
  color: ${colors.white};

  font-weight: 600;
`

export const NoticeBanner = props => {
  return <Banner>{props.children}</Banner>
}

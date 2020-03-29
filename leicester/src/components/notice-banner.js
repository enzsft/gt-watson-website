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

export const NoticeBanner = () => {
  return (
    <Banner>
      Please note that during the Corvid-19 pandemic we are able to offer
      emergency treatment in certain circumstances. Please contact us for
      further advice and we will call you back ASAP.
    </Banner>
  )
}

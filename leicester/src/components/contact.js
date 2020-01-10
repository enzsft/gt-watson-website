import React from "react"
import styled from "styled-components"

import { colors, spacers } from "../theme"
import { sm } from "../utils"
import { Card } from "./card"
import { Section, SectionHeader } from "./section"

const DetailsContainer = styled.div`
  height: 100%;
  text-align: left;
  padding-bottom: ${spacers.md};
`

const DetailsList = styled.div`
  margin-top: -${spacers.sm};
`

const DetailsItem = styled.div`
  padding-top: ${spacers.sm};
`

const DetailHeader = styled.h3`
  padding-bottom: ${spacers.sm};
`

const DetailsLink = styled.a`
  color: ${colors.black};
  word-break: break-all;
`

const DetailsAddress = styled.address`
  padding: 0;
  font-style: normal;
`

const GoogleMapsIframe = styled.iframe`
  display: block;
  min-height: 300px;
`

export const Contact = () => {
  return (
    <Section>
      <SectionHeader>Contact</SectionHeader>
      <DetailsContainer>
        <DetailsList>
          <DetailsItem>
            <DetailHeader>Call us on</DetailHeader>
            <DetailsLink href="tel:07908067799">07908 067799</DetailsLink>
          </DetailsItem>
          <DetailsItem>
            <DetailHeader>Email us on</DetailHeader>
            <DetailsLink href="mailto:info@chiropodistleicester.co.uk">
              info@chiropodistleicester.co.uk
            </DetailsLink>
          </DetailsItem>
        </DetailsList>
      </DetailsContainer>
      <GoogleMapsIframe
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=g%20t%20watson%20tamworth&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        title="Google Maps location"
      />
    </Section>
  )
}

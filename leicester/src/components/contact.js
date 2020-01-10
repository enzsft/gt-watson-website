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
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117678.4100450505!2d-1.2265194154731445!3d52.674621072206484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1561418709586!5m2!1sen!2suk"
        frameBorder="0"
        scrolling="no"
        marginHeight={0}
        marginWidth={0}
        title="Google Maps location"
      />
    </Section>
  )
}

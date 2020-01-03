import React from "react"
import styled from "styled-components"

import { colors, spacers, typography } from "../theme"
import { sm } from "../utils"
import { Section, SectionHeader } from "./section"

export const AvatarCircle = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border-radius: 50%;

  overflow: hidden;
`

export const AvatarName = styled.span`
  display: block;
  padding-top: ${spacers.md};
  font-size: ${typography.fontSizes.md};
`

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${spacers.xl};
  margin-top: -${spacers.xl};
`

export const Column = styled.div`
  width: 100%;
  text-align: center;
  padding-left: ${spacers.xl};
  padding-top: ${spacers.xl};

  ${sm(`
      width: 50%;
    `)};
`

export const DetailsContainer = styled.div`
  height: 100%;
  padding: ${spacers.md};
  text-align: left;

  background-color: ${colors.black};
  color: ${colors.white};
`

export const DetailsList = styled.div`
  margin-top: -${spacers.sm};
`

export const DetailsItem = styled.div`
  padding-top: ${spacers.sm};
`

export const DetailHeader = styled.h3`
  padding-bottom: ${spacers.sm};
`

export const DetailsLink = styled.a`
  color: ${colors.white};
  word-break: break-all;
`

export const DetailsAddress = styled.address`
  padding: 0;
  font-style: normal;
`

export const Contact = () => {
  return (
    <Section>
      <SectionHeader>Contact</SectionHeader>
      <Columns>
        <Column>
          <DetailsContainer>
            <DetailsList>
              <DetailsItem>
                <DetailHeader>Call us on</DetailHeader>
                <DetailsLink href="tel:01827 62079">01827 62079</DetailsLink>
              </DetailsItem>
              <DetailsItem>
                <DetailHeader>Email us on</DetailHeader>
                <DetailsLink href="mailto:info@chiropodisttamworth.co.uk">
                  info@chiropodisttamworth.co.uk
                </DetailsLink>
              </DetailsItem>
              <DetailsItem>
                <DetailHeader>Find us at</DetailHeader>
                <DetailsAddress>
                  Pembi Chase
                  <br />
                  11b Victoria Road
                  <br />
                  Tamworth
                  <br />
                  Staffordshire
                  <br />
                  B79 7HS
                </DetailsAddress>
              </DetailsItem>
            </DetailsList>
          </DetailsContainer>
        </Column>
        <Column>
          <iframe
            width="100%"
            height="300"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=g%20t%20watson%20tamworth&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            title="Google Maps location"
          />
        </Column>
      </Columns>
    </Section>
  )
}

import React from "react"
import styled from "styled-components"

import { colors, spacers } from "../theme"
import { sm } from "../utils"
import { Card } from "./card"
import { Section, SectionHeader } from "./section"

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${spacers.xl};
  margin-top: -${spacers.xl};
`

const Column = styled.div`
  width: 100%;
  text-align: center;
  padding-left: ${spacers.xl};
  padding-top: ${spacers.xl};

  ${sm(`
      width: 50%;
    `)};
`

const DetailsContainer = styled.div`
  height: 100%;
  text-align: left;
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
  color: ${colors.white};
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
      <Columns>
        <Column>
          <DetailsContainer>
            <Card>
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
                  <DetailHeader>Facebook</DetailHeader>
                  <DetailsLink href="http://www.facebook.com/chiropodist">
                    http://www.facebook.com/chiropodist
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
            </Card>
          </DetailsContainer>
        </Column>
        <Column>
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
        </Column>
      </Columns>
    </Section>
  )
}

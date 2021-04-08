import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import { Columns, NarrowColumn, WideColumn } from "./columns"
import { Section, SectionHeader } from "./section"
import { spacers } from "../theme"

const Table = styled.table`
  margin-left: -${spacers.md};
  margin-top: -${spacers.sm};
`

const TableRow = styled.tr`
  padding-top: ${spacers.sm};
`

const TableData = styled.td`
  padding-left: ${spacers.md};

  &:first-child {
    font-weight: 600;
  }
`

export const OpeningTimes = () => {
  const data = useStaticQuery(graphql`
    query {
      houseImage: file(relativePath: { eq: "house.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section>
      <SectionHeader>Opening Times</SectionHeader>
      <Columns>
        <NarrowColumn>
          <Img fluid={data.houseImage.childImageSharp.fluid} alt="Surgery" />
        </NarrowColumn>
        <WideColumn>
          <>
            <Table>
              <tbody>
                <TableRow>
                  <TableData>Mon - Thurs</TableData>
                  <TableData>8:00am - 5:30pm</TableData>
                </TableRow>
                <TableRow>
                  <TableData>Fri</TableData>
                  <TableData>8:00am - 4:00pm</TableData>
                </TableRow>
              </tbody>
            </Table>
            <span>
              Tamworth area home visited by arrangement including Polesworth,
              Kingsbury, Lichfield and Measham.
            </span>
          </>
        </WideColumn>
      </Columns>
    </Section>
  )
}

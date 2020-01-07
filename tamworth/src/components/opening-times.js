import React from "react"
import styled from "styled-components"

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
  return (
    <Section>
      <SectionHeader>Opening Times</SectionHeader>
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
    </Section>
  )
}

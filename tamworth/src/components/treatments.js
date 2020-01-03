import React from "react"
import styled from "styled-components"

import { Section, SectionHeader } from "./section"
import { md } from "../utils"
import { colors, spacers } from "../theme"

export const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -${spacers.xl};
  margin-top: -${spacers.xl};
`

export const WideColumn = styled.div`
  width: 100%;
  padding-left: ${spacers.xl};
  padding-top: ${spacers.xl};

  ${md(`
      width: 60%;
    `)};
`

export const NarrowColumn = styled.div`
  width: 100%;
  padding-left: ${spacers.xl};
  padding-top: ${spacers.xl};

  ${md(`
      width: 40%;
    `)};
`

export const PriceContainer = styled.section`
  padding: ${spacers.md};

  background-color: ${colors.black};
  color: ${colors.white};
`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: -${spacers.lg};
`

export const ListItem = styled.li`
  padding-top: ${spacers.md};
`

export const ItemTitle = styled.h3`
  padding-bottom: ${spacers.sm};
`

export const Treatments = () => {
  return (
    <Section>
      <SectionHeader>Treatments</SectionHeader>
      <Columns>
        <WideColumn>
          <List>
            <ListItem>
              <ItemTitle>Corns, Callouses & Hard Skin</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>In growing and problem nails</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>
                Verruca – painless laser therapy and cryosurgery
              </ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Diabetic foot care</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Off the shelf insoles</ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>
                Bio Mechanical examination for foot and lower limb and foot pain
              </ItemTitle>
            </ListItem>
            <ListItem>
              <ItemTitle>Advice</ItemTitle>
            </ListItem>
          </List>
        </WideColumn>
        <NarrowColumn>
          <PriceContainer>
            <h2>Prices</h2>
            <List>
              <ListItem>
                <ItemTitle>Surgery</ItemTitle>
                <span>£24.00</span>
              </ListItem>
              <ListItem>
                <ItemTitle>Pensioners in surgery (over 66)</ItemTitle>
                <span>£20.00</span>
              </ListItem>
              <ListItem>
                <ItemTitle>Home visits</ItemTitle>
                <span>£26.00</span>
              </ListItem>
            </List>
          </PriceContainer>
        </NarrowColumn>
      </Columns>
    </Section>
  )
}

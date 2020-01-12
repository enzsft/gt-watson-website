import React from "react"

import { Section, SectionHeader } from "./section"
import { List, ListItem, ItemTitle } from "./list"

export const Prices = () => {
  return (
    <Section>
      <SectionHeader>Prices</SectionHeader>
      <p>Payment by cash, card or Cheque.</p>
      <List>
        <ListItem>
          <ItemTitle>Home visit inclusive of routine treatment</ItemTitle>
          <div>
            <span>£28.00 - 1 person</span>
          </div>
          <div>
            <span>£44.00 - 2 person</span>
          </div>
        </ListItem>
        <ListItem>
          <ItemTitle>
            Fees renegotiated for residential and nursing homes
          </ItemTitle>
        </ListItem>
      </List>
    </Section>
  )
}

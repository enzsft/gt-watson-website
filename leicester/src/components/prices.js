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
          <ItemTitle>Home visit inclusive of treatment</ItemTitle>
          <span>£26.00</span>
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

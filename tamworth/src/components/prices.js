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
    </Section>
  )
}

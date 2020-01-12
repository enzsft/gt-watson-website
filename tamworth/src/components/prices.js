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
          <ItemTitle>Routine treatment</ItemTitle>
          <span>£26.00</span>
        </ListItem>
        <ListItem>
          <ItemTitle>Routine pensioner treatment (65+ years)</ItemTitle>
          <span>£22.00</span>
        </ListItem>
        <ListItem>
          <ItemTitle>Home visits</ItemTitle>
          <div>
            <span>£28.00 - 1 person</span>
          </div>
          <div>
            <span>£44.00 - 2 person</span>
          </div>
        </ListItem>
        <ListItem>
          <ItemTitle>Othortics</ItemTitle>
          <span>£40.00+</span>
        </ListItem>
      </List>
    </Section>
  )
}

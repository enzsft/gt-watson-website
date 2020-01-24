import styled from "styled-components"

import { spacers, typography } from "../theme"

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: -${spacers.md};
`

export const ListItem = styled.li`
  padding-top: ${spacers.md};
`

export const ItemTitle = styled.span`
  display: block;
  padding-bottom: ${spacers.sm};
  font-weight: 600;
  font-size: ${typography.fontSizes.sm};
`

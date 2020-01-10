import styled from "styled-components"

import { spacers } from "../theme"

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

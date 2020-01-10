import styled from "styled-components"
import { md } from "../utils"
import { spacers } from "../theme"

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

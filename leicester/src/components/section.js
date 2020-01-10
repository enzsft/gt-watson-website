import styled from "styled-components"

import { colors, spacers, typography } from "../theme"

export const Section = styled.section`
  padding-top: ${spacers.xl};
`

export const SectionHeader = styled.h1`
  padding-bottom: ${spacers.sm};
  margin-bottom: ${spacers.xl};

  border-bottom: 1px solid ${colors.black};

  font-size: ${typography.fontSizes.lg};
`

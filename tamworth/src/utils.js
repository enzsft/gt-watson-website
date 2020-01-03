import { breakpoints } from "./theme"

const buildStyle = breakpoint => styles =>
  `@media only screen and (min-width: ${breakpoint}){${styles}}`

export const sm = buildStyle(breakpoints.sm)
export const md = buildStyle(breakpoints.md)
export const lg = buildStyle(breakpoints.lg)

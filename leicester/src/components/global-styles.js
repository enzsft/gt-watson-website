import React from "react"
import Helmet from "react-helmet"
import { createGlobalStyle } from "styled-components"
import { normalize } from "polished"
import { colors, spacers, typography } from "../theme"

const BaseStyles = createGlobalStyle`
  ${normalize()}

  html {
    font-size: ${typography.baseFontSize};
  }

  body {
    color: ${colors.black};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

    font-family: ${typography.fontFamily};
  }

  html,
  body {
    min-height: 100%;

    animation: fadein 0.2s ease-in;
    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hgroup,
  ul,
  ol,
  dl,
  blockquote,
  p,
  address,
  table,
  fieldset,
  figure,
  pre,
  hr {
    margin: 0;
    padding: 0;
    padding-bottom: ${spacers.lg};
  }

  ul,
  ol,
  dd {
    margin: 0;
    padding: 0;
    padding-left: ${spacers.lg};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${typography.fontFamily};
  }
`

export const GlobalStyles = () => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:400,600"
          rel="stylesheet"
        />
      </Helmet>
      <BaseStyles />
    </>
  )
}

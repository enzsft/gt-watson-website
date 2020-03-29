/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { GlobalStyles } from "./global-styles"
import { Header } from "./header"
import { Footer } from "./footer"
import { NoticeBanner } from "./notice-banner"

export const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <NoticeBanner />
      <Header />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

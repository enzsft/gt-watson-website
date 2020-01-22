import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Slider from "react-slick"
import Helmet from "react-helmet"

import { Section, SectionHeader } from "./section"
import { List, ListItem, ItemTitle } from "./list"
import { Columns, NarrowColumn, WideColumn } from "./columns"
import { spacers } from "../theme"

const SliderContainer = styled.div`
  width: 100%;
  margin-right: ${spacers.md};
`

const SliderImage = styled(Img)`
  display: block;
  height: 100%;
  width: 100%;
  margin: 0 auto;
`

const ImageSliderContaner = styled.div`
  display: flex !important;
  align-items: center;
`

export const Treatments = () => {
  const data = useStaticQuery(graphql`
    query {
      surgery1Image: file(relativePath: { eq: "surgery-inner-1.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      surgery2Image: file(relativePath: { eq: "surgery-inner-2.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot1Image: file(relativePath: { eq: "foot-1.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot2Image: file(relativePath: { eq: "foot-2.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot3Image: file(relativePath: { eq: "foot-3.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot4Image: file(relativePath: { eq: "foot-4.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot5Image: file(relativePath: { eq: "foot-5.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
      foot6Image: file(relativePath: { eq: "foot-6.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Helmet>
      <Section>
        <SectionHeader>Treatments</SectionHeader>
        <Columns>
          <WideColumn>
            <List>
              <ListItem>
                <ItemTitle>Corns, Callouses & Hard Skin</ItemTitle>
              </ListItem>
              <ListItem>
                <ItemTitle>In growing and problem nails</ItemTitle>
              </ListItem>
              <ListItem>
                <ItemTitle>Diabetic foot care</ItemTitle>
              </ListItem>
              <ListItem>
                <ItemTitle>Off the shelf insoles</ItemTitle>
              </ListItem>
              <ListItem>
                <ItemTitle>
                  Bio Mechanical examination for foot and lower limb and foot
                  pain
                </ItemTitle>
              </ListItem>
              <ListItem>
                <ItemTitle>Advice</ItemTitle>
              </ListItem>
            </List>
          </WideColumn>
          <NarrowColumn>
            <SliderContainer>
              <Slider dots autoplay infinite fade autoplaySpeed={3000}>
                <ImageSliderContaner>
                  <SliderImage
                    fixed={data.surgery1Image.childImageSharp.fixed}
                  />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage
                    fixed={data.surgery2Image.childImageSharp.fixed}
                  />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot1Image.childImageSharp.fixed} />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot2Image.childImageSharp.fixed} />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot3Image.childImageSharp.fixed} />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot4Image.childImageSharp.fixed} />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot5Image.childImageSharp.fixed} />
                </ImageSliderContaner>
                <ImageSliderContaner>
                  <SliderImage fixed={data.foot6Image.childImageSharp.fixed} />
                </ImageSliderContaner>
              </Slider>
            </SliderContainer>
          </NarrowColumn>
        </Columns>
      </Section>
    </>
  )
}

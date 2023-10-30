import { gql } from "@apollo/client";

export const PAGES_LIST = gql(`
query {
    pages {
      data {
        attributes{
          title,
          paths{
            data {
            attributes {
              pathName,
              pathURL
            }
          }
          },
          sections{
           ... on ComponentComponentsNavbar {
            __typename
            backLabel,
            backURL {
              data{
                attributes{
                  pathName,
                  pathURL
                }
              }
          },
            pageTitle,
            itemsLabel
          },
            ... on ComponentComponentsCategoryList {
              __typename
              categories {
                data {
                  id,
                  attributes{
                    name,
                    color,
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const SINGLE_PAGE = gql(`query ($pageName: String) {
    pages(filters: {title: {eq: $pageName}}) {
      data {
        attributes{
          title,
          paths{
            data {
              attributes {
                pathName,
                pathURL
              }
            }
          },
          sections{
           ... on ComponentComponentsNavbar {
            __typename
            backLabel,
            backURL {
              data {
                attributes {
                  pathName,
                  pathURL
                }
              }
            },
            pageTitle,
            itemsLabel
          },
            ... on ComponentComponentsCategoryList {
              __typename
              categories {
                data {
                  id,
                  attributes{
                    name,
                    color,
                  }
                }
              }
            }
          }
        }
      }
    }
  }`);

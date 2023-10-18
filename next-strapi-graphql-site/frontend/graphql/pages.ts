import { gql } from "@apollo/client";

export const SINGLE_PAGE = gql(`query ($pageName: String) {
    pages(filters: {title: {eq: $pageName}}) {
      data {
        attributes{
          title,
          sections{
           ... on ComponentComponentsNavbar {
            __typename
            backLabel,
            backURL,
            pageTitle,
            ItemsLabel
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

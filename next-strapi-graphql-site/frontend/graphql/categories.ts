import { gql } from "@apollo/client";

export const CATEGORY_LIST = gql(`query {
    categories {
      data {
        attributes {
          color,
          name,
          icon{
            data {
              attributes{
                url
              }
            }
          }
          publishedAt
        }
      }
    }
}`);

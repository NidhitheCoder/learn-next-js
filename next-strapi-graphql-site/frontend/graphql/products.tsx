import { gql } from "@apollo/client";

export const PRODUCT_LIST = gql(`query {
    products {
      data {
        id,
        attributes {
          name,
          imageURL {
            data {
              attributes {
                formats
              }
            }
          },
          categories {
            data
            {
              attributes {
                name,
                color
              }
            }
                  },
          seller {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }`);

export const SINGLE_PRODUCT = gql(`query ($productId: ID) {
    products(filters: {id: {eq: $productId}}) {
      data {
        id,
        attributes {
          name,
          imageURL {
            data {
              attributes {
                formats
              }
            }
          },
          categories {
            data
            {
              attributes {
                name,
                color
              }
            }
                  },
          seller {
            data {
              attributes {
                name,
                address,
                contactNumber
              }
            }
          }
        }
      }
    }
  }`);
